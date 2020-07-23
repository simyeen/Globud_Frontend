import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { withRouter } from "next/router";

export default function ToApplyPage({ crew }) {
  const router = useRouter();

  const handleRouter = () => {
    router.push({
      pathname: "/applyPage",
      query: { crewNumber: crew },
    });
  };

  return (
    <Wrapper>
      <ApplyButton onClick={handleRouter}>
        <Text>크루 예약하기</Text>
      </ApplyButton>
    </Wrapper>
  );
}

const Text = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: -0.026rem;
  margin-top: 1.75rem;
  color: #ffffff;
`;

const ApplyButton = styled.div`
  display: flex;
  justify-content: center;
  width: 31.4rem;
  height: 6rem;
  border-radius: 8px;
  background-color: #3c7dfa;

  margin-top: 1.3rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 9.7rem;
  box-shadow: 0 -0.4rem 0.4rem 0 rgba(126, 130, 137, 0.1);
  background-color: var(--white);

  position: fixed;
  bottom: 0;
`;
