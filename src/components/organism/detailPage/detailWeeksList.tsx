import OddWeeks from "@src/components/organism/detailPage/oddWeeks";
import OrderWeeks from "@src/components/organism/detailPage/orderWeeks";

import React from "react";
import styled from "styled-components";

export default function DetailWeeksList({ detailActivities }) {
  return (
    <Wrapper>
      {detailActivities.map((detailActivities, index) => {
        if (detailActivities.id >= 5) {
          detailActivities.id -= 4;
        }
        return index % 2 === 0 ? (
          <OddWeeks
            key={JSON.stringify(detailActivities)}
            {...{ detailActivities }}
          />
        ) : (
          <OrderWeeks
            key={JSON.stringify(detailActivities)}
            {...{ detailActivities }}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
