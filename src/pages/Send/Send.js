import React from "react";
import * as A from "../Send/Send.style";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Letter1 from "../../assets/Letter1.png";
import Letter2 from "../../assets/Letter2.png";
import Letter3 from "../../assets/Letter3.png";
import Letter4 from "../../assets/Letter4.png";
import Letter5 from "../../assets/Letter5.png";
import { useLocation } from "react-router-dom";

const images = [Letter1, Letter2, Letter3, Letter4, Letter5];
// 닉네임 배열 생성

// 초기 이미지를 랜덤으로 설정
const getRandomInitialImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

function Send() {
  const location = useLocation();

  const [randomNickname, setRandomNickname] = useState("");
  const [letterContent, setLetterContent] = useState(""); // 입력받은 편지 내용을 상태로 관리

  useEffect(() => {
    // location.state가 존재하면 초기 닉네임 설정
    if (location.state?.randomNickname) {
      setRandomNickname(location.state.randomNickname);
    }
  }, [location]);

  // 편지 내용이 변경될 때 호출될 함수
  const handleLetterChange = (event) => {
    setLetterContent(event.target.value);
  };

  return (
    <A.Wrapper>
      <A.Container>
        마음을 전해주는 <br />한 페이지를 보내주세요
        <A.CenteredContainer>
          <A.TextStyleBold>{randomNickname}</A.TextStyleBold>
          <A.TextStyleNormal>님한테 전달할 편지에요!</A.TextStyleNormal>
        </A.CenteredContainer>
        <A.LetterStyle>
          <A.LetterInput
            value={letterContent}
            onChange={handleLetterChange}
            placeholder="여기에 편지를 작성하세요..."
          />
        </A.LetterStyle>
        <A.RecordBox>
          <A.RecordIconBeforeStart />
        </A.RecordBox>
        <A.BackgroundContainer onClick={() => {}}>
          <A.ParticipationText>
            편지 보내기 <A.ArrowIcon />
          </A.ParticipationText>
        </A.BackgroundContainer>
      </A.Container>
    </A.Wrapper>
  );
}
export default Send;
