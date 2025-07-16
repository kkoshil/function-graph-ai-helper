
import React from 'react';
import type { AnalysisDetails, PracticeProblem } from '../types';

interface AnalysisCardProps {
  analysis: AnalysisDetails;
  practiceProblem: PracticeProblem | null;
}

const AnalysisItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="bg-slate-50 p-3 rounded-lg ring-1 ring-slate-200">
        <dt className="font-semibold text-slate-700 truncate">{label}</dt>
        <dd className="mt-1 text-slate-600">{value}</dd>
    </div>
);

export const AnalysisCard: React.FC<AnalysisCardProps> = ({ analysis, practiceProblem }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6 animate-fade-in">
      <div>
        <h2 className="text-lg font-bold text-slate-800">AI 분석 결과</h2>
        <p className="mt-2 text-sm text-slate-600 bg-slate-100 p-3 rounded-lg">{analysis.summary}</p>
      </div>

      <div>
        <h3 className="text-md font-bold text-slate-700 mb-3">주요 특징</h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <AnalysisItem label="정의역" value={analysis.domain} />
          <AnalysisItem label="치역" value={analysis.range} />
          <AnalysisItem label="x절편 (근)" value={analysis.roots} />
          <AnalysisItem label="y절편" value={analysis.yIntercept} />
          <AnalysisItem label="극값" value={analysis.extrema} />
          <AnalysisItem label="대칭성" value={analysis.symmetry} />
        </dl>
      </div>

      {practiceProblem && (
        <div>
          <h3 className="text-md font-bold text-slate-700 mb-3">연습 문제 ✏️</h3>
          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg space-y-2">
            <p className="text-sm text-slate-800">{practiceProblem.question}</p>
            <details className="text-sm">
              <summary className="cursor-pointer font-medium text-indigo-700 hover:text-indigo-800">정답 보기</summary>
              <p className="mt-2 text-indigo-900 bg-indigo-100 p-2 rounded">{practiceProblem.answer}</p>
            </details>
          </div>
        </div>
      )}
    </div>
  );
};
