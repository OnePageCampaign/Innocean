import styled from "styled-components";
import { ReactComponent as ArrowIconSVG } from "../../assets/material-symbols_arrow-back-ios-new-rounded.svg";
import { ReactComponent as GroupSVG } from "../../assets/Group.svg";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
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
  color: white;
  font-size: 3rem;
  font-family: UhBeemysen;
  font-weight: bold;
  text-align: center;
`;

export const CenteredContainer = styled.div`
  text-align: center;
`;

export const TextStyleNormal = styled.span`
  color: white;
  font-size: 1.17rem;
  font-weight: 400;
  line-height: 1.5rem;
  word-wrap: break-word;
  display: block;
`;

export const TextStyleBold = styled.span`
  font-weight: 700;
`;

export const BackgroundContainer = styled.div`
  width: 77%;
  height: 7%;
  background: #e5eff2;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
`;

export const ArrowIcon = styled(ArrowIconSVG)`
  width: 1rem;
  height: 1rem;
  /* 필요에 따라 사이즈를 조절하세요 */
`;

export const LearnMoreText = styled.div`
  text-align: center;
  color: white;
  font-size: 1rem;
  font-family: "Pretendard Variable", sans-serif;
  font-weight: 500;
  word-wrap: break-word;
  position: absolute;
  bottom: 4rem;
`;

export const BelowIcon = styled(GroupSVG)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  bottom: 1rem;
`;
