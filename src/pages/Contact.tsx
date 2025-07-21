import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="min-h-screen bg-slate-100 py-10 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6">문의하기</h1>
          <p className="text-slate-700 mb-4">
            이 앱에 대한 <span className="font-medium">개선 제안이나 오류 신고</span>,<br />
            <span className="font-medium">기능 요청</span>이 있으시다면 아래 버튼을 눌러<br />
            Google Form을 통해 알려주세요.
          </p>
          <p className="text-slate-700 mb-6">
            사용자의 피드백은 <span className="font-medium">더 나은 서비스를 만드는 데</span><br />
            큰 도움이 됩니다! 😊
          </p>

          {/* 버튼 2개 나란히 배치 */}
          <div className="flex justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYeZv477m_CYfCP17gHJTfnGHE9gaIqZe5eE-MFmgWaSh8AA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow hover:bg-indigo-600 transition"
            >
              📮 문의 폼 열기
            </a>
            <Link
              to="/"
              className="px-6 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg shadow hover:bg-slate-300 transition"
            >
              🏠 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
