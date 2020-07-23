import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function AvailableCrewList(props) {
  const {
    id,
    img1,
    name,
    subName1,
    location,
    originalSellPrice,
    sellPrice,
    numActivities,
  } = props;

  return (
    <Wrapper>
      <Link href={`/detailPages/detailPage${id}`}>
        <CrewImage src={img1} alt={`/detailPages/detailPage${id}`} />
      </Link>
      <CrewHeader>{subName1}</CrewHeader>
      <CrewTitle>{name}</CrewTitle>
      <CrewImformationWrapper>
        <CrewFee>
          {sellPrice} ({numActivities}회)
        </CrewFee>
        <Dot src="/dot.png" alt="점" />
        <CrewPlace>{location}</CrewPlace>
      </CrewImformationWrapper>
    </Wrapper>
  );
}

const Dot = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
`;

const CrewPlace = styled.p`
  width: 8rem;
  height: 1.1rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #7e8289;
`;

const CrewFee = styled.p`
  width: 8.5rem;
  height: 1.1rem;
  font-size: 1.3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.052rem;
  color: #3f66f1;
`;

const CrewImformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
`;

const CrewTitle = styled.p`
  width: 26.4rem;
  height: 2.3rem;
  font-size: 1.7rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.048rem;
  color: #000000;

  margin-top: 0.5rem;
`;

const CrewHeader = styled.p`
  width: 26.4rem;
  height: 1.9rem;
  font-size: 1.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: -0.033rem;
  color: #8b919b;

  margin-bottom: 0rem;
  margin-top: 1rem;
`;

const CrewImage = styled.img`
  width: 100%;
  height: 14.4rem;
  border-radius: 0.8rem;
  margin-top: 3.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
