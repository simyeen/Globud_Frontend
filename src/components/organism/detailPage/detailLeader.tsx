import React from "react";
import styled from "styled-components";

export default function DetailLeader() {
  return (
    <Wrapper>
      <SubWrapper>
        <Header>이 크루의 리더는?</Header>
        <Space />
        <LeaderWrpper>
          <ImageWrapper>얼굴사진</ImageWrapper>
          <TextWrappr>
            <NameWrapper>
              <Leader>리더</Leader>
              <Name>박선영</Name>
              <Logo />
            </NameWrapper>
            <Introduce>
              신촌 소재 대학 국제학부에 재학중인 25살 투머치 토커 한국인입니다!
              저도 영어 잘 못하지만 괜찮아요! 친해져요 😉 이런저런 이야기 하면서
              다같이 즐거운 시간 보내요.
            </Introduce>
          </TextWrappr>
        </LeaderWrpper>
      </SubWrapper>

      <CrossBar src="/crossbar.png" alt="크로스 바 "></CrossBar>
    </Wrapper>
  );
}

const CrossBar = styled.img`
  width: 100%;
  height: 0.6rem;
  object-fit: contain;
  margin-top: 1.06rem;
`;

const Introduce = styled.div`
  width: 25.1rem;
  height: 8.62rem;
  font-family: NotoSansCJKKR;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.52px;
  color: #555961;
`;

const Logo = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const Name = styled.p`
  width: 4.7rem;
  height: 2.3rem;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.48px;
  color: var(--black-500);
  margin-right: 0.4rem;
`;

const Leader = styled.p`
  width: 3.2rem;
  height: 2.3rem;
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.48px;
  color: #222426;
  margin-right: 1rem;
`;

const NameWrapper = styled.div`
  display: flex;
`;

const TextWrappr = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  border: solid 1px #222426;
  background-color: var(--white);
  margin-right: 1.5rem;
`;

const LeaderWrpper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Space = styled.div`
  width: 100%;
  height: 3rem;
`;

const Header = styled.h4`
  width: 31.5rem;
  height: 2.9rem;
  font-family: NotoSansCJKKR;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.06rem;
  margin-top: 0.7rem;
  margin-bottom: 0;
  color: var(--black-500);
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: space-between;  
  padding 2.2rem 2.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
