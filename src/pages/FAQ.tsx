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
  Sparkles,
  Globe,
  Info
} from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-8">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">📚 자주 묻는 질문 (FAQ)</h1>
          <p className="text-slate-700 text-sm leading-relaxed mb-6">
            이 페이지는 <strong>함수 그래프 AI 도우미</strong> 사용 시 자주 묻는 질문과 답변을 정리한 곳입니다.
            더 자세한 사용법은 <Link to="/guide" className="text-indigo-500 underline">사용 가이드</Link>에서, 
            다양한 예시는 <Link to="/examples" className="text-indigo-500 underline">예시 페이지</Link>에서 확인하실 수 있습니다.
          </p>

          <div className="space-y-6">
            {/* Q1 */}
            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <HelpCircle className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">이 사이트는 어떤 기능을 제공하나요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                <strong>함수 그래프 AI 도우미</strong>는 사용자가 입력한 수학 함수식을 자동으로 분석하고, 그래프를 시각적으로 생성해주는 AI 기반 웹 앱입니다.
                단순한 그래프 계산기와 달리 <strong>함수의 성질, 극값, 대칭성, 실생활 예시</strong>까지 단계별로 제공합니다.
                이 도구는 <strong>학생, 교사, 학부모</strong> 모두에게 유용하며, 학습 효율을 크게 높여줍니다.
              </p>
            </div>

            {/* Q2 */}
            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <User className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">회원가입이 필요한가요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                아니요. 이 서비스는 <strong>회원가입 없이 무료로</strong> 누구나 이용할 수 있습니다.
                웹 기반으로 설치 없이 브라우저만 있으면 어디서든 사용할 수 있습니다.
              </p>
            </div>

            {/* Q3 */}
            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Lock className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">입력한 데이터는 저장되나요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                사용자가 입력한 데이터는 <strong>저장되지 않으며</strong>, 브라우저 내에서만 처리됩니다.
                개인정보나 학습 데이터가 서버에 전송되지 않으므로 안전하게 사용할 수 있습니다.
              </p>
            </div>

            {/* Q4 */}
            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Code2 className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">함수식은 어떤 형식으로 입력해야 하나요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                예: <code className="bg-slate-200 px-1 rounded">x^2 - 3x + 2</code> 처럼 입력하세요. 
                곱셈 기호(*)는 반드시 포함해야 하며, 괄호가 올바르게 닫혔는지 확인하세요.
                <Link to="/guide" className="text-indigo-500 underline ml-1">가이드</Link>에서 더 많은 입력 예시를 볼 수 있습니다.
              </p>
            </div>

            {/* Q5 */}
            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <AlertTriangle className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">그래프가 안 그려지는 경우 어떻게 하나요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                대부분 수식 오타가 원인입니다. 
                예를 들어 <code className="bg-slate-200 px-1 rounded">x^2</code> 대신 <code>x*x</code>로 입력하거나,
                괄호가 닫히지 않은 경우 오류가 발생할 수 있습니다.
                문제가 지속된다면 <Link to="/contact" className="text-indigo-500 underline">피드백 페이지</Link>를 통해 알려주세요.
              </p>
            </div>

            {/* Q6 */}
            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">음성/이미지 입력은 어떻게 사용하나요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                홈 화면에서 <strong>마이크 버튼</strong>을 눌러 음성으로 함수를 말하거나, 
                <strong>카메라 아이콘</strong>을 클릭해 손글씨나 책 사진을 업로드하면 AI가 수식을 인식해 분석합니다.
              </p>
            </div>

            {/* 추가 Q7 */}
            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Globe className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">어떤 브라우저에서 사용할 수 있나요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                Chrome, Edge, Safari 등 최신 브라우저에서 최적화되어 있습니다. 
                모바일에서도 완벽히 대응하며, 설치 없이 바로 실행 가능합니다.
              </p>
            </div>

            {/* 추가 Q8 */}
            <div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Info className="w-5 h-5 text-indigo-500" />
                <h2 className="text-lg">AI가 제공하는 분석의 한계는 무엇인가요?</h2>
              </div>
              <p className="text-slate-700 mt-1">
                AI가 제공하는 분석은 학습을 돕기 위한 참고용입니다. 
                모든 상황에서 완벽할 수 없으므로, 중요한 계산은 직접 검산하는 습관이 필요합니다.
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
