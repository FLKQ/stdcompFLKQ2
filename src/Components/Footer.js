import React from 'react';
import {FooterContainer,
        FooterSubscribeSection,
        FooterTitle,
        FooterParagraph,
        FooterFormEmail,
        FooterSubscribeButton,
        FooterTitleNavigationLink,
        FooterParagraphNavigationLink,
        FooterFormInput} from '../Components/Footer.elements';
import { Button } from '../globalStyles';
const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubscribeSection>
                    <FooterTitle>
                        Join the Adventure newsletter to receive
                        our best vacation deals
                    </FooterTitle>
                    <FooterParagraph>
                        You can unsubscribe at any time.
                    </FooterParagraph>
                    <FooterFormEmail>
                        <FooterFormInput name='email' type='email' placeholder='Your Email'/>                          
                    </FooterFormEmail>
                    <Button fontBig primary colorized insideDistance leftRight>
                        Subscribe
                    </Button>
                </FooterSubscribeSection>

            </FooterContainer>
        </>
    )
}

export default Footer
