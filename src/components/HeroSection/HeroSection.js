import React from 'react'
import * as L from './HeroSection.style'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function HeroSection() {
  const navigate = useNavigate()
  const whiteContainerRef = useRef(null)
  const grayContainerRef = useRef(null)
  const youthIndependenceRef = useRef(null)
  const ExtendedSupportInfoRef = useRef(null)
  const moreIconRef = useRef(null)
  const SupportStatsRef = useRef(null)
  const IndependenceEducationRef = useRef(null)
  const SettlementGrantRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight

      const checkVisibility = ref => {
        const pos = ref.current.getBoundingClientRect().top
        if (pos < screenHeight) {
          ref.current.style.opacity = 1
        }
      }

      checkVisibility(whiteContainerRef)
      checkVisibility(grayContainerRef)
      checkVisibility(youthIndependenceRef)
      checkVisibility(ExtendedSupportInfoRef)
      checkVisibility(moreIconRef)
      checkVisibility(SupportStatsRef)
      checkVisibility(IndependenceEducationRef)
      checkVisibility(SettlementGrantRef)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <L.Wrapper>
      <L.ImageContainer src='/img/herosection.png' alt='Background' />
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
            navigate('/letter')
          }}
        >
          <L.ParticipationText>
            지금 바로 참여하기 <L.ArrowIcon />
          </L.ParticipationText>
        </L.BackgroundContainer>
        <L.LearnMoreText
          onClick={() => {
            grayContainerRef.current.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          더 알아보기
        </L.LearnMoreText>
        <L.BelowIcon
          onClick={() => {
            grayContainerRef.current.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </L.Container>

      <L.WhiteContainer ref={whiteContainerRef}>
        <L.TextStyleNormal style={{ color: 'black' }}>
          매년 2천 명이 넘는
          <br />
          <L.TextStyleBold>보호대상아동</L.TextStyleBold>이 발생하고 있습니다
        </L.TextStyleNormal>
      </L.WhiteContainer>

      <L.GrayContainer ref={grayContainerRef}>
        <L.YouthIndependence ref={youthIndependenceRef}>
          만 18세가 되면 양육시설에서 나가
          <br />
          독립해야 하는 자립준비청년들
        </L.YouthIndependence>

        <L.ExtendedSupportInfo ref={ExtendedSupportInfoRef}>
          보호기간이 만 24세까지 연장할 수 있는 법안이 개정됐지만
          <br />
          여전히 많은 이들이 만 18세에 나와야 하는 현실 속에 있습니다
        </L.ExtendedSupportInfo>

        <L.MoreIconSvgContainer ref={moreIconRef} />

        <L.SupportStats ref={SupportStatsRef}>
          자립지원전담인력 1인당
          <br />
          담당 인원 평균 70.8명
        </L.SupportStats>

        <L.IndependenceEducation ref={IndependenceEducationRef}>
          퇴소 직전에
          <br />
          급하게 하는 자립 교육
        </L.IndependenceEducation>

        <L.SettlementGrant ref={SettlementGrantRef}>
          최대 2,000만원
          <br />
          자립정착금
        </L.SettlementGrant>
      </L.GrayContainer>
    </L.Wrapper>
  )
}

export default HeroSection
