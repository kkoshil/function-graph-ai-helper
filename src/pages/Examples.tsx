import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const examples = [
  {
    group: '1차 함수',
    functions: ['y = 2x + 1', 'y = -x + 3', 'y = 0.5x - 4']
  },
  {
    group: '2차 함수',
    functions: ['y = x^2', 'y = x^2 - 4x + 3', 'y = -2x^2 + x - 1']
  },
  {
    group: '삼각 함수',
    functions: ['y = sin(x)', 'y = cos(x)', 'y = tan(x)', 'y = sin(x) + cos(x)']
  },
  {
    group: '지수/로그 함수',
    functions: ['y = 2^x', 'y = e^x', 'y = log(x)', 'y = ln(x)']
  },
  {
    group: '절댓값/루트 함수',
    functions: ['y = abs(x - 2)', 'y = root(x)', 'y = root(x^2 + 1)']
  }
];

const Examples: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-100 py-10 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">함수 예시 모음</h1>

          {examples.map((section, index) => (
            <div key={index} className="mb-4 border border-slate-200 rounded">
              <button
                className="w-full text-left px-4 py-3 font-semibold bg-slate-50 hover:bg-slate-100 text-slate-800 transition"
                onClick={() => toggle(index)}
              >
                {section.group}
              </button>
              {openIndex === index && (
                <div className="px-4 py-2 bg-white text-slate-700 border-t border-slate-200">
                  <ul className="list-disc pl-6 space-y-1">
                    {section.functions.map((func, idx) => (
                      <li key={idx}>
                        <code className="bg-slate-200 px-2 py-0.5 rounded">{func}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <div className="mt-8 text-center">
            <a href="/" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
              홈으로 돌아가기
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Examples;
