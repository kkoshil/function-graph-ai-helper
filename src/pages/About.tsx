// src/pages/About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4 text-indigo-600">함수 그래프 AI 도우미 소개</h1>

          <p className="mb-4 text-slate-700 leading-relaxed">
            본 웹사이트는 인공지능(AI)을 활용하여 수학 함수식을 자동으로 분석하고, 그래프를 시각적으로 생성해주는 무료 도구입니다.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            사용자는 키보드 입력, 이미지 업로드, 또는 음성 인식을 통해 함수식을 입력할 수 있으며, AI가 자동으로 해당 함수의 특징을 분석하고 그래프를 그려줍니다.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            이 사이트는 수학을 공부하는 중·고등학생, 대학생, 교사 및 학부모 등 다양한 사용자가 쉽게 사용할 수 있도록 설계되었습니다.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            사용자는 별도의 회원가입 없이도 자유롭게 이용 가능하며, 입력된 정보는 저장되지 않습니다.
          </p>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition"
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
