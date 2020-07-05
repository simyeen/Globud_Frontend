import styled from "styled-components";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { userName } = router.query;

  return (
    <Wrapper>
      <Header onClick={() => router.back()}>리액트 투-표</Header>
      <Name>{userName}</Name>님 안녕하세요!
    </Wrapper>
  );
}
const Name = styled.span`
  color: blue;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 10rem 40rem;
  background-color: Azure;
`;

const Header = styled.h1`
  font-size: 4rem;
`;
