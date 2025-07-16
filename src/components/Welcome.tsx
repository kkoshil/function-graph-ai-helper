
import React from 'react';
import { ChartIcon } from './icons';

export const Welcome: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-[400px] md:h-[500px] lg:h-full flex flex-col items-center justify-center text-center">
      <ChartIcon className="w-24 h-24 text-indigo-200" />
      <h2 className="mt-6 text-2xl font-bold text-slate-800">함수 그래프 AI 도우미에 오신 것을 환영합니다!</h2>
      <p className="mt-2 max-w-md text-slate-500">
        왼쪽 입력창에 함수식을 입력하고 'AI로 분석하기' 버튼을 누르면, 이곳에 아름다운 그래프와 상세한 분석이 나타납니다.
      </p>
      <div className="mt-6 text-sm text-left bg-slate-50 p-4 rounded-lg border">
        <h4 className="font-semibold text-slate-700 mb-2">이렇게 입력해보세요:</h4>
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          <li>이차함수: <code className="bg-slate-200 px-1 rounded">x^2 - 4</code></li>
          <li>삼차함수: <code className="bg-slate-200 px-1 rounded">x^3 - 3*x</code></li>
          <li>삼각함수: <code className="bg-slate-200 px-1 rounded">sin(x)</code></li>
          <li>분수함수: <code className="bg-slate-200 px-1 rounded">1 / x</code></li>
        </ul>
      </div>
    </div>
  );
};
