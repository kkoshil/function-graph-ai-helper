// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChartIcon } from './icons';
import {
  Info,
  HelpCircle,
  BookOpenCheck,
  GalleryVerticalEnd,
  Mail,
  Lightbulb // ✅ Math Tips용 아이콘 추가
} from 'lucide-react';

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

          {/* 오른쪽 메뉴 (아이콘) */}
          <nav className="flex items-center space-x-5 text-slate-600">
            <Link to="/about" className="hover:text-indigo-600" title="소개">
              <Info className="w-5 h-5" />
            </Link>
            <Link to="/faq" className="hover:text-indigo-600" title="FAQ">
              <HelpCircle className="w-5 h-5" />
            </Link>
            <Link to="/guide" className="hover:text-indigo-600" title="사용 가이드">
              <BookOpenCheck className="w-5 h-5" />
            </Link>
            <Link to="/examples" className="hover:text-indigo-600" title="예시 결과">
              <GalleryVerticalEnd className="w-5 h-5" />
            </Link>
            {/* ✅ 새 메뉴: 수학 팁 */}
            <Link to="/math-tips" className="hover:text-indigo-600" title="수학 팁">
              <Lightbulb className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="hover:text-indigo-600" title="문의하기">
              <Mail className="w-5 h-5" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
