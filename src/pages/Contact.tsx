import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="max-w-2xl mx-auto py-12 px-6 bg-white shadow-md rounded-lg mt-12">
        <h1 className="text-2xl font-bold mb-4 text-indigo-600">문의하기</h1>
        <p className="mb-6 text-slate-700">
  이 앱에 대한 <strong>개선 제안</strong>이나 <strong>오류 신고</strong>,<br />
  <strong>기능 요청</strong>이 있으시다면 아래 버튼을 눌러<br />
  Google Form을 통해 알려주세요. <br /><br />
  사용자의 피드백은 <strong>더 나은 서비스를 만드는 데</strong><br />
  큰 도움이 됩니다! 😊
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
