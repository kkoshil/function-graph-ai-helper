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
import Privacy from './pages/Privacy';   // ✅ Privacy 페이지 import
import NotFound from './pages/NotFound';
import MathTips from './pages/MathTips';


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
	<Route path="/privacy" element={<Privacy />} />   {/* ✅ Privacy 라우트 추가 */}
	<Route path="/math-tips" element={<MathTips />} />
	<Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
