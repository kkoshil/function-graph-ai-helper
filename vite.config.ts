import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages 배포를 위해 base 경로를 저장소 이름으로 설정합니다.
  // 이 경로는 GitHub Actions 워크플로우에서도 사용됩니다.
  base: '/function-graph-ai-helper/',
  plugins: [react()],
})
