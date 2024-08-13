import React from 'react'
import * as B from './Youth4Cut.style'
import Frame from '../../assets/frame.png'
import { useNavigate } from 'react-router-dom'

function Youth4Cut() {
  const navigate = useNavigate()

  const handleImageDownload = () => {
    const url = Frame

    const a = document.createElement('a')
    a.href = url
    a.download = 'my-youth-4cut.png'
    document.body.appendChild(a)
    a.click()

    document.body.removeChild(a)
  }

  const handleMoveHome = () => {
    navigate('/')
  }

  return (
    <B.Wrapper>
      <B.Container>
        마음을 전해주는 <br />한 페이지를 보내주세요
        <B.TextStyleBold>우리의 청춘을 네 컷에 담았다</B.TextStyleBold>
        <B.ImageContainer src={Frame} />
        <B.WhiteBackgroundContainerBox>
          <B.WhiteBackgroundContainer>
            <B.WhiteParticipationText onClick={handleImageDownload}>
              <B.BlackCameraIcon /> 사진 다운로드
            </B.WhiteParticipationText>
          </B.WhiteBackgroundContainer>
          <B.WhiteBackgroundContainer>
            <B.WhiteParticipationText>
              <B.ShareIcon /> 캠페인 공유하기
            </B.WhiteParticipationText>
          </B.WhiteBackgroundContainer>
        </B.WhiteBackgroundContainerBox>
        <B.TextStyleBold>
          자립준비청년의 아름다운 청춘의 한 장도
          <br />
          함께 써내려가주세요
        </B.TextStyleBold>
        <B.BackgroundContainer onClick={handleMoveHome}>
          <B.ParticipationText>
            한 페이지가 될 수 있게 캠페인 참여하기
          </B.ParticipationText>
        </B.BackgroundContainer>
      </B.Container>
    </B.Wrapper>
  )
}

export default Youth4Cut
