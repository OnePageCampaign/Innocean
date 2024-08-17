import styled from "styled-components";
import { ReactComponent as EmerIconSVG } from "../../assets/캐릭터.svg";
import { ReactComponent as ArrowIconSVG } from "../../assets/white_material-symbols_arrow-back-ios-new-rounded.svg";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #f8f8f8 0%, #a1ffb6 100%);
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
  white-space: nowrap; /* 텍스트를 한 줄로 표시 */
`;

export const CenteredContainer = styled.div`
  text-align: center;
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

export const MyDiv = styled.div`
  background: #e5fff6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 19rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CharacterIcon = styled(EmerIconSVG)`
  width: 13em;
  height: 10rem;
  position: absolute; /* 절대 위치로 설정 */
  top: 40%; /* MyDiv의 50% 지점에 위치 */
  left: 50%; /* MyDiv의 50% 지점에 위치 */
  transform: translate(-50%, -50%); /* 정확히 중앙으로 이동 */
`;

export const CenteredContainerQuestion = styled.div`
  width: 130%;
  height: 100%;
  text-align: center;
  color: #4a4141;
  font-size: 2rem;
  font-family: "UhBee mysen";
  font-weight: 700;
  word-wrap: break-word;
  position: absolute; /* 절대 위치로 설정 */
  top: calc(50% + 14rem); /* MyDiv의 50% 지점에서 아래로 5rem 이동 */
  left: 50%;
  transform: translate(-50%, -50%);
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
