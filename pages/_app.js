import React from "react";
import App from "next/app";
import Head from "next/head";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
@media (max-width: 262px) {
  html {
    font-size: 7px;
  }
}
@media (min-width: 263px) and (max-width: 300px) {
  html {
    font-size: 8px;
  }
}
@media (min-width: 301px) and (max-width: 337px) {
  html {
    font-size: 9px;
  }
}
@media (min-width: 338px) and (max-width: 375px) {
  html {
    font-size: 10px;
  }
}
@media (min-width: 376px) and (max-width: 412px) {
  html {
    font-size: 11px;
  }
}
@media (min-width: 413px) and (max-width: 450px) {
  html {
    font-size: 12px;
  }
}
@media (min-width: 451px){
  html {
    font-size: 13px;
  }
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.1rem;
  background-color:#ccc;
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
          body > div:first-child{
            height: 100%;
          }
`;

export default class Timeline extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Head>
          <title>react-typescript-11th</title>
        </Head>
        <BestWrapper>
          <Grey />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
          <Grey />
        </BestWrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 37.5rem;
  min-height: 100%;
  background-color: white;
  position: relatvie;
`;

const Grey = styled.div`
  flex: 1;
  background-color: #ccc;
  z-index: 100;
`;

const BestWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
`;
