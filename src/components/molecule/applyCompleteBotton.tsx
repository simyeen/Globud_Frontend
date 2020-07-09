import React from "react";
import styled from "styled-components";

export default function Apply() {
  return (
    <Wrapper>
      <ApplyCompleteButton
        src="/applyComplete.png"
        alt="신청 버튼"
      ></ApplyCompleteButton>
    </Wrapper>
  );
}

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
