// src/pages/MathTips.tsx
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
//import { LineChart, FunctionSquare, Waves, Divide, TrendingUp, LogIn, SquareRoot, BookOpen } from 'lucide-react';
import { LineChart, FunctionSquare, Waves, Divide, TrendingUp, LogIn, Radical, BookOpen } from 'lucide-react';

const MathTips: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-8">
          <h1 className="text-3xl font-bold text-indigo-600 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            주요 함수 개념 요약 (Math Tips)
          </h1>
          <p className="text-slate-700 leading-relaxed">
            이 페이지에서는 각 함수의 <strong>기본 정의와 핵심 개념</strong>을 간단하게 정리했습니다.  
            학습 중 빠르게 개념을 확인하거나 복습할 때 유용하게 활용할 수 있습니다.
          </p>

          {/* 섹션1: 1차 함수 */}
          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <LineChart className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg">1. 1차 함수</h2>
            </div>
            <p className="text-slate-700">
              1차 함수는 <code>y = ax + b</code> 형태의 직선 그래프를 가지며, 기울기 <strong>a</strong>와 y절편 <strong>b</strong>로 정의됩니다.
              a&gt;0이면 증가, a&lt;0이면 감소하는 직선입니다.
            </p>
          </section>

          {/* 섹션2: 2차 함수 */}
          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <FunctionSquare className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg">2. 2차 함수</h2>
            </div>
            <p className="text-slate-700">
              2차 함수는 <code>y = ax^2 + bx + c</code> 형태이며, 그래프는 포물선입니다.  
              <strong>a&gt;0</strong>이면 위로 볼록, <strong>a&lt;0</strong>이면 아래로 볼록입니다.  
              대칭축은 <code>x = -b/(2a)</code>, 꼭짓점은 이를 대입하여 계산합니다.
            </p>
          </section>

          {/* 섹션3: 삼각 함수 */}
          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <Waves className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg">3. 삼각 함수</h2>
            </div>
            <p className="text-slate-700">
              삼각 함수 <code>sin(x)</code>, <code>cos(x)</code>, <code>tan(x)</code>는 각도와 길이 관계를 나타냅니다.  
              sin, cos은 주기 2π, tan은 주기 π를 가지며, sin·cos 범위는 [-1,1], tan은 정의되지 않는 점이 있습니다.
            </p>
          </section>

          {/* 섹션4: 분수 함수 */}
          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <Divide className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg">4. 분수 함수</h2>
            </div>
            <p className="text-slate-700">
              분수 함수는 <code>y = 1/x</code> 또는 <code>y = k/(x - a)</code> 같은 형태로,  
              그래프는 쌍곡선이며 <strong>x = a</strong>에서 정의되지 않습니다(점근선 존재).  
              점근선과 그래프의 대칭성을 파악하는 것이 중요합니다.
            </p>
          </section>

          {/* 섹션5: 지수 함수 */}
          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <TrendingUp className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg">5. 지수 함수</h2>
            </div>
            <p className="text-slate-700">
              지수 함수는 <code>y = a^x</code> 형태이며, a&gt;1이면 x가 증가할수록 y도 급격히 증가합니다.  
              y=0은 점근선이며, 빠른 성장(감쇠) 모델에서 자주 등장합니다.
            </p>
          </section>

          {/* 섹션6: 로그 함수 */}
          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <LogIn className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg">6. 로그 함수</h2>
            </div>
            <p className="text-slate-700">
              로그 함수는 <code>y = log_a(x)</code> 형태이며, 지수 함수의 역함수입니다.  
              정의역은 x&gt;0이고, a&gt;1일 때 완만하게 증가합니다.  
              y축이 점근선이며, 데이터 스케일링에 활용됩니다.
            </p>
          </section>

{/* 섹션7: 무리 함수 */}
<section className="bg-slate-50 p-4 rounded-md space-y-2">
  <div className="flex items-center gap-2 font-semibold text-slate-800">
    <Radical className="w-5 h-5 text-indigo-500" /> {/* ✅ 변경됨 */}
    <h2 className="text-lg">7. 무리 함수</h2>
  </div>
  <p className="text-slate-700">
    무리 함수는 <code>y = √x</code>, <code>y = √(x^2 + 1)</code> 형태로, 정의역에 따라 그래프가 제한되며 완만하게 증가합니다.
    제곱근이 포함된 함수는 항상 정의역을 먼저 확인해야 합니다.
  </p>
</section>

          {/* 내부 링크 */}
          <div className="bg-indigo-50 border rounded-lg p-4">
            <p className="text-slate-700 text-sm">
              👉 더 많은 함수 그래프는 <Link to="/examples" className="text-indigo-500 underline">예시 페이지</Link>에서,  
              사용 방법은 <Link to="/guide" className="text-indigo-500 underline">가이드</Link>에서 확인하세요.
            </p>
          </div>

          <div className="text-center mt-6">
            <Link to="/" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MathTips;
