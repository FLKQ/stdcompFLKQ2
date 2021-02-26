import styled from "styled-components";
import { Container } from "../globalStyles";
import { Link } from "react-router-dom";
import { BiPlayCircle } from "react-icons/bi";

export const GetStartedSection = styled.section`
  color: black;
  display: flex;
  justify-content: center;

  video {
    object-fit: cover;
    width: 100%;
    height: 93vh; //972
    position: absolute;
    z-index: -1;
    padding-bottom: 0;
  }
`;

export const GetStartedContainer = styled(Container)`
  height: 93vh; //92
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: contain;

  @media screen and (max-width: 526px) {
    height: 113vh;
  }
  @media screen and (max-width: 961px) {
    height: 113vh;
  }
  @media screen and (max-width: 1293px) {
    height: 93vh;
  }
`;

export const GetStartedTitle = styled.h1`
  color: #fff;
  font-size: 100px;
  margin-top: -100px;

  @media screen and (max-width: 1126px) {
    font-size: 60px;
  }

  @media screen and (max-width: 960px) {
    font-size: 60px;
  }

  @media screen and (max-width: 750px) {
    font-size: 50px;
  }
  
  @media screen and (max-width: 716px) {
    font-size: 50px;
  }

  @media screen and (max-width: 630px) {
    font-size: 40px;
  }

  @media screen and (max-width: 550px) {
    font-size: 60px;
    text-align: center;
  }

  @media screen and (max-width: 375px) {
    font-size: 50px;
    text-align: center;
  }

  

  
`;

export const GetStartedSubText = styled.p`
  margin-top: 8px;
  color: #fff;
  font-size: 32px;

  @media screen and (max-width: 550px) {
    margin-top: 40px;
    font-size: 25px;
    text-align: center;
  }
`;

export const GetStartedButtons = styled.ul`
  list-style: none;
  margin-top: 50px;

  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    margin-top: 100px;
  }
`;

export const GetStartedButtonItem = styled.li`
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    
  }
`;

export const GetStartedButtonLinks = styled(Link)`
  margin-right: 20px;

  @media screen and (max-width: 550px) {
    margin-bottom: 50px;
  }
`;

export const GetStartedNewButton = styled.button`
padding: ${({ insideDistance }) =>
    insideDistance ? "10px 70px" : "10px 20px 10px 20px"};
  color: ${({ colorized }) => (colorized ? "#fff" : "black")};
  background: ${({ primary }) => (primary ? "transparent" : "white")};
  border: 2px solid #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  cursor: pointer;
  outline: none;
  margin-right: ${({ leftRight }) => (leftRight ? "7px" : "")};

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#4b59f7" : "#4b59f7")};
    border: 2px solid transparent;
  }
  @media screen and (max-width:526px){
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
}
`;
