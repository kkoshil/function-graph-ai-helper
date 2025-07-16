
import React, { useState, useRef } from 'react';
import { MagicWandIcon, CameraIcon, MicIcon, TextIcon } from './icons';

interface InputCardProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAnalyze: () => void;
  onImageUpload: (file: File) => void;
  onVoiceToggle: () => void;
  isLoading: boolean;
  isProcessingInput: boolean;
  isRecording: boolean;
}

type InputMode = 'text' | 'image' | 'voice';

export const InputCard: React.FC<InputCardProps> = ({ 
  value, onChange, onAnalyze, onImageUpload, onVoiceToggle, 
  isLoading, isProcessingInput, isRecording 
}) => {
  
  const [activeTab, setActiveTab] = useState<InputMode>('text');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoading && !isProcessingInput) {
      onAnalyze();
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
      setActiveTab('text');
    }
  };

  const handleImageIconClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleVoiceIconClick = () => {
      onVoiceToggle();
      setActiveTab('text');
  };

  const isButtonDisabled = isLoading || isProcessingInput;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-slate-800">함수식 입력</h2>
        <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
           <TabButton icon={<TextIcon />} label="텍스트" isActive={activeTab === 'text'} onClick={() => setActiveTab('text')} />
           <TabButton icon={<CameraIcon />} label="이미지" isActive={activeTab === 'image'} onClick={handleImageIconClick} />
           <TabButton icon={<MicIcon />} label="음성" isActive={activeTab === 'voice'} onClick={handleVoiceIconClick} isRecording={isRecording} />
        </div>
      </div>
      
      <p className="text-sm text-slate-500">
        그래프를 그리고 싶은 함수식을 입력하거나, 이미지/음성으로 알려주세요.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-mono">y =</span>
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={isRecording ? "듣고 있어요..." : "예: sin(x) + cos(2*x)"}
            className="w-full pl-12 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-slate-100"
            disabled={isButtonDisabled}
          />
        </div>
        <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
            disabled={isButtonDisabled}
        />
        <button
          type="submit"
          disabled={isButtonDisabled}
          className="w-full flex items-center justify-center px-4 py-2.5 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out disabled:bg-indigo-400 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            '그래프 분석 중...'
          ) : isProcessingInput ? (
            '이미지/음성 처리 중...'
          ) : (
            <>
              <MagicWandIcon className="w-5 h-5 mr-2" />
              <span>AI로 분석하기</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

const TabButton: React.FC<{icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void, isRecording?: boolean}> = ({ icon, label, isActive, onClick, isRecording }) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center transition-colors ${
        isActive || isRecording
          ? 'bg-white text-indigo-600 shadow-sm'
          : 'text-slate-500 hover:bg-slate-200'
      }`}
      aria-label={label}
    >
        <span className={isRecording ? 'animate-pulse' : ''}>{icon}</span>
    </button>
)
