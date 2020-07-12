import React, { useState } from "react";
import styled from "styled-components";

export default function QnaClose({ header, onOpen }) {
  const [isOpenIn, setOpenIn] = useState(false);

  const handleOpen = () => {
    console.log(onOpen);
    console.log(isOpenIn);
    if (isOpenIn === false) {
      onOpen(true);
      setOpenIn(true);
    } else if (isOpenIn === true) {
      onOpen(false);
      setOpenIn(false);
    }
  };

  return (
    <Wrapper>
      <SubWrapper>
        <Header>{header}</Header>
        {!isOpenIn && (
          <Arrow src="/underArrow.png" alt="아래 화살표" onClick={handleOpen} />
        )}
        {isOpenIn && (
          <Arrow src="/upperArrow.png" alt="위 화살표" onClick={handleOpen} />
        )}
      </SubWrapper>
    </Wrapper>
  );
}

//
//
const Arrow = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
  margin-right: 1.2rem;
`;

const Header = styled.p`
  width: 30.3rem;
  font-size: 1.3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: -0.02rem;
  color: #222426;
`;

const SubWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 6.1rem;

  margin-left: 2.9rem;
  padding-top: 2rem;
  padding-bottom: 2.2rem;
  padding-left: 0.02rem;
`;
