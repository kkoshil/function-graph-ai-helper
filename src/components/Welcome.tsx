import React from 'react';
import { ChartIcon } from './icons';

export const Welcome: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col items-center justify-center space-y-8 text-left">
      <ChartIcon className="w-24 h-24 text-indigo-300 mx-auto" />

      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center">
        함수 그래프 AI 도우미에 오신 것을 환영합니다!
      </h2>

      <p className="text-slate-700 leading-relaxed text-base text-center max-w-2xl">
        이 사이트는 사용자가 입력한 수학 함수식을 기반으로 자동으로 그래프를 생성하고,
        해당 함수의 성질을 분석해주는 AI 기반 도우미입니다.
        <br />
        초중고 및 대학 수준의 수학 학습을 돕고,
        수학 교사, 학부모, 자율학습 중인 학생들에게도 매우 유용한 도구입니다.
      </p>

      <div className="bg-slate-50 border rounded-lg p-6 w-full max-w-2xl">
        <p className="text-slate-700 mb-4">
          예를 들어, <code className="bg-slate-200 px-2 py-0.5 rounded font-mono">y = x^2 - 4x + 3</code> 같은 이차함수를 입력하면
          아래 정보를 자동 분석합니다:
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

      <div className="bg-slate-100 border rounded-lg p-6 w-full max-w-2xl">
        <h4 className="font-semibold text-slate-700 mb-2">이렇게 입력해보세요:</h4>
        <ul className="grid sm:grid-cols-2 gap-x-4 list-disc list-inside text-slate-600 text-sm pl-2">
          <li>이차함수: <code className="bg-slate-200 px-1 rounded">x^2 - 4</code></li>
          <li>삼차함수: <code className="bg-slate-200 px-1 rounded">x^3 - 3*x</code></li>
          <li>삼각함수: <code className="bg-slate-200 px-1 rounded">sin(x)</code></li>
          <li>분수함수: <code className="bg-slate-200 px-1 rounded">1 / x</code></li>
          <li>지수함수: <code className="bg-slate-200 px-1 rounded">2^x</code></li>
          <li>로그함수: <code className="bg-slate-200 px-1 rounded">log(x)</code></li>
        </ul>
      </div>

      <p className="text-slate-600 mt-4 text-sm text-center max-w-2xl">
        본 서비스는 누구나 무료로 사용할 수 있으며, 웹 기반으로 설치 없이 이용할 수 있습니다.
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
