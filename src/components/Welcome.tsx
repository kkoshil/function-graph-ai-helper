import React from 'react';
import { ChartIcon } from './icons';

export const Welcome: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-auto md:h-auto lg:h-full flex flex-col items-center justify-center text-left space-y-6">
      <ChartIcon className="w-24 h-24 text-indigo-200 mx-auto" />

      <h2 className="text-2xl font-bold text-slate-800 text-center">
        함수 그래프 AI 도우미에 오신 것을 환영합니다!
      </h2>

      <p className="text-slate-700 leading-relaxed">
        이 사이트는 사용자가 입력한 수학 함수식을 기반으로 자동으로 그래프를 생성하고, 해당 함수의 성질을 분석해주는 AI 기반 도우미입니다.
        <br />
        초중고 및 대학 수준의 수학 학습을 돕고, 수학 교사나 학부모, 그리고 자율학습 중인 학생들에게도 매우 유용한 도구입니다.
      </p>

      <p className="text-slate-700 leading-relaxed">
        예를 들어, <code className="bg-slate-200 px-1 rounded">y = x^2 - 4x + 3</code> 와 같은 이차함수를 입력하면 그래프를 그려주고,
        아래와 같은 정보를 자동으로 분석합니다:
      </p>

      <ul className="list-disc list-inside space-y-1 text-slate-600 pl-4">
        <li>함수의 최고차항 및 차수</li>
        <li>그래프의 대칭성 및 축</li>
        <li>극값(최대/최소값)</li>
        <li>증가/감소 구간</li>
        <li>근(해)의 개수 및 위치</li>
        <li>활용 가능한 연습문제 추천</li>
      </ul>

      <div className="bg-slate-50 p-4 rounded-lg border text-sm">
        <h4 className="font-semibold text-slate-700 mb-2">이렇게 입력해보세요:</h4>
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>이차함수: <code className="bg-slate-200 px-1 rounded">x^2 - 4</code></li>
          <li>삼차함수: <code className="bg-slate-200 px-1 rounded">x^3 - 3*x</code></li>
          <li>삼각함수: <code className="bg-slate-200 px-1 rounded">sin(x)</code></li>
          <li>분수함수: <code className="bg-slate-200 px-1 rounded">1 / x</code></li>
          <li>지수함수: <code className="bg-slate-200 px-1 rounded">2^x</code></li>
          <li>로그함수: <code className="bg-slate-200 px-1 rounded">log(x)</code></li>
        </ul>
      </div>

      <p className="text-slate-600 mt-6 text-sm text-center">
        본 서비스는 누구나 무료로 사용할 수 있으며, 웹 기반으로 설치 없이 이용할 수 있습니다.
      </p>
    </div>
  );
};
