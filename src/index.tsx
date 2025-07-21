import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './pages/About'; // 👈 소개 페이지 컴포넌트 경로
// import './index.css'; // 👈 Tailwind 등 기본 스타일 유지
import FAQ from './pages/FAQ'; // ⬅️ 반드시 필요합니다
import Guide from './pages/Guide'; // ✅ 여기 추가
import Contact from './pages/Contact';    // contact.tsx는 곧 만들 예정
import Examples from './pages/Examples';  // examples.tsx도 곧 만들 예정

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/guide" element={<Guide />} /> {/* ✅ 여기 추가 */}
	<Route path="/examples" element={<Examples />} />
	<Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
