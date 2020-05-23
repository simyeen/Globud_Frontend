import React from "react";
import styled from "styled-components";

import Header from "../src/components/header";
import PostCardList from "../src/components/post-card/list";

const postList = [
  {
    id: "p1",
    createdAt: "2020-05-20T04:03:33Z",
    creator: "박효진",
    profileImageUrl:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/98884459_2978951285514374_7110654632992440320_n.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_oc=AQl_LN1ClwrHYfiZhh30RiAy8OYjKHt8IOJyFE2IfcLDGP9zHN1WYIAJ9t2nMVWS1Es&_nc_ht=scontent-ssn1-1.xx&oh=8d31532f7a4ff26f91542a5767b280a6&oe=5EECB56F",
    content: {
      mbti: "ESTP(모험을 즐기는 사업가)",
      explanationLink:
        "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-estp",
      explanation:
        "현실적인 문제해결에 능하며 적응력이 강하고 관용적이다. 사실적이고 관대하며, 개방적이고 사람이나 일에 대한 선입관이 별로 없다. 강한 현실감각으로 타협책을 모색하고 문제를 해결하는 능력이 뛰어나다. 적응을 잘 하고 친구를 좋아하며 긴 설명을 싫어하고, 운동, 음식, 다양한 활동 등 주로 오관으로 보고, 듣고, 만질 수 있는 생활의 모든 것을 즐기는 형이다. 순발력이 뛰어나며 많은 사실들을 쉽게 기억하고, 예술적인 멋과 판단력을 지니고 있으며, 연장이나 재료들을 다루는 데 능숙하다. 논리 분석적으로 일을 처리하는 데 반해, 추상적인 아이디어나 개념에 대해서는 별로 흥미가 없다.",
      imageUrl:
        "https://static.neris-assets.com/images/personality-types/headers/s1/explorers_Entrepreneur_ESTP_personality_header.svg",
    },
    likeCount: 4321,
  },
  {
    id: "p2",
    createdAt: "2020-05-21T05:17:33Z",
    creator: "양병훈",
    profileImageUrl:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/98204210_2978951335514369_2997523032395743232_n.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_oc=AQm1unmVqeP-2rqYn_l3XHXT0S9ap6LLwU4uD_qpADpfeV1owuO_sBy56de_Qn9Dh3c&_nc_ht=scontent-ssn1-1.xx&oh=6d88cbde569fbad2707177733efeeea5&oe=5EEFCAF8",
    content: {
      mbti: "ESFJ(사교적인 외교관형)",
      explanationLink:
        "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-esfj",
      explanation:
        "동정심이 많고 다른 사람에게 관심을 쏟고 인화를 중시한다. 타고난 협력자로서 동료애가 많고 친절하며 능동적인 구성원이다. 이야기하기를 즐기며 정리 정돈을 잘하고 참을성이 많고 다른 사람들을 잘 도와준다. 사람을 다루고 행동을 요구하는 분야, 예를 들면 교직, 성직, 판매 특히 동정심을 필요로 하는 간호나 의료 분야에 적합하다. 일이나 사람들에 대한 문제에 대하여 냉철한 입장을 취하기 어려워한다. 반대 의견에 부딪혔을 때나 제 요구가 거절당했을 때 마음의 상처를 받는다.",
      imageUrl:
        "https://static.neris-assets.com/images/personality-types/headers/s1/sentinels_Consul_ESFJ_personality_header.svg",
    },
    likeCount: 3214,
  },
  {
    id: "p3",
    createdAt: "2020-05-22T01:50:33Z",
    creator: "이수완",
    profileImageUrl:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/99050807_2978951315514371_974280740885757952_n.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_oc=AQmMP_vqZahAZ-Sjz7SsHxukamYrXug2oNlUSvl9PmRJ4LZkHxuoflKv2_uthlV20Qk&_nc_ht=scontent-ssn1-1.xx&oh=04d63109f304d6e327df56bf74b7e07f&oe=5EEE365C",
    content: {
      mbti: "ENTP(뜨거운 논쟁을 즐기는 변론가)",
      explanationLink:
        "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-entp",
      explanation:
        "민첩하고 독창적이며 창의력이 풍부하다. 안목이 넓고 다방면에 관심과 재능이 많다. 풍부한 상상력과 새로운 일을 시도하는 솔선력이 강하며 논리적이다. 새로운 문제나 복잡한 문제에 해결 능력이 뛰어나며 사람들의 동향에 대해 기민하고 박식하다. 그러나 일상적이고 세부적인 일을 경시하고 태만하기 쉽다. 즉, 새로운 도전이 없는 일에는 흥미가 없으나 관심을 갖고 있는 일에는 대단한 수행능력을 가지고 있다. 때로 경쟁적이며 현실보다는 이론에 더 밝은 편이다.",
      imageUrl:
        "https://static.neris-assets.com/images/personality-types/headers/s1/analysts_Debater_ENTP_personality_header.svg",
    },
    likeCount: 2143,
  },
  {
    id: "p4",
    createdAt: "2020-05-23T03:12:33Z",
    creator: "최수민",
    profileImageUrl:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/99114136_2978951398847696_3678686617700139008_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_oc=AQlfI3PM87Ssfx-ugMwWCbcdVFtDC94-1b06Kk_nXKCsBGAndp_yiR26Y8v-nMW3gUM&_nc_ht=scontent-ssn1-1.xx&oh=349d40b26f55a99a57cf3ac42f51f7cf&oe=5EEE2338",
    content: {
      mbti: "ISTP(만능 재주꾼)",
      explanationLink:
        "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-istp",
      explanation:
        "조용하고 과묵하고 절제된 호기심으로 인생을 관찰하며 상황을 파악하는 민감성과 도구를 다루는 뛰어난 능력이 있다. 말이 없으며, 객관적으로 인생을 관찰하는 형이다. 필요 이상으로 자신을 발휘하지 않으며, 일과 관계되지 않는 이상 어떤 상황이나 인간 관계에 직접 뛰어들지 않는다. 가능한 에너지 소비를 하지 않으려 하며, 사람에 따라 사실적 자료를 정리, 조직하길 좋아하며 기계를 만지거나 인과 관계나 객관적 원리에 관심이 많다. 민첩하게 상황을 파악하는 능력이 있다. 느낌이나 감정, 타인에 대한 마음을 표현하기 어려워한다.",
      imageUrl:
        "https://static.neris-assets.com/images/personality-types/headers/s1/explorers_Virtuoso_ISTP_personality_header.svg",
    },
    likeCount: 1432,
  },
];

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <PostCardList {...{ postList }} />
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
