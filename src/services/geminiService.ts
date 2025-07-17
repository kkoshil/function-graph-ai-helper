import { GoogleGenAI, Type } from "@google/genai";
import type { FunctionAnalysis } from '../types';

// Vite's standard way to access environment variables
const apiKey = import.meta.env.VITE_API_KEY;

if (!apiKey) {
    throw new Error("VITE_API_KEY environment variable not set. Please set it in your Vercel deployment settings.");
}

const ai = new GoogleGenAI({ apiKey });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    function: { type: Type.STRING, description: "입력받은 함수식을 그대로 반환합니다."},
    suggestedPlotRange: {
        type: Type.OBJECT,
        properties: {
            min: { type: Type.NUMBER },
            max: { type: Type.NUMBER },
        },
        required: ["min", "max"],
    },
    analysis: {
      type: Type.OBJECT,
      properties: {
        summary: { type: Type.STRING, description: "함수에 대한 1~2문장의 간단한 요약 (예: 아래로 볼록한 포물선)" },
        roots: { type: Type.STRING, description: "함수의 근 (x절편). 없으면 '없음'." },
        yIntercept: { type: Type.STRING, description: "y절편. 없으면 '없음'." },
        extrema: { type: Type.STRING, description: "극값 (최대/최소값). 없으면 '없음'." },
        domain: { type: Type.STRING, description: "정의역. 점근선이 있다면 반드시 여기에 언급." },
        range: { type: Type.STRING, description: "치역" },
        symmetry: { type: Type.STRING, description: "대칭성 (y축, 원점, 없음)" },
      },
      required: ["summary", "roots", "yIntercept", "extrema", "domain", "range", "symmetry"],
    },
    practiceProblem: {
      type: Type.OBJECT,
      properties: {
        question: { type: Type.STRING, description: "관련 개념을 활용한 간단한 연습문제" },
        answer: { type: Type.STRING, description: "연습문제의 정답" },
      },
      required: ["question", "answer"],
    },
  },
  required: ["function", "suggestedPlotRange", "analysis", "practiceProblem"],
};

export const analyzeFunction = async (expression: string): Promise<FunctionAnalysis> => {
  const prompt = `
    너는 '함수 그래프 AI 도우미' Agent야. 내가 제공하는 **문법적으로 완벽히 검증된** 함수식을 보고, 그 수학적 특징을 분석해야 해. 모든 설명은 중학생도 이해할 수 있도록 쉽고 친절하게 작성해줘.

    입력된 함수: "${expression}"

    네가 할 일 (순서대로):
    1.  **그래프 범위 추천:** 함수 그래프의 주요 특징(극값, 점근선, 절편 등)이 잘 드러나도록 적절한 x값의 범위(min, max)를 결정해서 'suggestedPlotRange' 객체에 넣어줘.
    2.  **함수 특징 분석:** 함수의 주요 특징을 분석해서 'analysis' 객체를 채워줘.
        -   **중요:** 분수 함수의 점근선은 함수의 고유한 특징이므로, 요약이나 정의역 설명에 반드시 포함해줘.
    3.  **연습문제 생성:** 분석한 함수와 관련된 간단한 연습문제를 1개 만들어서 'practiceProblem' 객체를 채워줘.

    출력 제약 조건:
    -   반드시 제공된 JSON 스키마에 맞춰 응답해야 해.
    -   'function' 필드에는 입력된 함수식("${expression}")을 그대로 다시 넣어줘.
    -   절대 다른 설명 없이 JSON 객체만 반환해.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.1,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("AI 응답에서 빈 텍스트를 받았습니다. 잠시 후 다시 시도해 주세요.");
    }
    const jsonText = text.trim();
    return JSON.parse(jsonText);

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("AI 분석 중 문제가 발생했습니다.");
  }
};


export const extractTextFromImage = async (file: File): Promise<string> => {
    const toBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = error => reject(error);
    });

    const base64Image = await toBase64(file);

    const imagePart = {
        inlineData: {
            mimeType: file.type,
            data: base64Image,
        },
    };

    const textPart = {
        text: "이 이미지에서 수학 함수식을 추출해줘. 다른 설명 없이 오직 함수식만 텍스트로 반환해줘. 예: x^2 + 5*x - 3"
    };

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, textPart] },
        });
        
        const text = response.text;
        if (!text) {
            return ""; // 텍스트가 없으면 빈 문자열 반환
        }
        // AI가 반환한 텍스트에서 'y=' 부분을 제거
        return text.trim().replace(/^y\s*=\s*/i, '').trim();
    } catch (error) {
        console.error("Error calling Gemini API for OCR:", error);
        throw new Error("이미지에서 수식을 추출하는데 실패했습니다.");
    }
};