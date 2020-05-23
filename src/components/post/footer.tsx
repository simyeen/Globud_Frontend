import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeartIcon from "../../asset/icons/heart";

export default function PostFooter({ likeCount }) {
  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  const [likeNum, fillIn, fillOut] =
    isLiked === true
      ? [likeCount + 1, "red", "red"]
      : [likeCount, "white", "black"];

  return (
    <Wrapper>
      <LikeButton onClick={handleClick}>
        <HeartIcon
          style={{ width: "2rem", height: "2rem" }}
          {...{ fillIn, fillOut }}
        />
      </LikeButton>
      <LikeCount>{likeNum}</LikeCount>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
`;

const LikeButton = styled.button`
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  margin-right: 0.4rem;
  background-color: Transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const LikeCount = styled.p`
  margin: 0rem;
  font-size: 1.2rem;
  width: 3rem;
`;
