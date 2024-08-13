import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as A from "../Letter/Letter.style";
import Letter1 from "../../assets/Letter1.png";
import Letter2 from "../../assets/Letter2.png";
import Letter3 from "../../assets/Letter3.png";
import Letter4 from "../../assets/Letter4.png";
import Letter5 from "../../assets/Letter5.png";

const images = [Letter1, Letter2, Letter3, Letter4, Letter5];
// 닉네임 배열 생성
const nicknames = [
  "익명의 코끼리",
  "익명의 호랑이",
  "익명의 사자",
  "익명의 기린",
  "익명의 원숭이",
  "익명의 고양이",
  "익명의 강아지",
  "익명의 토끼",
  "익명의 여우",
  "익명의 늑대",
  "익명의 펭귄",
  "익명의 사슴",
  "익명의 벨루가",
  "익명의 다람쥐",
  "익명의 고슴도치",
  "익명의 백조",
  "익명의 판다",
  "익명의 수달",
  "익명의 고래",
  "익명의 돌고래",
];
// 초기 이미지를 랜덤으로 설정
const getRandomInitialImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

// 초기 닉네임을 랜덤으로 설정
const getRandomNickname = (previousNickname) => {
  let randomIndex;
  let newNickname;
  do {
    randomIndex = Math.floor(Math.random() * nicknames.length);
    newNickname = nicknames[randomIndex];
  } while (newNickname === previousNickname);
  return newNickname;
};

function Letter() {
  const [randomImage, setRandomImage] = useState(getRandomInitialImage());
  const [previousImage, setPreviousImage] = useState(null);
  const [previousNickname, setPreviousNickname] = useState(null);

  const [randomNickname, setRandomNickname] = useState(() => {
    const initialNickname = getRandomNickname(null);
    setPreviousNickname(initialNickname);
    return initialNickname;
  });

  useEffect(() => {
    const newNickname = getRandomNickname(previousNickname);
    setRandomNickname(newNickname);
    setPreviousNickname(newNickname);

    // 이미지도 변경되도록 changeImage 호출
    changeImage();
  }, []); // 페이지 로드 시 실행

  const changeImage = () => {
    let newImage;
    do {
      const randomIndex = Math.floor(Math.random() * images.length);
      newImage = images[randomIndex];
    } while (newImage === previousImage);

    setRandomImage(newImage);
    setPreviousImage(newImage);
  };

  return (
    <A.Wrapper>
      <A.Container>
        마음을 전해주는 <br />한 페이지를 보내주세요


        <A.CenteredContainer>
          <A.TextStyleBold>{randomNickname}</A.TextStyleBold>
          <A.TextStyleNormal>님한테 도착한 편지에요!</A.TextStyleNormal>
        </A.CenteredContainer>
        
        <img src={randomImage} style={{ width: "19rem", height: "19rem" }} />
        <A.LearnMoreText onClick={changeImage}>
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
