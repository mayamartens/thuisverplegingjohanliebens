import "@/styles/globals.css"; // ← deze moet bovenaan staan

import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/logoB.png" />
      </Head>
      <Component {...pageProps} suppressHydrationWarning />
    </>
  );
}

export default appWithTranslation(App);
