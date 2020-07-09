import React, { useState } from "react";
import styled from "styled-components";

export default function AvailableCrewList() {
  const [isChecked, setChecked] = useState(false);

  return (
    <Wrapper>
      <SubWrapper>
        <Header>잠깐! 신청하기 전에...</Header>
        <Image />
        <Header>확인하셨다면, 정보를 입력해주세요.</Header>

        <Text>이름 (예금주명)</Text>
        <Content name="content" placeholder="ex) 전소영"></Content>

        <Text>입금하신 계좌번호</Text>
        <Content name="account" placeholder="ex) 1002 348 536694"></Content>

        <Text>국적</Text>
        <Content name="country" placeholder="ex) 대한민국"></Content>

        <Text>이메일</Text>
        <Content name="email" placeholder="ex) nattasoy@gmail.com"></Content>

        <CheckBoxWrapper>
          {isChecked && <CheckBox src="/checked.png" alt="체크박스" />}
          <CheckBox src="/checked.png" alt="체크박스" />
          <Text style={{ marginTop: "0rem" }}>
            신청하신 크루는 4회 이용을 기본으로 합니다. 인지하고 계신다면
            체크해주세요.
          </Text>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          {isChecked && <CheckBox src="/checked.png" alt="체크박스" />}
          <CheckBox src="/checked.png" alt="체크박스" />
          <Text style={{ marginTop: "0rem" }}>
            상기 계좌로 입금을 완료하셨으면, 체크해주세요.
          </Text>
        </CheckBoxWrapper>
      </SubWrapper>
    </Wrapper>
  );
}

const CheckBox = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.3rem;
  border: solid 0.1rem #e1e4e7;

  margin-right: 1rem;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 28.1rem;
  height: 4.3rem;
  margin-top: 3.7rem;
  margin-left: 1rem;
`;

const Content = styled.input`
  width: 31.4rem;
  height: 4.5rem;
  border-radius: 0.8rem;
  border: solid 0.1rem #3f66f1;
`;

const Text = styled.h4`
  width: 31.3rem;
  height: 2.2rem;
  font-size: 1.3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #222426;

  margin-top: 1.6rem;
`;

const Image = styled.div`
  width: 31.6rem;
  height: 9.8rem;
  border-radius: 0.8rem;
  margin-top: 0.9rem;
`;

const Header = styled.p`
  width: 31.6rem;
  height: 2.8rem;
  font-size: 1.6rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.4.8rem;
  color: #222426;
  margin-top: 3.5rem;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2.2rem;
  padding-right: 2.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
