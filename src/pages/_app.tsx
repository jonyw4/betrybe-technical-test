import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'normalize.css';
import '../styles/main.css';
import '../styles/utils.css';
import '../styles/alert.css';
import '../styles/btcRate.css';
import '../styles/button.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Crypto Index</title>
      </Head>
      <main className="container">
        <div className="inner-container">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
