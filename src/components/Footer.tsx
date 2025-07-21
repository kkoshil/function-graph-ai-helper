// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t mt-12 py-6 text-center text-sm text-slate-500">
      {/* 메뉴 링크 */}
      <nav className="container mx-auto px-4 space-x-2 mb-2">
        <Link to="/about"    className="hover:text-indigo-600 hover:underline">소개</Link>
        <span>|</span>
        <Link to="/faq"      className="hover:text-indigo-600 hover:underline">FAQ</Link>
        <span>|</span>
        <Link to="/guide"    className="hover:text-indigo-600 hover:underline">사용 가이드</Link>
        <span>|</span>
        <Link to="/examples" className="hover:text-indigo-600 hover:underline">예시 결과</Link>
        <span>|</span>
        <Link to="/contact"  className="hover:text-indigo-600 hover:underline">문의하기</Link>
      </nav>

      {/* 저작권 문구 */}
      <div className="text-xs text-slate-400">
        ⓒ {new Date().getFullYear()} 함수 그래프 AI 도우미. All rights reserved.
      </div>
    </footer>
  );
};
