import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Home() {
  const router = useRouter();
  const { userName } = router.query;

  return (
    <Wrapper>
      <Header>리액트 투-표</Header>
      <Link href="/login?userName=최수민">
        <NextPage>로그인</NextPage>
      </Link>
      <Link href="/vote">
        <NextPage>투표</NextPage>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 10rem 40rem;
  background-color: Azure;
`;

const Header = styled.h1`
  font-size: 4rem;
`;

const NextPage = styled.button`
  font-size: 3rem;
`;
