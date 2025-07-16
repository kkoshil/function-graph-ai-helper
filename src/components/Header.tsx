
import React from 'react';
import { ChartIcon } from './icons';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16">
          <div className="flex items-center space-x-3">
            <div className="text-indigo-600">
              <ChartIcon className="h-8 w-8" />
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">
              함수 그래프 AI 도우미
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};
