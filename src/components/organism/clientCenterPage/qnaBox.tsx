import QnaClose from "@src/components/organism/clientCenterPage/qnaClose";
import QnaOpen from "@src/components/organism/clientCenterPage/qnaOpen";

import React, { useState } from "react";
import styled from "styled-components";

export default function QnaBox({ header, content }) {
  const [isOpenIn, setOpenIn] = useState(false);

  return (
    <Wrapper>
      <QnaClose header={header} onOpen={setOpenIn} />
      {isOpenIn && <QnaOpen content={content} />}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
