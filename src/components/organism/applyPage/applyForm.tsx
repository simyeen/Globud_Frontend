import BankBarOpen from "@src/components/molecule/bankBarOpen";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function AvailableCrewList(props) {
  const { onAdimt, onMenuOpen, seletBank, crewNumber } = props;
  const [isFirstChecked, setFirstChecked] = useState(false);
  const [isSecondChecked, setSecondChecked] = useState(false);
  var userForm = {};
  console.log("crewNumber : ", crewNumber);
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

  const [form, setForm] = useState({
    name: "",
    depositNum: "",
    nation: "",
    email: "",
    phone: "",
  });

  const handleFormChange = (e) => {
    const { type, name, value } = e.target;
    console.log("handleFormChange : ", type, name, value);
    setForm({
      ...form,
      [name]: name === "phone" ? value.slice(0, 11) : value,
    });
    console.log(form);
  };

  const isValidForm = () => {
    console.log("isValidForm : ", form);
    if (
      form.name === "" ||
      form.nation === "" ||
      form.email === "" ||
      form.phone === ""
    ) {
      alert("모든 항목을 입력해 주십시오.");
      return false;
    }
    if (form.phone.length !== 11) {
      alert("전화번호를 올바른 형식으로 입력해주세요!");
      return false;
    }
    return true;
  };

  const handlePost = () => {
    console.log("post 보내기 : ", userForm);
    axios
      .post("https://globud.co.kr/api/applies/", userForm)
      .then((response) => {
        console.log("데이터 전송 성공.", userForm);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log("error in ", userForm);
        console.log("데이터 전송 실패.");
      });
  };

  var restForm = {
    depositBank: seletBank,
    crew: crewNumber,
    agreement1: 1,
    agreement2: 1,
  };

  const handleSubmit = () => {
    if (isValidForm() === false) {
      return;
    }
    if (isValidForm() === true && (!isFirstChecked || !isSecondChecked)) {
      console.log(form, isFirstChecked, isSecondChecked);
      console.log("please checking all of checkBox");
      alert("약관에 동의하여 주십시오.");
      return;
    } else if (isValidForm() === true && isFirstChecked && isSecondChecked) {
      alert(`${form.name}님 신청완료 되었습니다.`);
      console.log("handleSubmit in : ", form);

      userForm = Object.assign(form, restForm);
      console.log("userForm : ", userForm);
      handlePost();
      onAdimt(true);
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
        <Content
          type="text"
          name="name"
          value={form.name}
          placeholder="홍길동"
          onChange={handleFormChange}
        ></Content>

        <Text>국적</Text>
        <Content
          type="text"
          name="nation"
          value={form.nation}
          placeholder="대한민국"
          onChange={handleFormChange}
        ></Content>

        <Text>입금하신 계좌번호</Text>
        <BankWrapper>
          <BankSubWrapper>
            <Text
              style={{
                color: "#555961",
                fontWeight: "normal",
                marginTop: "0.1rem",
              }}
            >
              {seletBank}
            </Text>
            <BankBarOpen {...{ onMenuOpen }} />
          </BankSubWrapper>
          <HorizonBar />
          <Content
            type="number"
            name="depositNum"
            value={form.depositNum}
            placeholder="'-'  는 빼고 입력해주세요."
            onChange={handleFormChange}
            style={{
              marginTop: "0.4rem",
              border: "0",
              width: "19.4rem",
              height: "3.5rem",
            }}
          />
        </BankWrapper>

        <Text>이메일</Text>
        <Content
          type="email"
          name="email"
          value={form.email}
          placeholder="globud@gmail.com"
          onChange={handleFormChange}
        ></Content>

        <Text>전화번호</Text>
        <Content
          type="number"
          name="phone"
          value={form.phone}
          placeholder="'-'  는 빼고 입력해주세요."
          onChange={handleFormChange}
        />
        <CheckBoxWrapper>
          <CheckBox onClick={handleFirstCheckBox} />
          {isFirstChecked && (
            <Check
              src="/checked.png"
              alt="체크"
              onClick={handleFirstCheckBox}
            />
          )}
          <Text style={{ marginTop: "0rem" }}>
            신청하신 크루는 4회 이용을 기본으로 합니다. 인지하고 계신다면
            체크해주세요.
          </Text>
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <CheckBox onClick={handleSecondCheckBox} />
          {isSecondChecked && (
            <Check
              src="/checked.png"
              alt="체크"
              onClick={handleSecondCheckBox}
            />
          )}
          <Text style={{ marginTop: "0rem" }}>
            상기 계좌로 입금을 완료하셨으면, 체크해주세요.
          </Text>
        </CheckBoxWrapper>

        <ApplyCompleteButton
          src="/applyComplete.png"
          alt="신청 완료 버튼"
          onClick={handleSubmit}
        />
      </SubWrapper>
    </Wrapper>
  );
}

const ApplyCompleteButton = styled.img`
  width: 31.4rem;
  height: 6rem;
  object-fit: contain;
  margin-top: 1.3rem;
  margin-bottom: 3.8rem;
`;

const Check = styled.img`
  width: 1.6rem;
  height: 1.6rem;

  position: absolute;
  z-index: 1;
`;

const CheckBox = styled.div`
  width: 2rem;
  height: 1.6rem;
  border-radius: 0.3rem;
  border: solid 0.1rem #e1e4e7;
  background-color: #ffffff;

  position: relative;
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

const HorizonBar = styled.div`
  border-right: solid 0.1rem #3f66f1;
`;

const BankSubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 11rem;
  height: 2.7rem;

  margin-top: 0.8rem;
  border: solid 0rem #3f66f1;
`;

const BankWrapper = styled.div`
  display: flex;
  width: 31.4rem;
  height: 4.5rem;

  padding-left: 1.5rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;

  border-radius: 0.8rem;
  border: solid 0.115rem #3f66f1;
  outline: none;

  z-index: 1;
  position: relative;
`;

const Content = styled.input`
  width: 31.4rem;
  height: 4.5rem;

  padding-left: 1.5rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;

  border-radius: 0.8rem;
  border: solid 0.115rem #3f66f1;
  outline: none;
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
