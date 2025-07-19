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
          <nav className="space-x-6">
            <Link
              to="/about"
              className="text-sm text-slate-600 hover:text-indigo-600 hover:underline"
            >
              소개
            </Link>

<Link to="/faq" className="text-slate-500 hover:text-indigo-600 hover:underline">FAQ</Link>


          </nav>
        </div>
      </div>
    </header>
  );
};
