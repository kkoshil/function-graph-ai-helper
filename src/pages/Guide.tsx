// src/pages/Guide.tsx
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Guide: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
          <h1 className="text-3xl font-bold text-indigo-600">사용 가이드</h1>

          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">🔰 이 도구는 언제 유용할까요?</h2>
            <p className="text-slate-700">
              수학 그래프를 직접 그리기 어려울 때, 빠르게 함수의 성질을 파악하고 싶을 때 사용하면 좋습니다.
              특히 자율학습 중인 학생, 교사, 학부모에게 매우 유용합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">🚀 기본 사용 순서</h2>
            <ol className="list-decimal list-inside text-slate-700 space-y-1">
              <li>함수식을 입력합니다 (예: <code className="bg-slate-100 px-1 rounded">x^2 - 3x + 2</code>).</li>
              <li><strong>[AI로 분석하기]</strong> 버튼을 클릭합니다.</li>
              <li>자동으로 생성된 그래프와 해설 결과를 확인합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">📝 입력 방식</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li><strong>텍스트 입력</strong>: 키보드로 수식 입력</li>
              <li><strong>이미지 업로드</strong>: 손글씨/책 사진 올리기</li>
              <li><strong>음성 입력</strong>: 마이크로 말하면 자동 인식</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">📊 분석 결과</h2>
            <p className="text-slate-700">
              입력된 함수에 따라 아래와 같은 정보를 자동으로 분석합니다:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1 pl-4">
              <li>함수의 최고차항 및 차수</li>
              <li>그래프의 축과 대칭성</li>
              <li>극값(최대/최소값)</li>
              <li>증가/감소 구간</li>
              <li>근(해)의 개수 및 위치</li>
              <li>연습 문제 추천</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-800 mb-2">💡 사용 팁</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>곱셈 기호(*)는 생략하지 말아주세요 (예: <code>x * x</code>)</li>
              <li>모바일에서도 완전히 지원됩니다</li>
              <li>브라우저에서 음성 인식 권한을 허용해 주세요</li>
            </ul>
          </section>

          <div className="text-center mt-6">
            <a
              href="/"
              className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition"
            >
              홈으로 돌아가기
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Guide;
