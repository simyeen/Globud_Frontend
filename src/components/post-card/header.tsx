import React from "react";
import styled from "styled-components";

import moment from "moment";

export default function PostCardHeader({
  createdAt,
  creator,
  profileImageUrl,
}) {
  const date = moment(createdAt).format("MM월 DD일 hh:mm a");

  return (
    <Wrapper>
      <ProfileImage src={profileImageUrl} />
      <CreateInfoWrapper>
        <Creator>{creator}</Creator>
        <CreatedAt>{date}</CreatedAt>
      </CreateInfoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  margin-right: 0.5rem;
`;

const CreateInfoWrapper = styled.div`
  width: fit-content;
  height: fit-content;
`;

const Creator = styled.p`
  margin: 0rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

const CreatedAt = styled.p`
  margin: 0rem;
  color: grey;
  font-size: 1.2rem;
`;
