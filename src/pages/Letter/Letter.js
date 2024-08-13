import React from "react";
import { useNavigate } from "react-router-dom";
import * as A from "../Letter/Letter.style";
import Letter1 from "../../assets/Letter1.png";

function Letter() {
  return (
    <A.Wrapper>
      <A.Container>
        마음을 전해주는 <br />한 페이지를 보내주세요
        <A.CenteredContainer>
          <A.TextStyleBold>익명의 코끼리</A.TextStyleBold>
          <A.TextStyleNormal>님한테 도착한 편지에요!</A.TextStyleNormal>
        </A.CenteredContainer>
        <img src={Letter1} style={{ width: "19rem", height: "19rem" }} />
        <A.LearnMoreText>
          새로운 편지 보기 <A.BelowIcon />
        </A.LearnMoreText>
        <A.BackgroundContainer onClick={{}}>
          <A.ParticipationText>
            편지에 답장하기 <A.ArrowIcon />
          </A.ParticipationText>
        </A.BackgroundContainer>
      </A.Container>
    </A.Wrapper>
  );
}

export default Letter;
