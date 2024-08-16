import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./YouthMoment.style";
import MomentImg from "../../assets/momentpic.png";

function YouthMoment() {
  const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

  const [imageUrl, setImageUrl] = useState(null); // 이미지 URL 상태

  // 이미지 파일을 선택하는 핸들러
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile); // 파일의 URL 생성
      setImageUrl(fileUrl); // 상태 업데이트
    }
  };

  // `<S.BackgroundContainer>` 클릭 시 파일 입력을 활성화하는 함수
  const handleContainerClick = () => {
    if (imageUrl) {
      navigate("/"); // 이미지가 있으면 Home 페이지로 이동
    } else {
      document.getElementById("fileInput").click(); // 이미지가 없으면 파일 입력 활성화
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        나의 청춘의 한 순간을
        <br />
        올려주세요
        <S.CenteredContainer>
          <S.TextStyleBold>
            청순의 순간을 올리면 <br />
            전광판에 여러분의 청춘을 담아드릴게요
          </S.TextStyleBold>
        </S.CenteredContainer>
        <img
          src={imageUrl ? imageUrl : MomentImg}
          style={{ width: "19rem", height: "19rem", objectFit: "cover" }}
        ></img>
        <S.BackgroundContainer onClick={handleContainerClick}>
          <S.ParticipationText>
            {imageUrl ? "이 순간으로 할래요!" : "청춘의 순간 업로드하기!"}
            <S.ArrowIcon />
          </S.ParticipationText>
          {/* 숨겨진 파일 입력 태그 */}
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept="image/*" // 이미지 파일만 선택 가능
          />
        </S.BackgroundContainer>
      </S.Container>
    </S.Wrapper>
  );
}

export default YouthMoment;
