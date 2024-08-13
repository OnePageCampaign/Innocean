import styled from 'styled-components'
import { ReactComponent as RestartSVG } from '../../assets/solar_restart-bold.svg'
import { ReactComponent as ArrowIconSVG } from '../../assets/white_material-symbols_arrow-back-ios-new-rounded.svg'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #f8f8f8 0%, #fdffa1 100%);
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
  font-size: 1.17rem;
  font-weight: 700;
  color: #333333;
  white-space: nowrap; /* 텍스트를 한 줄로 표시 */
  line-height: 1.5rem;
  word-wrap: break-word;
  display: inline; /* 인라인 요소로 설정하여 한 줄에 나란히 배치 */
  color: #333333;
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

export const BelowIcon = styled(RestartSVG)`
  width: 1rem;
  height: 1rem;
`

export const BackgroundContainer = styled.div`
  width: 226px;
  height: 75px;
  background: #1c1c1c;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ParticipationText = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ArrowIcon = styled(ArrowIconSVG)`
  width: 1rem;
  height: 1rem;
`
