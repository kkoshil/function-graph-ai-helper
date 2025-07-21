// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChartIcon } from './icons';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 왼쪽 로고 및 제목 */}
          <Link to="/" className="flex items-center space-x-3">
            <ChartIcon className="h-8 w-8 text-indigo-600" />
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">
              함수 그래프 AI 도우미
            </h1>
          </Link>

          {/* 오른쪽 메뉴 */}
          <nav className="flex space-x-4 text-sm">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="px-2 py-1 text-slate-600 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-500 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

// 메뉴 항목 배열
const navItems = [
  { to: '/about', label: '소개' },
  { to: '/faq', label: 'FAQ' },
  { to: '/guide', label: '사용 가이드' },
  { to: '/examples', label: '예시 결과' },
  { to: '/contact', label: '문의하기' },
];
