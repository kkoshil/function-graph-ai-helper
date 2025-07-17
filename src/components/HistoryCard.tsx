
import React from 'react';
import type { HistoryEntry } from '../types';
import { BookmarkIcon, TrashIcon } from './icons';

interface HistoryCardProps {
  history: HistoryEntry[];
  onLoad: (expression: string) => void;
  onDelete: (id: string) => void;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({ history, onLoad, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 animate-fade-in">
      <div className="flex items-center space-x-3">
        <BookmarkIcon className="h-6 w-6 text-indigo-600" />
        <h2 className="text-lg font-bold text-slate-800">다시 보기</h2>
      </div>
      <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
        {history.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-4">아직 저장된 함수가 없습니다.</p>
        ) : (
          history.map(item => (
            <div key={item.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <button 
                onClick={() => onLoad(item.expression)}
                className="flex-grow text-left cursor-pointer group"
              >
                <p className="font-mono text-sm text-indigo-700 group-hover:underline">y = {item.expression}</p>
                <p className="text-xs text-slate-400">{item.date}</p>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(item.id);
                }}
                className="p-1.5 rounded-full text-slate-400 hover:bg-red-100 hover:text-red-600 transition-colors"
                aria-label="삭제"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
