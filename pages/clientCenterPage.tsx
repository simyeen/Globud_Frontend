import Navigator from "@src/components/organism/mainPage/navigator";
import QnaBox from "@src/components/organism/clientCenterPage/qnaBox";

import React, { useState } from "react";
import styled from "styled-components";

export default function ClientCenterPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const qnas = [
    {
      id: 1,
      header: "글로벗은 어떤 서비스인가요?",
      content:
        "글로벗은 한국인과 외국인이 관심 분야를 중심으로 지속 가능한 관계를 맺을 수 있도록 시사토론, 문화체험, 관광, 액티비티 등 다양한 활동을 제공하는 교류 플랫폼입니다. 현재 글로벗은 액티비티, 언어/대화 두 가지의 크루가 구성되어 있습니다.",
    },
    {
      id: 2,
      header: "글로벗 크루 참여 방법은 어떻게 되나요?",
      content:
        "메인 화면 리스트에서 원하는 크루를 선택하신 후 ‘신청하기’ 버튼을 눌러 폼을 작성해주세요. 다만, 1:1 비율 유지 제도가 존재하기 때문에, 신청 가능 자리가 남아있는지 확인 후 신청 바랍니다. 폼 제출 후 입금이 확인되면 완료 카카오톡 안내를 보내드리겠습니다.",
    },
    {
      id: 3,
      header: "글로벗 크루 참여 방법은 어떻게 되나요?",
      content:
        "한 번에 여러 개의 크루를 신청할 수 있습니다. 하지만 각 크루의 일정에 따라 정해진 모임 시간이 겹칠 수도 있으니, 스케줄을 충분히 고려하신 후 신청하시길 바랍니다.",
    },
    {
      id: 4,
      header: "크루를 신청하려는데, 어떻게 결제하나요?",
      content:
        "현재 결제 방식은 계좌이체입니다. 폼 작성 화면에 안내되는 계좌로 송금해주시면, 빠른 시간 내에 완료 여부를 카카오톡으로 보내 드리겠습니다. ",
    },
  ];

  return (
    <Wrapper>
      <Navigator onMenuOpen={setMenuOpen} />
      <Header>자주 하는 질문</Header>
      {qnas.map((qna) => (
        <QnaBox key={qna.id} header={qna.header} content={qna.content} />
      ))}
      <Space />
    </Wrapper>
  );
}

const Header = styled.h1`
  width: 15.8rem;
  height: 2.3rem;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.03rem;
  color: #000000;

  margin-top: 2.4rem;
  margin-bottom: 3.3rem;
  margin-left: 2.8rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const Space = styled.div`
  width: 100%;
  height: 6.4rem;
  margin-bottom: 10rem;
`;
