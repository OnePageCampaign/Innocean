import React from "react";
import * as L from "./HeroSection.style";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <L.Wrapper>
      <L.ImageContainer src="/img/herosection.png" alt="Background" />
      <L.Container>
        한 페이지가 될 수 있게
        <L.CenteredContainer>
          <L.TextStyleNormal>
            아름다운 청춘의 한 장을
            <br />
            함께 써내려가는
            <L.TextStyleBold>대국민 참여 캠페인</L.TextStyleBold>
          </L.TextStyleNormal>
        </L.CenteredContainer>
        <L.BackgroundContainer
          onClick={() => {
            navigate("/letter");
          }}
        >
          <L.ParticipationText>
            지금 바로 참여하기 <L.ArrowIcon />
          </L.ParticipationText>
        </L.BackgroundContainer>
        <L.LearnMoreText>더 알아보기</L.LearnMoreText>
        <L.BelowIcon />
      </L.Container>

      <div className="whiteContainer">
        <div className="centeredText">
          <span className="textNormal">
            매년 2천 명이 넘는
            <br />
          </span>
          <span className="textBold">보호대상아동</span>
          <span className="textNormal">이 발생하고 있습니다</span>
        </div>
      </div>
    </L.Wrapper>
  );
}

export default HeroSection;
