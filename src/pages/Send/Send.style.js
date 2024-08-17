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
  white-space: nowrap;
  line-height: 1.5rem;
  word-wrap: break-word;
  display: inline;
  color: #333333;
`;

export const LearnMoreText = styled.div`
  text-align: center;
  color: #454545;
  font-size: 1rem;
  font-family: "Pretendard Variable", sans-serif;
  font-weight: 500;
  word-wrap: break-word;

  display: inline;
`;

export const LetterStyle = styled(LetterFrame)`
  width: 19rem;
  height: 19rem;
  position: relative;
`;

export const LetterInput = styled.textarea`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 150px;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  resize: none;
  z-index: 100;
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
  fill: ${(props) => (props.isRecording ? "red" : "black")};
  transition: fill 0.3s ease;
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
  cursor: pointer;
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

export const ModalContainer = styled.div`
  width: 20rem;
  height: 10rem;
  border: 1px solid #636363; /* 경계선 스타일 지정 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationText = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  color: black;
  font-size: 0.9rem; /* 폰트 크기 px 단위로 지정 */
  font-weight: 600; /* 폰트 두께 */
  word-wrap: break-word;
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  font-size: 1rem; /* px 단위 추가 */
  font-weight: 200;
  word-wrap: break-word;
`;

export const StyledDiv = styled.div`
  width: 100%; // 너비를 부모 컨테이너의 100%로 설정
  height: 1px; // 선의 두께를 1px로 설정
  background: #c0c0c0; // 배경색을 이용하여 선 색상 지정
`;

export const ConfirmationText = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  color: black;
  font-size: 0.9rem; /* 폰트 크기 px 단위로 지정 */
  font-family: "Pretendard Variable", sans-serif; /* 폰트 패밀리 백업 추가 */
  font-weight: 600;
  word-wrap: break-word;
  cursor: pointer;
`;
