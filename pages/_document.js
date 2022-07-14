import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';

export default function Document() {

const val = "GTM-P4FTBHR";

  return (
    <Html>
      <Head>
      <script
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
        <meta name="facebook-domain-verification" content="qvue06yaa91etgs5g54h9kljb5pb7w" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}