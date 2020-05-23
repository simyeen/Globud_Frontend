import React from "react";
import styled from "styled-components";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function Post({
  createdAt,
  creator,
  profileImageUrl,
  content,
  likeCount,
}) {
  return (
    <Wrapper>
      <Header {...{ createdAt, creator, profileImageUrl }} />
      <Content {...content} />
      <Footer {...{ likeCount }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
