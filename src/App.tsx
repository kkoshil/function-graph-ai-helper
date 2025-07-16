import React, { useState, useCallback, useRef, useEffect } from 'react';
import { create, all } from 'mathjs';
import { Header } from './components/Header';
import { InputCard } from './components/InputCard';
import { GraphCard } from './components/GraphCard';
import { AnalysisCard } from './components/AnalysisCard';
import { Loader } from './components/Loader';
import { analyzeFunction, extractTextFromImage } from './services/geminiService';
import type { FunctionAnalysis, PlotPoint } from './types';
import { Welcome } from './components/Welcome';
import { ErrorAlert } from './components/ErrorAlert';

// --- Web Speech API Type Definitions ---
// This is to add support for a non-standard API
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
  onend: (() => any) | null;
}

interface SpeechRecognitionStatic {
  new(): SpeechRecognition;
}

interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly isFinal: boolean;
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
  readonly message: string;
}

declare global {
  interface Window {
    SpeechRecognition: SpeechRecognitionStatic;
    webkitSpeechRecognition: SpeechRecognitionStatic;
  }
}
// --- End Web Speech API Type Definitions ---

const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
const math = create(all);

/**
 * Implicit multiplication cannot be parsed by math.js, so we need to preprocess it.
 * Example: 2x -> 2*x, (x-1)(x+1) -> (x-1)*(x+1), 5sin(x) -> 5*sin(x)
 * @param expr The user-provided expression.
 * @returns The preprocessed expression.
 */
