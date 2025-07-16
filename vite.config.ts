import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 현재 작업 디렉토리의 `mode`에 따라 env 파일을 로드합니다.
  // 세 번째 매개변수를 ''로 설정하여 `VITE_` 접두사가 없는 모든 환경 변수를 로드합니다.
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    // 중요! GitHub에 무료로 올리려면, GitHub 저장소 이름이 반드시 'function-graph-ai-helper'여야 합니다.
    // 이 설정은 우리 웹사이트의 주소를 만들어주기 때문에 아주 중요해요!
    base: '/function-graph-ai-helper/',
    plugins: [react()],
    define: {
      // 가장 중요한 변경사항: 전체 process.env 객체가 아닌, 필요한 API_KEY 변수만 주입합니다.
      // 이를 통해 민감한 정보 유출을 막고 GitHub Actions의 빌드 지연 오류를 해결합니다.
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})
