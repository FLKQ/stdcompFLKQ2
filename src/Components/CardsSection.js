import React from 'react';

import {CardSectionCards, CardsSectionContainer, CardsSectionWrapper, CardItemsTop,  CardItemsBottom, CardSectionTitle, CardItem
, ImgWrapper, Img, ImgDescription, CardExtraTitle} from './CardsSection.elements';
import Mountains from '../../src/images/1.jpg';
import Lightning from '../../src/images/2.jpg';
import Medusa from '../../src/images/3.jpg';
import Watch from '../../src/images/4.jpg';
import Tokyo from '../../src/images/5.jpg';



function CardsSection (props)  {
    return (
        <CardSectionCards>
            <CardSectionTitle>Check out these EPIC Destinations!</CardSectionTitle>
            <CardsSectionContainer>
                <CardsSectionWrapper>
                    <CardItemsTop>
                        <CardItem>
                            <ImgWrapper>
                                <Img src={Mountains}/>  
                                <ImgDescription>
                                    Adventure
                                </ImgDescription>                            
                            </ImgWrapper>
                            <CardExtraTitle>
                                fsdfjsdfsdafjsdjfksdflkjsdlfsd;lfsdflsdakfsdafsda;fsdlfs;k
                            </CardExtraTitle>
                        </CardItem>
                        <CardItem>
                            <ImgWrapper>
                                <Img src={Lightning}/>  
                                <ImgDescription>
                                    Adventure
                                </ImgDescription>                            
                            </ImgWrapper>
                            <CardExtraTitle>
                                fsdfjsdfsdafjsdjfksdflkjsdlfsd;lfsdflsdakfsdafsda;fsdlfs;k
                            </CardExtraTitle>
                        </CardItem>
                    </CardItemsTop>
                    <CardItemsBottom>
                    <CardItem>
                            <ImgWrapper>
                                <Img src={Medusa}/>  
                                <ImgDescription>
                                    Adventure
                                </ImgDescription>                            
                            </ImgWrapper>
                            <CardExtraTitle>
                                fsdfjsdfsdafjsdjfksdflkjsdlfsd;lfsdflsdakfsdafsda;fsdlfs;k
                            </CardExtraTitle>
                        </CardItem>
                        <CardItem>
                            <ImgWrapper>
                                <Img src={Watch}/>  
                                <ImgDescription>
                                    Adventure
                                </ImgDescription>                            
                            </ImgWrapper>
                            <CardExtraTitle>
                                fsdfjsdfsdafjsdjfksdflkjsdlfsd;lfsdflsdakfsdafsda;fsdlfs;k
                            </CardExtraTitle>
                        </CardItem>
                        <CardItem>
                            <ImgWrapper>
                                <Img src={Tokyo}/>  
                                <ImgDescription>
                                    Adventure
                                </ImgDescription>                            
                            </ImgWrapper>
                            <CardExtraTitle>
                                fsdfjsdfsdafjsdjfksdflkjsdlfsd;lfsdflsdakfsdafsda;fsdlfs;k
                            </CardExtraTitle>
                        </CardItem>
                    </CardItemsBottom>                     
                </CardsSectionWrapper>
            </CardsSectionContainer>
        </CardSectionCards>
    );
}

export default CardsSection
