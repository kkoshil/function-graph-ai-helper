
import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div
      key={Date.now()} // Use key to re-trigger animation on new message
      className="fixed bottom-5 right-5 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-2xl text-sm font-medium z-50 animate-toast-in-out"
    >
      {message}
    </div>
  );
};
