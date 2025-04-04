import React, { useEffect } from "react";
import Head from "next/head";
import AppData from "@data/app.json";
import { IntlProvider, useIntl } from "react-intl";
import "../styles/scss/style.scss";
import "../styles/globals.css";
import { register } from "swiper/element/bundle";
import { useRouter } from "next/router";
import Script from "next/script";

// register Swiper custom elements
register();

// Create a separate component for the app content
function AppContent({ Component, pageProps }) {
  const intl = useIntl();
  return (
    <>
      <Head>
        {/* seo begin */}
        <title>{AppData.settings.siteName} - {intl.formatMessage({ id: "page.seo.title" })}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={intl.formatMessage({ id: "page.seo.description" })} />

        <meta name="keywords" content={intl.formatMessage({ id: "page.seo.keywords" })} />
        <meta name="author" content={AppData.settings.siteName} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="alexa" content="index, follow" />
        <meta name="yandex" content="index, follow" />
        <meta name="sogou" content="index, follow" />
        <meta name="baidu" content="index, follow" />
        <meta name="sitemap" content="/sitemap.xml" />
        <meta name="google-site-verification" content="google-site-verification=google-site-verification" />
        <meta property="og:description" content={intl.formatMessage({ id: "page.seo.description" })} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={AppData.settings.siteName} />
        <meta property="og:url" content="https://www.calico.com" />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:site_name" content={AppData.settings.siteName} />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

function MyApp({ Component, pageProps }) {
  const { locale, messages } = pageProps;


  function usePageView() {
    const router = useRouter();

    useEffect(() => {
      const handleRouteChange = (url) => {
        if (window.gtag) {
          window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
            page_path: url,
          });
        }
      };

      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }, [router]);
  }

  if (process.env.NODE_ENV === "production") {
    usePageView();
  }

  return (
    <IntlProvider locale={locale || "en"} messages={messages}>
      {/* Google Analytics */}
      {process.env.NODE_ENV === "production" && <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
        </Script>
      </>}
      <AppContent Component={Component} pageProps={pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
