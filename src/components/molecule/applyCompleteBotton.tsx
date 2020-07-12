import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Apply() {
  return (
    <Wrapper>
      <Link href="/applyCompletePage">
        <ApplyCompleteButton
          src="/applyComplete.png"
          alt="신청 완료 버튼"
        ></ApplyCompleteButton>
      </Link>
    </Wrapper>
  );
}

/* 모든 항목을 체크했을 시에만 넘어가게 alert 해주기*/

const ApplyCompleteButton = styled.img`
  width: 31.4rem;
  height: 6rem;
  object-fit: contain;
  margin-top: 1.3rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 36rem;
  height: 9.7rem;
`;
