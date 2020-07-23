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
      <ApplyButton
        src="/applyButton.png"
        alt="신청 버튼"
        onClick={handleRouter}
      />
    </Wrapper>
  );
}

const ApplyButton = styled.img`
  height: 6rem;
  object-fit: contain;
  margin-top: 1.3rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 9.7rem;
  box-shadow: 0 -0.4rem 0.4rem 0 rgba(126, 130, 137, 0.1);
  background-color: var(--white);

  position: fixed;
  bottom: 0;
`;