const preprocessExpression = (expr: string): string => {
  return expr
    .replace(/(\d)([a-zA-Z(])/g, '$1*$2') // 2x -> 2*x | 2( -> 2*(
    .replace(/\)([\w(])/g, ')*$1');      // )x -> )*x | )( -> )*(
};


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isProcessingInput, setIsProcessingInput] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<FunctionAnalysis | null>(null);
  const [plotPoints, setPlotPoints] = useState<PlotPoint[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>('x^2 - 2*x + 1');
  const [isInitialAnalysisPending, setIsInitialAnalysisPending] = useState(false);

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const funcFromUrl = params.get('function');
    if (funcFromUrl) {
        setInputValue(decodeURIComponent(funcFromUrl));
        setIsInitialAnalysisPending(true);
        window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (SpeechRecognitionAPI) {
      recognitionRef.current = new SpeechRecognitionAPI();
      const recognition = recognitionRef.current;
      recognition.continuous = false;
      recognition.lang = 'ko-KR';
      recognition.interimResults = false;

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim();
        const mathTranscript = transcript
          .replace(/엑스/g, 'x')
          .replace(/와이/g, 'y')
          .replace(/더하기/g, '+')
          .replace(/빼기/g, '-')
          .replace(/곱하기/g, '*')
          .replace(/나누기/g, '/')
          .replace(/는/g, '=')
          .replace(/ /g, '');
        setInputValue(mathTranscript);
        setIsRecording(false);
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error:', event.error);
        setError('음성 인식 중 오류가 발생했습니다.');
        setIsRecording(false);
      };
      
      recognition.onend = () => {
        setIsRecording(false);
      };

    }
  }, []);
  
  const generatePoints = useCallback((expression: string, range: {min: number, max: number}): PlotPoint[] => {
    const points: PlotPoint[] = [];
    try {
        const node = math.parse(expression);
        const code = node.compile();
        
        const step = (range.max - range.min) / 400; // Increased points for smoother curve
        const Y_AXIS_LIMIT = Math.max(20, Math.abs(range.min), Math.abs(range.max)) * 2;

        for (let x = range.min; x <= range.max; x += step) {
            let y: number | null;
            try {
                const evaluatedY = code.evaluate({ x });
                if (!Number.isFinite(evaluatedY)) {
                    y = null; // Mark as discontinuity for Infinity or NaN
                } else if (Math.abs(evaluatedY) > Y_AXIS_LIMIT) {
                    // If value exceeds a dynamic threshold, treat as discontinuity to prevent distorted graphs.
                    y = null;
                }
                else {
                    y = parseFloat(evaluatedY.toFixed(4));
                }
            } catch(e) {
                // Some evaluations might throw an error (e.g. log(-1))
                y = null;
            }

            points.push({ x: parseFloat(x.toFixed(4)), y });
        }
        return points;
    } catch (err) {
        console.error("Error generating plot points:", err);
        setError(`그래프를 그리는 중 오류가 발생했습니다: ${err instanceof Error ? err.message : 'Unknown error'}`);
        return [];
    }
  }, []);

  const handleAnalyze = useCallback(async () => {
    if (!inputValue.trim()) {
      setError('함수식을 입력해주세요.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);
    setPlotPoints(null);

    try {
      // 1. Preprocess and Validate client-side first. This is deterministic and fast.
      const processedExpression = preprocessExpression(inputValue);
      try {
        math.parse(processedExpression); // This will throw an error if the syntax is invalid
      } catch (validationError) {
        console.error("Validation Error:", validationError);
        setError(`유효하지 않은 함수식입니다. 수식을 확인해주세요. (예: 2x는 2*x, 괄호 확인)`);
        setIsLoading(false);
        return;
      }

      // 2. If valid, call AI for analysis. AI's role is now analysis, not validation.
      const result = await analyzeFunction(processedExpression);
      
      setAnalysisResult(result);
      if (result.suggestedPlotRange) {
        const points = generatePoints(result.function, result.suggestedPlotRange);
        if(points.length > 0) {
            setPlotPoints(points);
        }
      } else {
        // Fallback in case AI doesn't return a range
        const fallbackRange = { min: -10, max: 10 };
        const points = generatePoints(result.function, fallbackRange);
        setPlotPoints(points);
        console.warn("AI did not provide a suggested plot range. Using default.");
      }

    } catch (e) {
      console.error(e);
      setError('분석 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, generatePoints]);
  
  useEffect(() => {
    if (isInitialAnalysisPending) {
        handleAnalyze();
        setIsInitialAnalysisPending(false);
    }
  }, [isInitialAnalysisPending, handleAnalyze]);

  const handleImageUpload = useCallback(async (file: File) => {
    setIsProcessingInput(true);
    setError(null);
    try {
      const extractedText = await extractTextFromImage(file);
      setInputValue(extractedText || '');
       if (!extractedText) {
         setError('이미지에서 수식을 찾지 못했습니다. 다른 이미지를 사용해주세요.');
       }
    } catch (e) {
      console.error(e);
      setError('이미지 분석 중 오류가 발생했습니다.');
    } finally {
      setIsProcessingInput(false);
    }
  }, []);

  const handleVoiceToggle = useCallback(() => {
    if (!SpeechRecognitionAPI) {
      setError('사용하시는 브라우저는 음성 인식을 지원하지 않습니다.');
      return;
    }
    
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    } else {
      recognitionRef.current?.start();
      setIsRecording(true);
      setError(null);
    }
  }, [isRecording]);


  return (
    <div className="min-h-screen bg-slate-100/50 text-slate-800">
      <Header />
      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-8">
            <InputCard
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onAnalyze={handleAnalyze}
              onImageUpload={handleImageUpload}
              onVoiceToggle={handleVoiceToggle}
              isProcessingInput={isProcessingInput}
              isRecording={isRecording}
              isLoading={isLoading}
            />
            {error && <ErrorAlert message={error} />}
            {isLoading && (
              <div className="flex justify-center items-center p-8 bg-white rounded-xl shadow-lg">
                <Loader />
              </div>
            )}
            {analysisResult?.analysis && !isLoading &&(
              <AnalysisCard analysis={analysisResult.analysis} practiceProblem={analysisResult.practiceProblem} />
            )}
          </div>
          <div className="lg:col-span-8">
            {plotPoints && analysisResult ? (
              <GraphCard functionExpression={analysisResult.function} data={plotPoints} />
            ) : (
                !isLoading && !error && <Welcome />
            )}
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-sm text-slate-500 mt-8">
        <p>&copy; {new Date().getFullYear()} 함수 그래프 AI 도우미. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
