import React from "react";
import Head from "next/head";
import AppData from "@data/app.json";

import { IntlProvider } from "react-intl";

import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  const { locale, messages } = pageProps;

  return (
    <IntlProvider locale={locale || "en"} messages={messages}>
      <Head>
        {/* seo begin */}
        <title>{AppData.settings.siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
