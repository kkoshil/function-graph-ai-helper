import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
  Book,
  ListTodo,
  UploadCloud,
  Mic,
  BarChart2,
  Lightbulb,
  LinkIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Guide: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-grow px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-8">
          <h1 className="text-3xl font-bold text-indigo-600">📘 사용 가이드</h1>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            이 가이드는 <strong>함수 그래프 AI 도우미</strong>를 처음 사용하는 분들을 위해 작성되었습니다.  
            이 도구는 수학 함수 학습을 보다 쉽게 만들어 주며, AI가 그래프를 자동으로 분석하여 학습자의 이해를 돕습니다.  
            <Link to="/faq" className="text-indigo-500 underline">FAQ</Link>에서 자주 묻는 질문도 확인해 보세요.
          </p>

          {/* 1. 언제 유용한가 */}
          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <Book className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg">이 도구는 언제 유용할까요?</h2>
            </div>
            <p className="text-slate-700">
              수학 그래프를 손으로 그리기 어렵거나, 빠르게 함수의 성질을 파악하고 싶을 때 특히 유용합니다.  
              <strong>중학생부터 대학생, 교사, 학부모</strong> 모두가 사용할 수 있으며,  
              수업 보조, 자습, 과제 해결, 개념 복습 등 다양한 상황에서 학습 효율을 극대화할 수 있습니다.
            </p>
          </section>

          {/* 2. 기본 사용 순서 */}
          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <ListTodo className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg">기본 사용 순서</h2>
            </div>
            <ol className="list-decimal list-inside text-slate-700 space-y-1 pl-4">
              <li>함수식을 입력합니다 (예: <code className="bg-slate-200 px-1 rounded">x^2 - 3x + 2</code>).</li>
              <li><strong>[AI로 분석하기]</strong> 버튼을 클릭하면 AI가 자동으로 연산 및 분석을 시작합니다.</li>
              <li>결과 화면에서 그래프, 주요 성질, 해설을 확인하세요.</li>
            </ol>
            <p className="text-slate-600 text-sm mt-2">
              더 많은 예시는 <Link to="/examples" className="text-indigo-500 underline">예시 페이지</Link>에서 확인할 수 있습니다.
            </p>
          </section>

          {/* 3. 입력 방식 */}
          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <UploadCloud className="w-5 h-5 text-indigo-500" />
              <Mic className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg">입력 방식</h2>
            </div>
            <ul className="list-disc list-inside text-slate-700 space-y-1 pl-4">
              <li><strong>텍스트 입력</strong>: 키보드로 함수식을 직접 입력합니다.</li>
              <li><strong>이미지 업로드</strong>: 손글씨나 교재 사진을 업로드하면 AI가 식을 자동 인식합니다.</li>
              <li><strong>음성 입력</strong>: 마이크로 함수식을 말하면 음성을 텍스트로 변환하여 분석합니다.</li>
            </ul>
          </section>

          {/* 4. 분석 결과 */}
          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <BarChart2 className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg">분석 결과</h2>
            </div>
            <p className="text-slate-700">
              입력한 함수에 대해 다음과 같은 정보를 제공합니다:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1 pl-4">
              <li>함수의 최고차항 및 차수 분석</li>
              <li>그래프의 대칭성 및 축</li>
              <li>극값(최대/최소값)과 증가/감소 구간</li>
              <li>근(해)의 개수 및 위치</li>
              <li>AI가 제안하는 연습문제 및 개념 연결 팁</li>
            </ul>
          </section>

          {/* 5. 사용 팁 */}
          <section className="bg-slate-50 p-4 rounded-md space-y-2">
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <Lightbulb className="w-5 h-5 text-indigo-500" />
              <h2 className="text-lg">사용 팁</h2>
            </div>
            <ul className="list-disc list-inside text-slate-700 space-y-1 pl-4">
              <li>곱셈 기호(*)는 반드시 입력하세요 (예: <code>x * x</code>).</li>
              <li>모바일 환경에서도 최적화되어 있어 편리하게 사용할 수 있습니다.</li>
              <li>음성 입력 시 브라우저의 마이크 권한을 허용해야 정상 동작합니다.</li>
              <li>더 궁금한 점은 <Link to="/faq" className="text-indigo-500 underline">FAQ</Link> 또는 <Link to="/contact" className="text-indigo-500 underline">문의 페이지</Link>를 확인하세요.</li>
            </ul>
          </section>

          {/* 내부 링크 유도 */}
          <div className="bg-indigo-50 border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <LinkIcon className="w-5 h-5 text-indigo-500" />
              <p className="font-semibold text-slate-700">관련 페이지 바로가기</p>
            </div>
            <ul className="list-disc list-inside text-slate-600 pl-4">
              <li><Link to="/examples" className="text-indigo-500 underline">함수 예시 보기</Link></li>
              <li><Link to="/faq" className="text-indigo-500 underline">자주 묻는 질문(FAQ)</Link></li>
              <li><Link to="/contact" className="text-indigo-500 underline">문의 및 피드백</Link></li>
            </ul>
          </div>

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
