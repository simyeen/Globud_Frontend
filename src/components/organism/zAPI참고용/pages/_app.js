import React from 'react';
import App from 'next/app';
import Head from 'next/head';

class VoteApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>리액트 VOTE</title>
        </Head>
        <Component {...pageProps} />
        <style jsx global>{`
          html {
            margin: 0;
            padding: 0;
            position: relative;
          }
          body {
            margin: 0;
            padding: 0;
            font-size: 0.1rem;
            overflow-x: hidden;
            width: 100%;
          }
          ::-webkit-scrollbar {
            display: none;
          }
          input {
            -webkit-appearance: none;
            -webkit-border-radius: 0;
          }
          html,
          body,
          body > div:nth-child(2) {
            height: 100%;
          }
          *,
          ::after,
          ::before {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
          html {
            font-size: 10px;
          }
        `}</style>
      </>
    );
  }
}

export default VoteApp;
