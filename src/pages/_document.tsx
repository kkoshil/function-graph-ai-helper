// src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* ✅ 네이버 서치 어드바이저 소유 확인 태그 */}
          <meta name="naver-site-verification" content="af7099d1777a4c99acf142735cd28a6e86dddd14" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
