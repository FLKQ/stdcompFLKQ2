import { Container } from "../globalStyles";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardSectionCards = styled.div`
padding: 4rem;
background: #fff;
`;

export const CardSectionTitle = styled.h1`
font-size: 34px;
text-align: center;
margin-top: 20px;
margin-bottom: 50px;
`;

export const CardsSectionContainer = styled(Container)`
display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;

${Container}
`;

export const CardsSectionWrapper = styled.div`
position: relative;
margin: 50px 0 45px;
`;

export const CardItemsTop = styled.ul`
margin-bottom: 24px;  
img{
    
}    
`;

export const CardItem = styled.li`
display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
`;

export const CardItemsBottom = styled.ul`
 margin-bottom: 24px;   
       
img{
    
}
`;

export const ImgWrapper = styled.figure`

`;

export const Img = styled.img`


`;

export const ImgDescription = styled.p`

`;

export const CardExtraTitle = styled.h1`

`;