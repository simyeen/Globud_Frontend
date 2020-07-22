import React, { useState } from "react";
import styled from "styled-components";

export default function BankBarOpen({ onMenuOpen, onMenuClose }) {
  const [isToggle, setToggle] = useState(false);

  const handleDrawerToggle = () => {
    console.log("isToggle : ", isToggle);
    console.log("onMenuOpen : ", { onMenuOpen });
    console.log("onMenuClose : ", { onMenuClose });

    if (isToggle === false) {
      setToggle(true);
      onMenuOpen(true);
    } else if (isToggle === true) {
      setToggle(false);
      onMenuOpen(false);
    }
  };

  return (
    <Wrapper>
      {!isToggle && { onMenuClose } && (
        <Arrow
          src="/underArrow.png"
          alt="아래 화살표"
          onClick={handleDrawerToggle}
        />
      )}
      {isToggle && { onMenuClose } && (
        <Arrow
          src="/upperArrow.png"
          alt="위 화살표"
          onClick={handleDrawerToggle}
        />
      )}
    </Wrapper>
  );
}

const Arrow = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
  margin-right: 0.5rem;
`;

const Wrapper = styled.div``;
