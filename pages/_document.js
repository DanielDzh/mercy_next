import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default function Document() {

const val = "GTM-P4FTBHR";

  return (
    <Html>
      <Head>
      <script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                  (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-P4FTBHR');
                  `,
        }}
      />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    
    </Html>
  )
}