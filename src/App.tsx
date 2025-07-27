import React, { useState, useCallback, useRef, useEffect } from 'react';
import { create, all } from 'mathjs';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InputCard } from './components/InputCard';
import { GraphCard } from './components/GraphCard';
import { AnalysisCard } from './components/AnalysisCard';
import { Loader } from './components/Loader';
import { analyzeFunction, extractTextFromImage } from './services/geminiService';
import type { FunctionAnalysis, PlotPoint } from './types';
import { Welcome } from './components/Welcome';
import { ErrorAlert } from './components/ErrorAlert';
//import { Link } from 'react-router-dom'; // ⬅️ 꼭 추가! footer 에 사용
//import NotFound from './pages/NotFound';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
    adsbygoogle: any;
  }
}

const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
const math = create(all);

const preprocessExpression = (expr: string): string => {
  return expr
    .replace(/\broot\b/gi, 'sqrt')
    .replace(/(\d)([a-zA-Z(])/g, '$1*$2')
    .replace(/\)([\w(])/g, ')*$1');
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessingInput, setIsProcessingInput] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<FunctionAnalysis | null>(null);
  const [plotPoints, setPlotPoints] = useState<PlotPoint[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9481442618892258';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const funcFromUrl = params.get('function');
    if (funcFromUrl) {
      setInputValue(decodeURIComponent(funcFromUrl));

      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const generatePoints = useCallback((expression: string, range: { min: number; max: number }): PlotPoint[] => {
    const points: PlotPoint[] = [];
    try {
      const node = math.parse(expression);
      const code = node.compile();
      const step = (range.max - range.min) / 400;
      const Y_AXIS_LIMIT = Math.max(20, Math.abs(range.min), Math.abs(range.max)) * 2;

      for (let x = range.min; x <= range.max; x += step) {
        let y: number | null;
        try {
          const evaluatedY = code.evaluate({ x });
          y = Number.isFinite(evaluatedY) && Math.abs(evaluatedY) <= Y_AXIS_LIMIT
            ? parseFloat(evaluatedY.toFixed(4))
            : null;
        } catch {
          y = null;
        }
        points.push({ x: parseFloat(x.toFixed(4)), y });
      }
      return points;
    } catch (err) {
      setError('그래프를 그리는 중 오류가 발생했습니다.');
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
      math.parse(processedExpression);

      const result = await analyzeFunction(processedExpression);
      const expressionForGraphing = preprocessExpression(result.function);
      setAnalysisResult({ ...result, function: expressionForGraphing });

      const range = result.suggestedPlotRange ?? { min: -10, max: 10 };
      const points = generatePoints(expressionForGraphing, range);
      if (points.length > 0) setPlotPoints(points);
    } catch {
      setError('분석 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, generatePoints]);

  const handleImageUpload = useCallback(async (file: File) => {
    setIsProcessingInput(true);
    setError(null);
    try {
      const extractedText = await extractTextFromImage(file);
      setInputValue(extractedText || '');
      if (!extractedText) setError('이미지에서 수식을 찾지 못했습니다.');
    } catch {
      setError('이미지 분석 중 오류가 발생했습니다.');
    } finally {
      setIsProcessingInput(false);
    }
  }, []);

  const handleVoiceToggle = useCallback(() => {
    if (!SpeechRecognitionAPI) {
      setError('이 브라우저는 음성 인식을 지원하지 않습니다.');
      return;
    }

    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    } else {
      recognitionRef.current = new SpeechRecognitionAPI();
      recognitionRef.current.lang = 'ko-KR';
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim();
        const mathTranscript = transcript
          .replace(/엑스/g, 'x')
          .replace(/더하기/g, '+')
          .replace(/빼기/g, '-')
          .replace(/곱하기/g, '*')
          .replace(/나누기/g, '/')
          .replace(/는/g, '=')
          .replace(/ /g, '');
        setInputValue(mathTranscript);
      };
      recognitionRef.current.onerror = () => setError('음성 인식 오류');
      recognitionRef.current.onend = () => setIsRecording(false);

      recognitionRef.current.start();
      setIsRecording(true);
    }
  }, [isRecording]);

  return (
    <div className="min-h-screen bg-slate-100/50 text-slate-800">
      <Header />
	<main className="container mx-auto pt-8 pb-10 px-4 md:px-6 lg:px-8">

	{/* 🚫 상단 광고 제거 → 승인 후 복구 가능 */}
        {/* 
        <div className="my-6 w-full flex justify-center items-center">
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9481442618892258"
            data-ad-slot="1207051623"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <script
            dangerouslySetInnerHTML={{
              __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
            }}
          />
        </div>
        */}

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
            {analysisResult?.analysis && !isLoading && (
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

        {/* ✅ 하단 광고 */}
        <div className="my-10 w-full flex justify-center items-center">
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9481442618892258"
            data-ad-slot="6190602236"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <script
            dangerouslySetInnerHTML={{
              __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
            }}
          />
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default App;