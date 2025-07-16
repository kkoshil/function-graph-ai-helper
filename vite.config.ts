
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 중요! GitHub에 무료로 올리려면, GitHub 저장소 이름이 반드시 'function-graph-ai-helper'여야 합니다.
  // 이 설정은 우리 웹사이트의 주소를 만들어주기 때문에 아주 중요해요!
  base: '/function-graph-ai-helper/',
  plugins: [react()],
  define: {
    'process.env': process.env
  }
})
