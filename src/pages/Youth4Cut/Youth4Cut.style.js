import styled from 'styled-components'
import { ReactComponent as RestartSVG } from '../../assets/solar_restart-bold.svg'
import { ReactComponent as CameraIconSVG } from '../../assets/ph_camera-fill.svg'
import { ReactComponent as ShareIconSVG } from '../../assets/ic_baseline-share.svg'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #f8f8f8 0%, #f39db6 100%);
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
  color: #4a4141;
  font-size: 3rem;
  font-family: UhBeemysen;
  font-weight: bold;
  text-align: center;
`

export const CenteredContainer = styled.div`
  text-align: center;
`

export const TextStyleNormal = styled.span`
  font-size: 1.17rem;
  font-weight: 400;
`

export const TextStyleBold = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #333333;
  white-space: nowrap; /* 텍스트를 한 줄로 표시 */
  line-height: 1.5rem;
  word-wrap: break-word;
  display: inline; /* 인라인 요소로 설정하여 한 줄에 나란히 배치 */
`

export const LearnMoreText = styled.div`
  text-align: center;
  color: #454545;
  font-size: 1rem;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  word-wrap: break-word;
  display: inline; /* 인라인 요소로 설정하여 한 줄에 나란히 배치 */
`

export const BackgroundContainer = styled.div`
  background: #1c1c1c;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%; /* Wrapper 너비에 맞추기 */
  height: auto; /* 높이 자동 설정 */
  max-width: 19rem; /* 적절한 너비로 제한 */
  padding: 1rem; /* 내외부 여백 추가 */
  margin-top: 1rem; /* 상단에 약간의 여백 추가 */
`

export const ParticipationText = styled.div`
  width: 19rem;
  height: 200%;
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WhiteBackgroundContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto; /* 높이 자동 설정 */
  gap: 1rem;
`

export const WhiteBackgroundContainer = styled.div`
  width: 40%;
  height: 200%;
  background: #e5eff2;
  border-radius: 0.2rem;
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  justify-content: center;
  align-items: center;
`

export const WhiteParticipationText = styled.div`
  width: 100%;
  height: 100%;
  color: #454545;
  font-size: 0.9rem;
  font-weight: 700;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BlackCameraIcon = styled(CameraIconSVG)`
  width: 1rem;
  height: 1rem;
  padding-right: 0.3rem;
`

export const ShareIcon = styled(ShareIconSVG)`
  width: 1rem;
  height: 1rem;
  padding-right: 0.3rem;
`
