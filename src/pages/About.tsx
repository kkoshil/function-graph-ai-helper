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
  BarChart3
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-8">
          <h1 className="text-3xl font-bold text-indigo-600 mb-2">함수 그래프 AI 도우미란?</h1>
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-indigo-600">함수 그래프 AI 도우미</strong>는
            수학 함수식을 입력하면 AI가 자동으로 분석하여 그래프를 그려주고,
            주요 수학적 특징(극값, 교점, 증가/감소 구간 등)을 시각적으로 보여주는 무료 웹앱입니다.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Brain className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-slate-800">AI 분석 기반</h2>
                <p className="text-slate-700">
                  수식을 자동으로 해석하고, 그래프를 시각적으로 생성하며 주요 특징까지 분석해줍니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mic className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-slate-800">음성 인식 지원</h2>
                <p className="text-slate-700">
                  마이크 버튼을 눌러 말로 수식을 입력할 수 있습니다.
                  음성 인식 결과는 자동으로 수식으로 변환됩니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Camera className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-slate-800">이미지 인식</h2>
                <p className="text-slate-700">
                  책, 필기노트, 교재에 있는 함수식을 사진으로 업로드하면
                  AI가 이미지를 분석해 수식을 인식합니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BarChart3 className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-slate-800">학습 보조 도구</h2>
                <p className="text-slate-700">
                  학생, 교사, 학부모 누구나 쉽게 사용할 수 있도록 UI를 간단하게 구성했습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-slate-800">개인정보 보호</h2>
                <p className="text-slate-700">
                  이 앱은 회원가입이 필요 없으며, 사용자의 입력값은 저장되거나 서버로 전송되지 않습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-slate-800">누구나 무료 이용</h2>
                <p className="text-slate-700">
                  로그인이나 설치 없이, 브라우저에서 누구나 바로 사용할 수 있는 도구입니다.
                </p>
              </div>
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

export default About;
