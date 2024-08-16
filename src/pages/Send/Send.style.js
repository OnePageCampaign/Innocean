import styled from "styled-components";
import { ReactComponent as RestartSVG } from "../../assets/solar_restart-bold.svg";
import { ReactComponent as ArrowIconSVG } from "../../assets/white_material-symbols_arrow-back-ios-new-rounded.svg";
import { ReactComponent as RecordIconBeforeStartSVG } from "../../assets/ph_record-fill.svg";
import { ReactComponent as LetterFrame } from "../../assets/편지지1.svg";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #f8f8f8 0%, #fdffa1 100%);
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100vh;
  max-width: 400px;
  box-sizing: border-box;
`;

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
`;

export const CenteredContainer = styled.div`
  text-align: center;
`;

export const TextStyleNormal = styled.span`
  font-size: 1.17rem;
  font-weight: 400;
`;

export const TextStyleBold = styled.span`
  font-size: 1.17rem;
  font-weight: 700;
  color: #333333;
  white-space: nowrap; /* 텍스트를 한 줄로 표시 */
  line-height: 1.5rem;
  word-wrap: break-word;
  display: inline; /* 인라인 요소로 설정하여 한 줄에 나란히 배치 */
  color: #333333;
`;

export const LearnMoreText = styled.div`
  text-align: center;
  color: #454545;
  font-size: 1rem;
  font-family: "Pretendard Variable", sans-serif;
  font-weight: 500;
  word-wrap: break-word;

  display: inline; /* 인라인 요소로 설정하여 한 줄에 나란히 배치 */
`;

export const LetterStyle = styled(LetterFrame)`
  width: 19rem;
  height: 19rem;
  position: relative; // 포지셔닝 기준 설정
  z-index: 0;
`;

export const LetterInput = styled.textarea`
  position: absolute; // 절대 위치 사용
  top: 50%; // 상위 요소의 중앙에 위치
  left: 50%;
  transform: translate(-50%, -50%); // 정확한 중앙 정렬을 위해
  width: 80%; // 입력 필드의 너비
  height: 150px; // 입력 필드의 높이
  padding: 0.5rem; // 안쪽 여백
  border-radius: 10px; // 테두리 둥글게 처리
  border: 1px solid #ccc; // 테두리 색상 및 두께
  background-color: rgba(255, 255, 255, 0.8); // 배경색과 투명도 설정
  font-size: 1rem; // 폰트 크기
  resize: none; // 크기 조절 비활성화
  z-index: 10;
  cursor: pointer;
`;

export const RecordBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RecordIconBeforeStart = styled(RecordIconBeforeStartSVG)`
  width: 2rem;
  height: 2rem;
`;

export const BelowIcon = styled(RestartSVG)`
  width: 1rem;
  height: 1rem;
`;

export const BackgroundContainer = styled.div`
  width: 226px;
  height: 50px;
  background: #1c1c1c;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
`;

export const ArrowIcon = styled(ArrowIconSVG)`
  width: 1rem;
  height: 1rem;
`;
