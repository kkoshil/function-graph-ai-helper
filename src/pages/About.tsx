// src/pages/About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
  Mic,
  ShieldCheck,
  Users,
  Brain,
  Camera,
  BarChart3,
  Sparkles,
  Lightbulb
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-8">
          <h1 className="text-3xl font-bold text-indigo-600 mb-2 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-500" />
            함수 그래프 AI 도우미란?
          </h1>
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-indigo-600">함수 그래프 AI 도우미</strong>는 
            사용자가 입력한 <strong>수학 함수식을 AI가 자동 분석</strong>하여 
            그래프를 시각적으로 생성하고 주요 성질을 단계별로 설명하는 무료 웹앱입니다.
            이 도구는 단순한 그래프 계산기를 넘어, 
            <strong>수학 개념을 직관적으로 이해하고 학습 효과를 높이는 데 최적화</strong>되어 있습니다.
          </p>

          {/* 기능 설명 */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Brain className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-slate-800">AI 분석 기반</h2>
                <p className="text-slate-700">
                  AI가 수식을 자동으로 해석하고, 그래프를 시각적으로 생성하며 
                  함수의 대칭성, 극값, 증가/감소 구간 등 핵심 개념을 함께 제공합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mic className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-slate-800">음성 인식 지원</h2>
                <p className="text-slate-700">
                  마이크를 통해 말로 함수식을 입력할 수 있으며, 
                  복잡한 수식도 음성으로 간편하게 변환됩니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Camera className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-slate-800">이미지 인식</h2>
                <p className="text-slate-700">
                  손글씨나 교재에 있는 수식을 촬영하면 AI가 이미지에서 식을 추출해 분석합니다. 
                  학습 자료를 바로 활용할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BarChart3 className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-slate-800">학습 보조 도구</h2>
                <p className="text-slate-700">
                  학생, 교사, 학부모 누구나 쉽게 사용할 수 있도록 직관적인 UI를 제공합니다. 
                  <Link to="/examples" className="text-indigo-500 underline">예시 페이지</Link>에서 
                  다양한 함수 그래프를 체험할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-slate-800">개인정보 보호</h2>
                <p className="text-slate-700">
                  이 앱은 회원가입이 필요 없으며, 사용자의 입력값은 서버에 저장되지 않아 안전합니다. 
                  모든 분석은 브라우저 내에서 처리됩니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-slate-800">누구나 무료 이용</h2>
                <p className="text-slate-700">
                  로그인이나 설치 없이, 브라우저만 있으면 언제 어디서든 무료로 이용 가능합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 추가: 학습 활용 시나리오 */}
          <div className="bg-slate-50 p-4 rounded-md flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-yellow-500 mt-1" />
            <div>
              <h2 className="font-semibold text-slate-800">이 앱을 활용하면?</h2>
              <p className="text-slate-700 leading-relaxed">
                수업 준비 중인 교사는 빠르게 그래프 자료를 만들 수 있고,  
                학생은 문제를 풀며 개념을 시각적으로 확인할 수 있습니다.  
                학부모는 자녀 학습을 지도할 때 활용 가능합니다.  
                <Link to="/guide" className="text-indigo-500 underline">사용 가이드</Link>를 참고해 
                더 다양한 활용법을 확인해보세요.
              </p>
            </div>
          </div>

          {/* 내부 링크 유도 */}
          <div className="bg-indigo-50 border rounded-lg p-4">
            <p className="text-slate-700 text-sm">
              더 알아보기: 
              <Link to="/guide" className="text-indigo-500 underline ml-1">사용 가이드</Link>, 
              <Link to="/faq" className="text-indigo-500 underline ml-1">FAQ</Link>, 
              <Link to="/contact" className="text-indigo-500 underline ml-1">문의 페이지</Link>
            </p>
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

export default About;
