import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header />
	<main className="flex-grow flex justify-center items-start pt-20 pb-16 px-4">
  <section className="w-full max-w-3xl bg-white shadow-md rounded-xl p-8 sm:p-12">

          <h1 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-6">문의하기</h1>
          <p className="text-slate-800 leading-relaxed mb-4">
            이 앱에 대한 <strong className="text-indigo-700">개선 제안</strong>이나 <strong className="text-indigo-700">오류 신고</strong>,<br />
            <strong className="text-indigo-700">기능 요청</strong>이 있으시다면 아래 버튼을 눌러<br />
            Google Form을 통해 알려주세요.
          </p>
          <p className="text-slate-800 mb-6">
            사용자의 피드백은 <strong className="text-indigo-700">더 나은 서비스를 만드는데</strong> 큰 도움이 됩니다! 😊
          </p>
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYeZv477m_CYfCP17gHJTfnGHE9gaIqZe5eE-MFmgWaSh8AA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow hover:bg-indigo-600 transition"
            >
              📮 문의 폼 열기
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
