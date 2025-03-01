import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";


const Container = styled.div``
const FooterContainer = styled.div``
const CopyrightWrapper = styled.div``;
const Copyright = styled.p``;
const SocialMediaWrapper = styled.div``;
const SocialMediaLogoWrapper = styled.a`
    &:hover {
        cursor: pointer;
    }
`;
export default function Footer() {
    const sizing = "w-7 h-7"
    const Social_media_logo = [<AiOutlineInstagram className={sizing}/>, /* <AiOutlineMail className={sizing}/> */]
    return (
        <Container>
            <FooterContainer className="flex justify-between items-center h-24 w-full bg-black px-5 md:px-12">
                <CopyrightWrapper className="flex">
                    <Copyright className="text-gray font-textfont text-md md:text-xl">
                        Copyright © 2024 <span className="text-white">TEDxCityUHongKong</span>
                    </Copyright>
                </CopyrightWrapper>
                { <SocialMediaWrapper className="flex justify-between items-center font-textfont text-white">
                    {Social_media_logo.map((logo, index) => (
                        <SocialMediaLogoWrapper key={index} target="_blank" href="https://www.instagram.com/tedxcityuhongkong/">
                            {logo}
                        </SocialMediaLogoWrapper>
                    ))}
                </SocialMediaWrapper> }
            </FooterContainer>
        </Container>
    )
}