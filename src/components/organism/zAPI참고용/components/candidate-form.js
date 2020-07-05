import React, { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";

export default function CandidateForm(props) {
  const { id, name, voteCount, rank, getCandidateList } = props;

  const handleVote = () => {
    axios
      .put(process.env.API_HOST + "/candidates/" + id + "/vote/")
      .then((response) => {
        console.log(response);
        alert(name + "님에게 투표완료.");
        getCandidateList();
      })
      .catch((error) => {
        console.log(error);
        alert(rank + "랭크 투표실패");
      });
  };

  return (
    <Wrapper>
      <Rank>{rank}위:</Rank>
      <Info>
        {name}[{voteCount}표]
      </Info>
      <VoteButton onClick={handleVote}>투표</VoteButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Rank = styled.p`
  font-weight: bolder;
  font-size: 2.5rem;
  border: none;
`;
const Info = styled.p`
  font-size: 2.5rem;
  width: 40%;
  border: none;
`;
const VoteButton = styled.button`
  background: blue;
  color: white;
  border: none;
  border-radius: 0.7rem;
  font-size: 2rem;
  height: 3.5rem;
  width: 5.5rem;
`;
