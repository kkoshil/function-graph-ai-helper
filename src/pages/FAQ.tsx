import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
  HelpCircle,
  User,
  Lock,
  Code2,
  AlertTriangle,
  Sparkles
} from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-8">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">📚 자주 묻는 질문 (FAQ)</h1>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <HelpCircle className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">이 사이트는 어떤 기능을 제공하나요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                수학 함수식을 입력하면 AI가 그래프를 자동 생성하고, 주요 특징을 분석해줍니다.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <User className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">회원가입이 필요한가요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                아니요. 이 서비스는 회원가입 없이 누구나 자유롭게 사용할 수 있습니다.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Lock className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">입력한 데이터는 저장되나요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                저장되지 않습니다. 입력된 데이터는 브라우저 내에서만 처리되며, 서버에 전송되지 않습니다.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Code2 className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">함수식은 어떤 형식으로 입력해야 하나요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                예: <code className="bg-slate-200 px-1 rounded">x^2 - 3x + 2</code> 와 같이 입력해 주세요.  
                <strong className="text-indigo-600">곱셈 기호(*)는 생략하지 않도록 주의</strong>해 주세요.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <AlertTriangle className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">그래프가 안 그려지는 경우 어떻게 하나요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                수식에 오타가 있는 경우가 많습니다.  
                <code className="bg-slate-200 px-1 rounded">x^2</code> 대신 <code>x*x</code>로 입력하거나  
                <code>sin(x</code>처럼 괄호가 닫히지 않은 경우를 확인해보세요.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">음성/이미지 입력은 어떻게 사용하나요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                홈 화면에서 마이크 버튼을 누르면 음성으로 함수식을 말할 수 있고,  
                카메라 아이콘을 클릭하면 손글씨나 책 사진을 업로드할 수 있습니다.  
                AI가 자동으로 식을 인식합니다.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
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
