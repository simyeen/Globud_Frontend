import React, { useState } from "react";

import styled from "styled-components";
import axios from "axios";

export default function LoginForm({ onSubmit }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isValidForm = () => {
    //const { email, password } = form;
    if (form.email === "" || form.password === "") {
      alert("모든 칸을 채워주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!isValidForm) {
      console.log("!isValidForm");
      return;
    }
    axios
      .post(process.env.API_HOST + "/auth/signin", form)
      .then((response) => {
        alert("로그인 성공");
        console.log(response);
        onSubmit(true);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.log("이메일 틀림");
          alert("이메일이 존재하지 않습니다.");
          setForm({ email: "" });
        } else if (error.response.status === 422) {
          console.log(error);
          alert("비밀번호가 틀렸습니다.");
          setForm({ password: "" });
        } else {
          alert("로그인에 실패했습니다.");
          initForm();
        }
      });
  };

  const initForm = () => {
    setForm({ email: "", password: "" });
  };

  return (
    <Wrapper>
      <Header>로그인</Header>
      <Row>
        <UserInfo>
          <Lable>EMAIL</Lable>
          <Input name="email" value={form.email} onChange={handleChangeForm} />
        </UserInfo>
        <UserInfo>
          <Lable>PASSWORD</Lable>
          <Input
            name="password"
            value={form.password}
            onChange={handleChangeForm}
          />
        </UserInfo>
      </Row>
      <SunmitButton onClick={handleSubmit}>로그인</SunmitButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem;
`;

const Header = styled.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
`;

const Row = styled.div`
  width: 100%;
`;

const Lable = styled.label`
  font-size: 2rem;
  margin-right: auto;
`;

const Input = styled.input`
  width: 75%;
  padding: 0.5rem 1rem;
  border: 1px, solid, grey;
  border-radius: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem;
`;

const SunmitButton = styled.button`
  display: block;
  margin-left: auto;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 0;
  outline: 0;
`;
