// src/pages/Privacy.tsx
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
          <h1 className="text-3xl font-bold text-indigo-600 mb-2 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-indigo-500" />
            개인정보 처리방침
          </h1>

          <p className="text-slate-700 leading-relaxed">
            <strong>함수 그래프 AI 도우미</strong>는 사용자의 개인정보를 존중하며, 
            본 서비스는 광고 및 분석 목적 외의 개인정보를 수집하지 않습니다. 
            본 방침은 사이트 이용 시 적용됩니다.
          </p>

          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <h2 className="font-semibold text-slate-800">1. 수집하는 정보</h2>
            <p className="text-slate-700">
              이 서비스는 회원가입이 필요 없으며, 사용자가 입력한 수식, 음성, 이미지는 
              <strong>서버에 저장되지 않고 브라우저 내에서만 처리</strong>됩니다.
            </p>
          </section>

          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <h2 className="font-semibold text-slate-800">2. 쿠키 및 광고</h2>
            <p className="text-slate-700">
              이 사이트는 Google AdSense 광고를 포함할 수 있으며, 
              Google은 광고 최적화를 위해 쿠키를 사용할 수 있습니다. 
              사용자는 브라우저 설정을 통해 쿠키 사용을 거부할 수 있습니다.
            </p>
          </section>

          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <h2 className="font-semibold text-slate-800">3. 개인정보 제공</h2>
            <p className="text-slate-700">
              본 서비스는 법적 요구사항을 제외하고 개인정보를 제3자에게 제공하지 않습니다.
            </p>
          </section>

          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <h2 className="font-semibold text-slate-800">4. 문의하기</h2>
            <p className="text-slate-700">
              개인정보 관련 문의는 <Link to="/contact" className="text-indigo-500 underline">문의 페이지</Link>를 통해 연락하실 수 있습니다.
            </p>
          </section>

          <div className="text-sm text-slate-600">
            <p>최종 업데이트: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="text-center mt-6">
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

export default Privacy;
