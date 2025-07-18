import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          adsenseScript: `
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9481442618892258" crossorigin="anonymous"></script>
          `,
        },
      },
    }),
  ],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
});
