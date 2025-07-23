// src/pages/About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Brain, Mic, Camera, Users, Sparkles, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 space-y-10">
          <div>
            <h1 className="text-4xl font-bold text-indigo-600 mb-2">함수 그래프 AI 도우미</h1>
            <p className="text-slate-600 text-lg">
              수학 함수 분석을 AI에게 맡기세요. 입력만 하면 그래프와 분석이 자동으로 생성됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 사용자 대상 */}
            <div className="flex gap-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-1">누가 사용할 수 있나요?</h2>
                <p className="text-slate-600">
                  중고등학생, 교사, 학부모, 대학생 등 누구나 자유롭게 사용할 수 있으며 회원가입은 필요하지 않습니다.
                </p>
              </div>
            </div>

            {/* 입력 방식 */}
            <div className="flex gap-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <Mic className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-1">입력 방식은 어떻게 되나요?</h2>
                <p className="text-slate-600">
                  키보드 수식 입력은 물론, 마이크로 음성 입력하거나 교재 사진을 업로드하여 식을 인식할 수 있습니다.
                </p>
              </div>
            </div>

            {/* 주요 기능 */}
            <div className="flex gap-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <Sparkles className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-1">어떤 기능이 있나요?</h2>
                <p className="text-slate-600">
                  AI가 함수의 특징을 자동으로 분석해주고, 시각적인 그래프와 연습문제도 함께 제공합니다.
                </p>
              </div>
            </div>

            {/* 개인정보 안전 */}
            <div className="flex gap-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mb-1">데이터는 안전한가요?</h2>
                <p className="text-slate-600">
                  네. 모든 데이터는 브라우저에서만 처리되며 서버에 저장되지 않습니다. 개인정보 걱정 없이 사용하실 수 있어요.
                </p>
              </div>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="text-center mt-8">
            <Link
              to="/"
              className="inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
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

export default About;
