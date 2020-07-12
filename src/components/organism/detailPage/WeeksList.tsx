import OddWeeks from "@src/components/organism/detailPage/oddWeeks";
import OrderWeeks from "@src/components/organism/detailPage/orderWeeks";

import React from "react";
import styled from "styled-components";

export default function WeeksList() {
  const curriculums = [
    {
      id: 1,
      strongWord: "1주차, ",
      title: "이름 쌓기로 자기소개 하기!",
      content:
        "첫 주의 대화주제는 아이스 브레이킹! 이름 쌓기 게임을 아시나요? 소리내어 서로의 이름을 기억해보면서,  스몰 토킹을 이어나가보세요!",
    },
    {
      id: 2,
      strongWord: "2주차, ",
      title: "영화 [기생충], 다들 보셨겠죠?",
      content:
        "“너는 계획이 다 있구나!” 이번 주차는 아카데미 4관왕에 빛나는 한국 영화 [기생충]을 보고,  각자의 생각을 이야기해 보는 시간을 가집니다. 외국에서 계층 문제를 다룬 영화는 무엇이 있을까요?",
    },
    {
      id: 3,
      strongWord: "3주차, ",
      title: "냠냠! 각국의 식문화 공유하기.",
      content:
        "밥이냐 빵이냐, 그것이 문제로다! 문화 별로 다양한 식문화. 주식사 메뉴 부터 식사 예절까지, 이번 기회로 공유해보아요.  토론이 끝난 후에 다같이 한식 정복은 어때요?",
    },
    {
      id: 4,
      strongWord: "4주차, ",
      title: "한국의 높은 학구열? 다른 나라는 어떤데?!",
      content:
        "한국의 학구열은 유명하다는 인식, 과연 사실일까?  항상 궁금했던 외국에서의 교육제도, 어떻게 다를지 낱낱이 파헤쳐보아요!",
    },
  ];

  const handleCurriculums = (curriculums) => {
    if (curriculums.id % 2 != 0) {
      curriculums.map((curriculums) => (
        <OddWeeks key={curriculums.id} {...{ curriculums }}></OddWeeks>
      ));
    } else if (curriculums.id % 2 == 0) {
      curriculums.map((curriculums) => (
        <OrderWeeks key={curriculums.id} {...{ curriculums }}></OrderWeeks>
      ));
    }
  };

  return (
    <Wrapper>
      {" "}
      {curriculums.map((curriculums) => (
        <OddWeeks key={curriculums.id} {...{ curriculums }}></OddWeeks>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

/*{
  curriculums.map((curriculum) => (
    <OddWeeks key={curriculum.id} {...{ curriculum }}></OddWeeks>
  ));
}*/
