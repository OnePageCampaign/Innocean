import React from "react";
import * as B from "./Youth4Cut.style";
import Frame from "../../assets/frame.png";

function Youth4Cut() {
  return (
    <B.Wrapper>
      <B.Container>
        마음을 전해주는 <br />한 페이지를 보내주세요
        <B.TextStyleBold>우리의 청춘을 네 컷에 담았다</B.TextStyleBold>
        <img src={Frame} style={{ width: "19rem", height: "27rem" }} />
        <B.WhiteBackgroundContainerBox>
          <B.WhiteBackgroundContainer>
            <B.WhiteParticipationText>
              <B.BlackCameraIcon /> 사진 다운로드
            </B.WhiteParticipationText>
          </B.WhiteBackgroundContainer>

          <B.WhiteBackgroundContainer>
            <B.WhiteParticipationText>
              <B.ShareIcon /> 캠페인 공유하기
            </B.WhiteParticipationText>
          </B.WhiteBackgroundContainer>
        </B.WhiteBackgroundContainerBox>
        <B.TextStyleBold >
          자립준비청년의 아름다운 청춘의 한 장도
          <br />
          함께 써내려가주세요
        </B.TextStyleBold>
        
        <B.BackgroundContainer>
          <B.ParticipationText>
            한 페이지가 될 수 있게 캠페인 참여하기
          </B.ParticipationText>
        </B.BackgroundContainer>
      </B.Container>
    </B.Wrapper>
  );
}

export default Youth4Cut;
