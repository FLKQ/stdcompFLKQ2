import styled from 'styled-components';
import { Container } from '../globalStyles'
import { Link } from 'react-router-dom';  
import { BiPlayCircle } from "react-icons/bi";

export const GetStartedSection = styled.section`
 color: black;
 display: flex;
 justify-content: center;


 video {
  object-fit: cover;
  width: 100%;
  height: 1010px; //972
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


`;

export const GetStartedTitle = styled.h1`
    color: #fff;
    font-size: 100px;
    margin-top: -100px;
`;

export const GetStartedSubText = styled.p`
margin-top: 8px;
color: #fff;
font-size: 32px;


`;

export const GetStartedButtons = styled.ul`
list-style: none;
margin-top: 50px;
`;

export const GetStartedButtonItem = styled.li`

`;

export const GetStartedButtonLinks = styled(Link)`
margin-right: 20px;
`;