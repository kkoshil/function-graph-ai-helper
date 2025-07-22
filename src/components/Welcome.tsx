import React from 'react';
import { ChartIcon } from './icons';
import { Brain, MousePointerClick, Image, Mic, Sparkles, Info } from 'lucide-react';

export const Welcome: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 lg:p-16 flex flex-col space-y-10 text-slate-800">
      {/* 로고 및 제목 */}
      <div className="text-center">
        <ChartIcon className="w-20 h-20 text-indigo-300 mx-auto mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">함수 그래프 AI 도우미</h1>
        <p className="text-slate-600 text-sm sm:text-base">
          누구나 쉽고 빠르게 수학 함수를 시각화하고, AI로 분석할 수 있는 웹앱입니다.
        </p>
      </div>

      {/* 주요 설명 */}
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          이 사이트는 사용자가 입력한 수학 함수식을 기반으로 자동으로 그래프를 생성하고,
          <strong className="text-indigo-600"> 함수의 성질을 분석</strong>해주는 AI 기반 도우미입니다.
        </p>
        <p>
          중·고등학교, 대학 수준의 학습에 적합하며, 학생, 교사, 학부모 모두에게 유용하게 활용될 수 있습니다.
        </p>
      </div>

      {/* 기능 요약 카드 */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-slate-50 p-4 rounded-lg shadow flex items-start space-x-4">
          <MousePointerClick className="w-6 h-6 text-indigo-500 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-800">✍️ 수식 입력</h3>
            <p className="text-sm text-slate-600">일반적인 함수식을 직접 입력하여 그래프를 생성합니다.</p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg shadow flex items-start space-x-4">
          <Mic className="w-6 h-6 text-indigo-500 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-800">🎙️ 음성 인식</h3>
            <p className="text-sm text-slate-600">마이크로 말하면 수식을 인식하여 자동 변환됩니다.</p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg shadow flex items-start space-x-4">
          <Image className="w-6 h-6 text-indigo-500 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-800">📸 이미지 업로드</h3>
            <p className="text-sm text-slate-600">손글씨나 교재 이미지를 업로드하면 AI가 수식을 추출합니다.</p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg shadow flex items-start space-x-4">
          <Sparkles className="w-6 h-6 text-indigo-500 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-800">📈 AI 자동 분석</h3>
            <p className="text-sm text-slate-600">그래프 생성 후 함수의 성질을 자동으로 분석해줍니다.</p>
          </div>
        </div>
      </div>

      {/* 분석 기능 리스트 */}
      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
        <h4 className="font-semibold text-indigo-700 mb-2 flex items-center">
          <Info className="w-5 h-5 mr-2" />
          분석되는 항목들
        </h4>
        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
          <li>함수의 최고차항 및 차수</li>
          <li>그래프의 대칭성 및 축</li>
          <li>극값(최대/최소값)</li>
          <li>증가/감소 구간</li>
          <li>근(해)의 개수 및 위치</li>
          <li>연습문제 추천</li>
        </ul>
      </div>

      {/* 입력 예시 */}
      <div className="bg-slate-50 border rounded-lg p-4 text-sm space-y-2">
        <h4 className="font-semibold text-slate-700">이렇게 입력해보세요:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <p>이차함수: <code className="bg-slate-200 px-1 rounded">x^2 - 4</code></p>
          <p>삼차함수: <code className="bg-slate-200 px-1 rounded">x^3 - 3*x</code></p>
          <p>삼각함수: <code className="bg-slate-200 px-1 rounded">sin(x)</code></p>
          <p>분수함수: <code className="bg-slate-200 px-1 rounded">1 / x</code></p>
          <p>지수함수: <code className="bg-slate-200 px-1 rounded">2^x</code></p>
          <p>로그함수: <code className="bg-slate-200 px-1 rounded">log(x)</code></p>
        </div>
      </div>

      {/* CTA 버튼 */}
      <div className="text-center mt-6">
        <a
          href="/about"
          className="inline-block px-5 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          더 자세히 알아보기 →
        </a>
      </div>
    </div>
  );
};
