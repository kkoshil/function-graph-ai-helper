// src/pages/Examples.tsx
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

const examples = [
  {
    group: '1차 함수',
    description:
      '1차 함수는 직선의 형태를 가지며 기울기와 y절편으로 표현됩니다. 기울기의 부호에 따라 증가 또는 감소하는 직선을 그립니다.',
    functions: ['y = 2x + 1', 'y = -x + 3', 'y = 0.5x - 4'],
    images: ['/example-linear1.png', '/example-linear2.png']
  },
  {
    group: '2차 함수',
    description:
      '2차 함수는 포물선의 형태를 가지며, 꼭짓점과 축, 대칭성을 중심으로 분석됩니다. 최대/최소값과 근의 개수 파악에 유용합니다.',
    functions: ['y = x^2', 'y = x^2 - 4x + 3', 'y = -2x^2 + x - 1'],
    images: ['/example-quadratic1.png', '/example-quadratic2.png']
  },
  {
    group: '삼각 함수',
    description:
      '삼각 함수는 주기적인 파동 형태를 가지며, sin, cos, tan 함수는 각도와 길이 관계를 표현합니다. 물리, 공학, 파동 현상에 자주 사용됩니다.',
    functions: ['y = sin(x)', 'y = cos(x)', 'y = tan(x)', 'y = sin(x) + cos(x)'],
    images: ['/example-trig1.png', '/example-trig2.png']
  },
  {
    group: '지수/로그 함수',
    description:
      '지수 함수는 빠른 증가/감소를 나타내며, 로그 함수는 반대로 완만하게 증가합니다. 성장, 감쇠, 데이터 분석 등에서 자주 활용됩니다.',
    functions: ['y = 2^x', 'y = e^x', 'y = log(x)', 'y = ln(x)'],
    images: ['/example-explog1.png', '/example-explog2.png']
  },
  {
    group: '절댓값/루트 함수',
    description:
      '절댓값 함수는 y축 대칭의 V자 그래프를, 루트 함수는 완만하게 증가하는 곡선을 가집니다. 실수 범위와 정의역에 주의해야 합니다.',
    functions: ['y = abs(x - 2)', 'y = root(x)', 'y = root(x^2 + 1)'],
    images: ['/example-absroot1.png', '/example-absroot2.png']
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
          <h1 className="text-3xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
            📈 함수 예시 모음
          </h1>
          <p className="text-slate-700 text-sm mb-6 leading-relaxed">
            이 페이지에서는 다양한 <strong>수학 함수 그래프</strong> 예시를 확인할 수 있습니다. 
            각 예시를 클릭하면 해당 함수의 그래프와 성질을 시각적으로 이해할 수 있으며, 
            학습 중 개념 정리에 큰 도움이 됩니다.  
            사용법은 <Link to="/guide" className="text-indigo-500 underline">사용 가이드</Link>에서, 
            궁금한 점은 <Link to="/faq" className="text-indigo-500 underline">FAQ</Link>에서 확인하세요.
          </p>

          {examples.map((section, index) => (
            <div key={index} className="mb-8 border border-slate-200 rounded">
              <button
                className="w-full text-left px-4 py-3 font-semibold bg-slate-50 hover:bg-slate-100 text-slate-800 transition"
                onClick={() => toggle(index)}
              >
                {section.group}
              </button>
              {openIndex === index && (
                <div className="px-4 py-4 bg-white text-slate-700 border-t border-slate-200 space-y-4">
                  {/* 그룹 설명 */}
                  <p className="text-slate-600 text-sm leading-relaxed">{section.description}</p>

                  {/* 예시 함수 목록 */}
                  <ul className="list-disc pl-6 space-y-1">
                    {section.functions.map((func, idx) => (
                      <li key={idx}>
                        <code className="bg-slate-200 px-2 py-0.5 rounded">{func}</code>
                      </li>
                    ))}
                  </ul>

                  {/* 예시 이미지 */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {section.images.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`${section.group} 예시 그래프 ${idx + 1}`}
                        className="rounded shadow w-full sm:w-1/2"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="bg-indigo-50 border rounded-lg p-4 mb-6">
            <p className="text-slate-700 text-sm leading-relaxed">
              다양한 함수 예시를 더 보고 싶으신가요?  
              <Link to="/guide" className="text-indigo-500 underline ml-1">사용 가이드</Link>와 
              <Link to="/faq" className="text-indigo-500 underline ml-1">FAQ</Link>에서 
              추가 정보를 확인하고, <Link to="/contact" className="text-indigo-500 underline ml-1">문의 페이지</Link>를 통해 새로운 예시 제안을 해주세요!
            </p>
          </div>

          <div className="text-center">
            <a
              href="/"
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
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
