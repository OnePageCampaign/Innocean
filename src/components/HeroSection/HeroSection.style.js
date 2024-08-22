import styled from 'styled-components'
import { ReactComponent as ArrowIconSVG } from '../../assets/material-symbols_arrow-back-ios-new-rounded.svg'
import { ReactComponent as GroupSVG } from '../../assets/Group.svg'
import { ReactComponent as LeaveIconSvg } from '../../assets/보육시설떠나는모습 1.svg'
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

export const ImageContainer = styled.img`
  width: 100%;
  height: 100vh;
  max-width: 400px;
  box-sizing: border-box;
`

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
  font-size: 3rem;
  font-family: UhBeemysen;
  font-weight: bold;
  text-align: center;
`

export const CenteredContainer = styled.div`
  text-align: center;
`

export const TextStyleNormal = styled.span`
  color: white;
  font-size: 1.17rem;
  font-weight: 400;
  line-height: 1.5rem;
  word-wrap: break-word;
  display: block;
`

export const TextStyleBold = styled.span`
  font-weight: 700;
`

export const BackgroundContainer = styled.div`
  width: 77%;
  height: 7%;
  background: #e5eff2;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ParticipationText = styled.div`
  width: 100%;
  height: 100%;
  color: #454545;
  font-size: 1rem;
  font-weight: 700;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ArrowIcon = styled(ArrowIconSVG)`
  width: 1rem;
  height: 1rem;
  /* 필요에 따라 사이즈를 조절하세요 */
`

export const LearnMoreText = styled.div`
  text-align: center;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  word-wrap: break-word;
  position: absolute;
  bottom: 4rem;
`

export const BelowIcon = styled(GroupSVG)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  bottom: 1rem;
`

export const FadeInContainer = styled.div`
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
`

export const WhiteContainer = styled(FadeInContainer)`
  width: 100%;
  height: auto;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
`

export const GrayContainer = styled(FadeInContainer)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  color: white;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #3e3e3e;
  position: relative;
`

export const YouthIndependence = styled(FadeInContainer)`
  text-align: center;
  margin-top: 1rem;
  font-size: 34px;
  font-family: UhBeemysen;
  font-weight: bold;
  word-wrap: break-word;
`

export const ExtendedSupportInfo = styled(FadeInContainer)`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  word-wrap: break-word;
  line-height: 1.3rem;
  z-index: 99;
`

export const MoreIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
`
export const MoreIconSvgContainer = styled(LeaveIconSvg)`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`

export const SupportStats = styled(FadeInContainer)`
  position: absolute;
  bottom: 280px;
  left: 230px;
  transform: rotate(3deg); /* 텍스트를 3도 회전 */
  transform-origin: 0 0; /* 회전의 기준점을 왼쪽 상단으로 설정 */
  text-align: center; /* 텍스트를 중앙 정렬 */
  font-size: 14px; /* 폰트 크기를 13px로 설정 */
  font-weight: 500; /* 폰트 무게를 500으로 설정 */
  word-wrap: break-word; /* 단어가 넘치지 않도록 설정 */
  line-height: 1rem;
`

export const IndependenceEducation = styled(FadeInContainer)`
  position: absolute;
  bottom: 170px;
  left: 20px;
  transform: rotate(-10deg); /* 텍스트를 -10도 회전 */
  transform-origin: 0 0; /* 회전의 기준점을 왼쪽 상단으로 설정 */
  text-align: center; /* 텍스트를 중앙 정렬 */
  font-size: 16px; /* 폰트 크기를 16px로 설정 */
  font-weight: 500; /* 폰트 무게를 500으로 설정 */
  word-wrap: break-word; /* 긴 단어가 다음 줄로 넘어가지 않도록 설정 */
  line-height: 1.2rem;
`

export const SettlementGrant = styled(FadeInContainer)`
  position: absolute;
  bottom: 90px;
  left: 260px;
  transform: rotate(5deg); /* 텍스트를 5도 회전 */
  transform-origin: 0 0; /* 회전의 기준점을 왼쪽 상단으로 설정 */
  text-align: center; /* 텍스트를 중앙 정렬 */
  font-size: 16px; /* 폰트 크기를 16px로 설정 */
  font-weight: 500; /* 폰트 무게를 500으로 설정 */
  word-wrap: break-word; /* 긴 단어가 다음 줄로 넘어가지 않도록 설정 */
  line-height: 1.2rem;
`
