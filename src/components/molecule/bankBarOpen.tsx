import React, { useState } from "react";
import styled from "styled-components";

export default function BankBarOpen({ onMenuOpen }) {
  const [isToggle, setToggle] = useState(false);

  const handleDrawerToggle = () => {
    console.log("isToggle : ", isToggle);
    console.log("onMenuOpen : ", { onMenuOpen });

    onMenuOpen(true);
  };

  return (
    <Wrapper>
      <Arrow
        src="/underArrow.png"
        alt="아래 화살표"
        onClick={handleDrawerToggle}
      />
    </Wrapper>
  );
}
/*      {isToggle && { onMenuClose } && (
        <Arrow
          src="/upperArrow.png"
          alt="위 화살표"
          onClick={handleDrawerToggle}
        />
      )}
*/
const Arrow = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
  margin-right: 0.5rem;
`;

const Wrapper = styled.div``;
