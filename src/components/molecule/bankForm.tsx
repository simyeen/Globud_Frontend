import React, { useState } from "react";
import styled from "styled-components";
export default function BankForm({ bank, onSelet, onClose }) {
  const handleSelet = () => {
    console.log({ bank });
    onSelet(bank);
    onClose(false);
  };

  return (
    <Wrapper>
      <TextBox onClick={handleSelet}>{bank}</TextBox>
    </Wrapper>
  );
}
//map으로 뿌려주려면 double arrow function을 써줘야 하는데 안되네.
const TextBox = styled.div`
  width: 100%;
  height: 5.4rem;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.056rem;
  color: #000000;

  padding: 1.6rem 2.2rem;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
