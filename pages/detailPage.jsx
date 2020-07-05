import Navigator from "@src/components/organism/mainPage/navigator";
import DetailMainBoard from "@src/components/organism/detailPage/detailMainBoard";
import DetailSubBoard from "@src/components/organism/detailPage/detailSubBoard";
import DetailLeader from "@src/components/organism/detailPage/detailLeader";
import DetailCurriculum from "@src/components/organism/detailPage/detailCurriculum";

import React from "react";
import styled from "styled-components";

export default function DetailPage() {
  console.log("testData: ", typeof testData);
  return (
    <Wrapper>
      <Navigator />
      <DetailMainBoard />
      <DetailSubBoard />
      <DetailLeader />
      <DetailCurriculum />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
