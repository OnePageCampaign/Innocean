import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./YouthMoment.style";
import MomentImg from "../../assets/momentpic.png";
import Modal from "react-modal";

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
      openModal(); // 이미지가 있으면 모달 열기
    } else {
      document.getElementById("fileInput").click(); // 이미지가 없으면 파일 입력 활성화
    }
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Modal 스타일
  const modalStyles = {
    content: {
      width: "20rem",
      height: "12rem",
      border: "1px solid #d3d3d3", // 더 연한 회색으로 변경
      borderRadius: 15,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px",
      margin: "auto", // 모달을 화면 중앙에 위치시킵니다
    },
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
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Confirm Send Modal"
          style={modalStyles}
        >
          <S.NotificationText>알림</S.NotificationText>
          <S.MessageContainer>
            청춘의 순간 이벤트에 정상적으로 참여 완료되었습니다.
          </S.MessageContainer>
          <S.StyledDiv />
          <S.ConfirmationText onClick={() => navigate("/")}>
            확인
          </S.ConfirmationText>
        </Modal>
      </S.Container>
    </S.Wrapper>
  );
}

export default YouthMoment;
