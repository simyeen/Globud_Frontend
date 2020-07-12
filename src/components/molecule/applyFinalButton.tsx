import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Apply() {
  return (
    <Wrapper>
      <Link href="/index">
        <ApplyFinalButton
          src="/applyFinalButton.png"
          alt="신청 마지막 버튼"
        ></ApplyFinalButton>
      </Link>
    </Wrapper>
  );
}

const ApplyFinalButton = styled.img`
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
