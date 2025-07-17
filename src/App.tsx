
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { create, all } from 'mathjs';
import { Header } from './components/Header';
import { InputCard } from './components/InputCard';
import { GraphCard } from './components/GraphCard';
import { AnalysisCard } from './components/AnalysisCard';
import { Loader } from './components/Loader';
import { analyzeFunction, extractTextFromImage } from './services/geminiService';
import type { FunctionAnalysis, PlotPoint, HistoryEntry } from './types';
import { Welcome } from './components/Welcome';
import { ErrorAlert } from './components/ErrorAlert';
import { HistoryCard } from './components/HistoryCard';
import { Toast } from './components/Toast';

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

const preprocessExpression = (expr: string): string => {
  return expr
    .replace(/\broot\b/gi, 'sqrt') // 'root'를 math.js가 이해하는 'sqrt'로 변환 (대소문자 무시)
    .replace(/(\d)([a-zA-Z(])/g, '$1*$2')
    .replace(/\)([\w(])/g, ')*$1');
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
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);


  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('functionHistory');
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error("Could not load history from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('functionHistory', JSON.stringify(history));
    } catch (error) {
      console.error("Could not save history to localStorage", error);
    }
  }, [history]);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

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
      const processedExpression = preprocessExpression(inputValue);
      try {
        math.parse(processedExpression);
      } catch (validationError) {
        console.error("Validation Error:", validationError);
        setError(`유효하지 않은 함수식입니다. 수식을 확인해주세요. (예: 2x는 2*x, 괄호 확인)`);
        setIsLoading(false);
        return;
      }

      const result = await analyzeFunction(processedExpression);
      setAnalysisResult(result);
      
      const expressionForGraphing = processedExpression;

      if (result.suggestedPlotRange) {
        const points = generatePoints(expressionForGraphing, result.suggestedPlotRange);
        if(points.length > 0) {
            setPlotPoints(points);
        }
      } else {
        const fallbackRange = { min: -10, max: 10 };
        const points = generatePoints(expressionForGraphing, fallbackRange);
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
      setError('お使いのブラウザは音声認識をサポートしていません。');
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

  const handleSaveToHistory = useCallback((expression: string) => {
    if (history.some(item => item.expression === expression)) {
      setToastMessage('이미 저장된 함수입니다.');
      return;
    }
    const newEntry: HistoryEntry = {
      id: Date.now().toString(),
      expression: expression,
      date: new Date().toLocaleDateString('ko-KR'),
    };
    setHistory(prev => [newEntry, ...prev]);
    setToastMessage('다시 보기에 저장되었습니다.');
  }, [history]);

  const handleDeleteFromHistory = useCallback((id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
    setToastMessage('삭제되었습니다.');
  }, []);

  const handleLoadFromHistory = useCallback((expression: string) => {
    setInputValue(expression);
    setIsInitialAnalysisPending(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


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
            <HistoryCard 
                history={history}
                onLoad={handleLoadFromHistory}
                onDelete={handleDeleteFromHistory}
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
              <GraphCard 
                functionExpression={analysisResult.function} 
                data={plotPoints}
                onSaveToHistory={handleSaveToHistory}
                isSaved={history.some(item => item.expression === analysisResult.function)}
              />
            ) : (
                !isLoading && !error && <Welcome />
            )}
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-sm text-slate-500 mt-8">
        <p>&copy; {new Date().getFullYear()} 함수 그래프 AI 도우미. All Rights Reserved.</p>
      </footer>
      <Toast message={toastMessage} />
    </div>
  );
};

export default App;
