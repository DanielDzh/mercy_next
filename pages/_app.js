import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { DEFAULT_LOCALE, intlMessages } from "../intl";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/slick.min.css";
import "../styles/globals.css";
import { LoadingProvider, useLoading } from "../hooks/useLoading";
import Script from "next/script";

function App({ Component, pageProps }) {
  const router = useRouter();
  const { setLoading } = useLoading();

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  });

  return (
    <IntlProvider
      defaultLocale={DEFAULT_LOCALE}
      locale={router.locale}
      messages={intlMessages(router.locale)}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

const AppProviders = (props) => {
  return (
    <LoadingProvider>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7TDHC266HL"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7TDHC266HL');
        `}
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/ns.html?id='GTM-P4FTBHR'"
      ></Script>
      <App {...props} />
    </LoadingProvider>
  );
};

export default AppProviders;
