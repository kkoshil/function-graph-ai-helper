// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 text-center">
        <div className="bg-white p-8 rounded shadow-md max-w-md">
          <h1 className="text-5xl font-extrabold text-indigo-600 mb-4">404</h1>
          <p className="text-lg text-slate-700 mb-6">죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
