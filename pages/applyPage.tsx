import Navigator from "@src/components/organism/mainPage/navigator";
import ApplyMainboard from "@src/components/organism/applyPage/applyMainboard";
import ApplyForm from "@src/components/organism/applyPage/applyForm";
import ApplyFinalButton from "@src/components/molecule/applyFinalButton";
import BankForm from "@src/components/molecule/bankForm";
import { useDetailMainboard } from "@src/components/hooks/detailPageData/detailMainboardData";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

export default function ApplyPage() {
  const router = useRouter();
  const { detailMainboard, loading, error, fetchData } = useDetailMainboard();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuClose, setMenuClose] = useState(false);
  const [isAdmit, setAdmit] = useState(false);
  const [seletBank, setSeletBank] = useState("KB국민은행");

  const crewNumber = Number(router.query.crewNumber);
  console.log("router.query.crewNumber : ", router.query.crewNumber);

  const handleDrawerToggle = () => {
    console.log("페이지 전 isMenuOpen : ", isMenuOpen);
    console.log("페이지 전 isMenuClose : ", isMenuClose);
    if (isMenuOpen === false) {
      setMenuOpen(true);
      setMenuClose(false);
    } else if (isMenuOpen === true) {
      setMenuOpen(false);
      setMenuClose(true);
    }
    console.log("페이지 후 isMenuOpen : ", isMenuOpen);
    console.log("페이지 후 isMenuClose : ", isMenuClose);
  };

  const bankList = [
    { id: 1, bank: "KB국민은행" },
    { id: 2, bank: "IBK기업은행" },
    { id: 3, bank: "NH농협은행" },
    { id: 4, bank: "신한은행" },
    { id: 5, bank: "우리은행" },
    { id: 6, bank: "KEB하나은행" },
    { id: 7, bank: "카카오뱅크" },
    { id: 8, bank: "BNK부산은행" },
    { id: 9, bank: "SC제일은행 " },
    { id: 10, bank: "케이뱅크" },
    { id: 11, bank: "DGB대구은행" },
  ];

  console.log("Page 은행 : ", seletBank);
  return (
    <Wrapper>
      {isMenuOpen && <BankNavigator />}
      {isMenuOpen && (
        <BankWrapper>
          <HeaderWrapper>
            <Header>은행을 선택해주세요.</Header>
            <Image src="/close.png" alt="닫기창" onClick={handleDrawerToggle} />
          </HeaderWrapper>
          <CrossLine src="/crossbar.png" alt="크로스 바 " />
          <BankMenu>
            {bankList.map((item) => {
              return (
                <BankForm
                  key={item.id}
                  bank={item.bank}
                  onSelet={setSeletBank}
                  onClose={setMenuOpen}
                />
              );
            })}
            <BankSpace />
          </BankMenu>
        </BankWrapper>
      )}
      <Navigator />
      <ApplyMainboard
        crewNumber={crewNumber}
        {...detailMainboard[crewNumber - 1]}
      />
      {!isAdmit && <CrossBar src="/crossbar.png" alt="크로스 바 " />}
      {!isAdmit && (
        <ApplyForm
          onAdimt={setAdmit}
          onMenuOpen={setMenuOpen}
          seletBank={seletBank}
          crewNumber={crewNumber}
        />
      )}
      {isAdmit && <Space />}
      {isAdmit && <ApplyFinalButton />}
    </Wrapper>
  );
}

const BankSpace = styled.div`
  width: 100%;
  height: 3.8rem;
  background-color: #ffffff;
`;

const CrossLine = styled.img`
  width: 100%;
  height: 0.1rem;
  background-color: #222426;
  z-index: 999;
`;

const Image = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
`;

const Header = styled.h1`
  width: 21rem;
  height: 2.3rem;
  font-size: 1.6rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.048rem;
  color: #000000;
`;

const BankMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5.4rem;
  background-color: #ffffff;
  z-index: 999;
  border-radius: 0.8rem 0.8rem 0px 0px;
  padding: 1.5rem 2.2rem;
`;

const BankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 36rem;
  height: 100vh;

  overflow: auto;
  z-index: 999;
  position: fixed;
  bottom: 0;
  top: 25rem;
`;
//63.5vh
const BankNavigator = styled.div`
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  background-color: #222426;
  overflow: scroll;
  z-index: 3;
  position: fixed;
`;

const Space = styled.div`
  margin-top: 7rem;
`;

const CrossBar = styled.img`
  width: 100%;
  height: 0.6rem;
  object-fit: contain;
  margin-top: 1.8rem;
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
