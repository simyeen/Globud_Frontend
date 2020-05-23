import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <Logo src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/99011797_2978953458847490_134242376817311744_n.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_oc=AQn4gB8baidGRpzTgQ2Am7XyWjC4U8o83jFXNryd7jGDqYID6fQAeFUPHCR9-Lm_rNE&_nc_ht=scontent-ssn1-1.xx&oh=d5f2ad569b7f156bfdbdf5d152fc00c0&oe=5EECB1A3" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  z-index: 10;
`;

const Logo = styled.img`
  width: 5rem;
  height: auto;
`;
