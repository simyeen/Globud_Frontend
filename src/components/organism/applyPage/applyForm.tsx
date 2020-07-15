import React, { useState } from "react";
import styled from "styled-components";

export default function AvailableCrewList() {
  const [isFirstChecked, setFirstChecked] = useState(false);
  const [isSecondChecked, setSecondChecked] = useState(false);

  const handleFirstCheckBox = () => {
    if (isFirstChecked === false) {
      setFirstChecked(true);
    } else if (isFirstChecked === true) {
      setFirstChecked(false);
    }
  };

  const handleSecondCheckBox = () => {
    if (isSecondChecked === false) {
      setSecondChecked(true);
    } else if (isSecondChecked === true) {
      setSecondChecked(false);
    }
  };

  return (
    <Wrapper>
      <SubWrapper>
        <Header>잠깐! 신청하기 전에...</Header>
        <Box>
          <Text
            style={{
              width: "24.9rem",
              height: "6.5rem",
              marginTop: "1rem",
              color: "#555961",
            }}
          >
            <Blue>532002 01 372409 국민은행 이진호</Blue>로,
            <Text
              style={{
                width: "24.9rem",
                height: "1rem",
                marginTop: "0rem",
                color: "#555961",
              }}
            >
              상기 안내된 금액을 입금하신 후 진행해주세요.
            </Text>
          </Text>
        </Box>
        <Header>확인하셨다면, 정보를 입력해주세요.</Header>

        <Text>이름 (예금주명)</Text>
        <Content name="content" placeholder="    전소영"></Content>

        <Text>입금하신 계좌번호</Text>
        <Content name="account" placeholder="    1002 348 536694"></Content>

        <Text>국적</Text>
        <Content name="country" placeholder="    대한민국"></Content>

        <Text>이메일</Text>
        <Content name="email" placeholder="    nattasoy@gmail.com"></Content>

        <Text>전화번호</Text>
        <Content
          name="callNumber"
          placeholder="    - 는 빼고 입력해주세요."
        ></Content>

        <CheckBoxWrapper>
          {!isFirstChecked && (
            <CheckBox
              src="/unChecked.png"
              alt="체크박스"
              onClick={handleFirstCheckBox}
            />
          )}
          {isFirstChecked && (
            <CheckBox
              src="/checked.png"
              alt="체크박스"
              onClick={handleFirstCheckBox}
            />
          )}
          <Text style={{ marginTop: "0rem" }}>
            신청하신 크루는 4회 이용을 기본으로 합니다. 인지하고 계신다면
            체크해주세요.
          </Text>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          {!isSecondChecked && (
            <CheckBox
              src="/unChecked.png"
              alt="체크박스"
              onClick={handleSecondCheckBox}
            />
          )}
          {isSecondChecked && (
            <CheckBox
              src="/checked.png"
              alt="체크박스"
              onClick={handleSecondCheckBox}
            />
          )}
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

  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;

  border-radius: 0.8rem;
  border: solid 0.115rem #3f66f1;
`;

const Blue = styled.strong`
  color: #3f66f1;
`;

const Text = styled.p`
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

const Box = styled.div`
  width: 31.6rem;
  height: 9.8rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.01rem 0.3rem 0 #c5cace;
  border: solid 0.1rem #e1e4e7;
  background-color: #f6f6f6;

  text-align: center;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  padding-left: 3.3rem;
  padding-right: 3.3rem;
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
