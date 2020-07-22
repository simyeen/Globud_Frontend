import { useDetailMainboard } from "@src/components/hooks/detailPageData/detailMainboardData";
import { useDetailLeader } from "@src/components/hooks/detailPageData/detailLeaderData";
import { useDetailActivities } from "@src/components/hooks/detailPageData/detailActivityList/Crew1";

import React, { useState } from "react";
import styled from "styled-components";

export default function DetailPageForm({ pageNumber }) {
  const { detailMainboard, loading, error, fetchData } = useDetailMainboard();
  const { detailLeader } = useDetailLeader();
  const { detailActivities } = useDetailActivities();

  console.log("detailMainboardData testing : ", detailMainboard);
  console.log("detailLeader testing : ", detailLeader);
  console.log("detailActivities testing : ", detailActivities);

  return <Wrapper>테스트중</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
