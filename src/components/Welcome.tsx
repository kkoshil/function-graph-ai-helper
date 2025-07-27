import React from 'react';
import { ChartIcon } from './icons';
import { Sparkles, BookOpen, LineChart, Info, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Welcome: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col items-center justify-center space-y-10 text-left">
      <ChartIcon className="w-24 h-24 text-indigo-300 mx-auto" />

      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center">
        함수 그래프 AI 도우미에 오신 것을 환영합니다!
      </h2>

      {/* 소개 섹션 */}
      <div className="flex items-start gap-4 w-full max-w-3xl">
        <Sparkles className="w-6 h-6 text-indigo-500 mt-1" />
        <div className="space-y-3">
          <p className="text-slate-700 leading-relaxed text-base">
            <strong>함수 그래프 AI 도우미</strong>는 사용자가 입력한 수학 함수를
            AI가 자동으로 분석하여 그래프를 시각화하고, 함수의 성질을 단계별로
            설명해주는 무료 웹 서비스입니다. 
            이 도구는 단순히 그래프를 그려주는 것을 넘어, <strong>함수 개념을 깊이 이해하고 문제 해결 능력을 키우는 데 도움</strong>을 줍니다.
          </p>
          <p className="text-slate-700 leading-relaxed text-base">
            특히 수학을 처음 접하는 중학생, 심화 개념을 공부하는 고등학생, 
            그리고 수업 준비를 하는 교사나 학부모에게도 강력한 학습 도구가 됩니다.
            이 앱은 브라우저만 있으면 어디서든 실행할 수 있으며, 설치가 필요 없고 사용이 매우 간단합니다.
          </p>
          <p className="text-slate-700 leading-relaxed text-base">
            👉 사용법이 궁금하다면 <Link to="/guide" className="text-indigo-500 underline">사용 가이드</Link>를 확인하고, 
            다양한 예시는 <Link to="/examples" className="text-indigo-500 underline">함수 예제 페이지</Link>에서 확인해보세요. 
            또한 <Link to="/faq" className="text-indigo-500 underline">FAQ</Link>에서는 자주 묻는 질문에 대한 답변을 제공합니다.
          </p>
        </div>
      </div>

      {/* 교육적 활용 가치 */}
      <div className="bg-slate-50 border rounded-lg p-6 w-full max-w-3xl space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <Info className="w-5 h-5 text-indigo-500" />
          <p className="text-slate-800 font-semibold">왜 이 앱이 특별할까요?</p>
        </div>
        <p className="text-slate-700">
          기존의 그래프 계산기와 달리, 이 앱은 단순 계산을 넘어 <strong>AI 기반 분석</strong>을 제공합니다.
          예를 들어, 입력한 함수에 대해 그래프를 그리는 것뿐만 아니라, 
          함수의 대칭성, 증가·감소 구간, 극값과 근의 개수, 실생활 활용 예시까지 한 번에 제공합니다. 
          이러한 분석은 개념 이해를 돕고 수학적 사고력을 높이는 데 큰 역할을 합니다.
        </p>
        <ul className="list-disc list-inside text-slate-600 pl-2 space-y-1">
          <li>복잡한 함수도 자동으로 인식하고 시각화</li>
          <li>문제 풀이에 필요한 핵심 개념을 한눈에 확인</li>
          <li>실생활 사례와 함께 개념 연결 학습 가능</li>
          <li>교재, 과제, 수업 준비에 활용 가능</li>
        </ul>
      </div>

      {/* 분석 항목 섹션 */}
      <div className="bg-slate-50 border rounded-lg p-6 w-full max-w-3xl">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-indigo-500" />
          <p className="text-slate-800 font-semibold">예를 들어,</p>
        </div>
        <p className="text-slate-700 mb-4">
          <code className="bg-slate-200 px-2 py-0.5 rounded font-mono">y = x^2 - 4x + 3</code> 같은 이차함수를 입력하면 아래 정보를 자동 분석합니다:
        </p>
        <ul className="list-disc list-inside text-slate-600 space-y-1 pl-2">
          <li>함수의 최고차항 및 차수</li>
          <li>그래프의 대칭성 및 축</li>
          <li>극값(최대/최소값)</li>
          <li>증가/감소 구간</li>
          <li>근(해)의 개수 및 위치</li>
          <li>활용 가능한 연습문제 추천</li>
        </ul>
      </div>

      {/* 그래프 예시 이미지 */}
      <div className="w-full max-w-3xl flex flex-col sm:flex-row gap-4">
        <img
          src="/welcome-graph1.png"
          alt="분수함수 그래프 예시"
          className="rounded-lg shadow-md w-full sm:w-1/2"
        />
        <img
          src="/welcome-graph2.png"
          alt="이차함수 그래프 예시"
          className="rounded-lg shadow-md w-full sm:w-1/2"
        />
      </div>

      {/* 입력 예시 */}
      <div className="bg-slate-100 border rounded-lg p-6 w-full max-w-3xl">
        <div className="flex items-center gap-2 mb-2">
          <LineChart className="w-5 h-5 text-indigo-500" />
          <h4 className="font-semibold text-slate-700">이렇게 입력해보세요:</h4>
        </div>
        <ul className="grid sm:grid-cols-2 gap-x-4 list-disc list-inside text-slate-600 text-sm pl-2">
          <li>이차함수: <code className="bg-slate-200 px-1 rounded">x^2 - 4</code></li>
          <li>삼차함수: <code className="bg-slate-200 px-1 rounded">x^3 - 3*x</code></li>
          <li>삼각함수: <code className="bg-slate-200 px-1 rounded">sin(x)</code></li>
          <li>분수함수: <code className="bg-slate-200 px-1 rounded">1 / x</code></li>
          <li>지수함수: <code className="bg-slate-200 px-1 rounded">2^x</code></li>
          <li>로그함수: <code className="bg-slate-200 px-1 rounded">log(x)</code></li>
        </ul>
      </div>

      {/* 학습 가이드 안내 */}
      <div className="bg-slate-50 border rounded-lg p-6 w-full max-w-3xl">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="w-5 h-5 text-indigo-500" />
          <p className="font-semibold text-slate-700">더 알아보기</p>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed">
          AI 기반 그래프 분석이 처음이신가요? 
          <Link to="/guide" className="text-indigo-500 underline ml-1">사용 가이드</Link>에서 단계별 안내를 살펴보고, 
          <Link to="/examples" className="text-indigo-500 underline ml-1">예시 페이지</Link>에서 다양한 함수를 직접 체험해보세요.
          학습 중 궁금한 점은 언제든 <Link to="/faq" className="text-indigo-500 underline ml-1">FAQ</Link>를 확인할 수 있습니다.
        </p>
      </div>

      <p className="text-slate-600 mt-4 text-sm text-center max-w-2xl">
        본 서비스는 누구나 무료로 사용할 수 있으며, 웹 기반으로 설치 없이 간편하게 이용 가능합니다.
        앞으로 더 다양한 AI 학습 도구도 추가될 예정입니다.
      </p>

      <div className="text-center mt-4">
        <a
          href="/about"
          className="inline-block px-5 py-2.5 bg-indigo-500 text-white font-medium rounded-lg shadow hover:bg-indigo-600 transition"
        >
          더 자세히 알아보기
        </a>
      </div>
    </div>
  );
};
