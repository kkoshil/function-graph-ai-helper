// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t mt-12 py-6 text-center text-sm text-slate-500">
      {/* 메뉴 링크 */}
      <nav className="container mx-auto px-4 flex flex-wrap justify-center gap-3 mb-2">
        <FooterLink to="/about" label="소개" />
        <FooterLink to="/faq" label="FAQ" />
        <FooterLink to="/guide" label="사용 가이드" />
        <FooterLink to="/examples" label="예시 결과" />
        <FooterLink to="/contact" label="문의하기" />
        <FooterLink to="/privacy" label="개인정보 처리방침" /> {/* ✅ 추가됨 */}
      </nav>

      {/* 저작권 문구 */}
      <div className="text-xs text-slate-400">
        ⓒ {new Date().getFullYear()} 함수 그래프 AI 도우미. All rights reserved.
      </div>
    </footer>
  );
};

// 하단 링크에 공통 스타일 적용
const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="px-2 py-1 text-slate-500 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-200"
  >
    {label}
  </Link>
);
