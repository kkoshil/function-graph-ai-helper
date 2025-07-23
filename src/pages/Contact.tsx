// src/pages/Contact.tsx
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { Mail, HelpCircle, Home } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 space-y-6">
          <h1 className="text-3xl font-bold text-indigo-600 flex items-center gap-2">
            <Mail className="w-6 h-6" />
            문의하기
          </h1>

          <p className="text-slate-700 leading-relaxed">
            이 앱에 대한 <strong className="text-indigo-600">개선 제안</strong>, <strong className="text-indigo-600">오류 신고</strong>,
            또는 <strong className="text-indigo-600">기능 요청</strong>이 있으시다면  
            아래 버튼을 눌러 Google Form을 통해 알려주세요.
          </p>

          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>그래프가 제대로 출력되지 않아요</li>
            <li>음성/이미지 인식이 잘 안 돼요</li>
            <li>이런 기능이 있으면 좋겠어요</li>
            <li>불편하거나 이상한 점이 있어요</li>
          </ul>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2">
            <p className="text-slate-800">
              🙏 사용자님의 피드백은 더 나은 서비스를 만드는 데 정말 큰 도움이 됩니다.
            </p>
            <p className="text-sm text-slate-600">
              가능한 빠르게 확인하고 개선하겠습니다!
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYeZv477m_CYfCP17gHJTfnGHE9gaIqZe5eE-MFmgWaSh8AA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm flex items-center gap-1"
            >
              <Mail className="w-4 h-4" />
              문의 폼 열기
            </a>

            <Link
              to="/faq"
              className="px-4 py-2 bg-slate-200 text-slate-800 rounded hover:bg-slate-300 transition text-sm flex items-center gap-1"
            >
              <HelpCircle className="w-4 h-4" />
              자주 묻는 질문
            </Link>

            <Link
              to="/"
              className="px-4 py-2 bg-slate-100 border border-slate-300 text-slate-700 rounded hover:bg-slate-200 transition text-sm flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              홈으로
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
