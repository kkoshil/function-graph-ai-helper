// src/pages/FAQ.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const FAQ: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6">자주 묻는 질문 (FAQ)</h1>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-800">Q. 이 사이트는 어떤 기능을 제공하나요?</h2>
            <p className="text-slate-700 mt-2">
              수학 함수식을 입력하면 AI가 그래프를 자동으로 그려주고, 함수의 성질을 분석해줍니다.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-800">Q. 회원가입이 필요한가요?</h2>
            <p className="text-slate-700 mt-2">
              아니요. 이 서비스는 회원가입 없이 누구나 무료로 이용할 수 있습니다.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-800">Q. 입력한 데이터는 저장되나요?</h2>
            <p className="text-slate-700 mt-2">
              아닙니다. 입력된 함수식은 저장되지 않으며, 모두 클라이언트에서 처리됩니다.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-800">Q. 어떤 형식의 함수식을 입력해야 하나요?</h2>
            <p className="text-slate-700 mt-2">
              예: <code className="bg-slate-200 px-1 rounded">x^2 - 3x + 2</code> 와 같이 입력하시면 됩니다. 곱셈 기호(*)는 생략하지 말아주세요.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
