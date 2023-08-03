import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import heroImg from "../../../assets/images/26766321_2202.q802.002.S.m009.c10.it specialist illustration flat.svg";
import { Button } from "../button";
import { Marginer } from "../marginer";

const HeroBannerContainer = styled.div`
  ${tw`
    max-w-screen-2xl
    flex
    flex-wrap
    w-full
    items-center
    justify-center
    pr-3
    pl-3
    md:pl-0
    md:pr-0
  `};
`;

const InfoContainer = styled.div`
  ${tw`
    lg:w-2/5
    flex
    flex-col
    order-last
    lg:order-first
  `};
`;

const Title = styled.h1`
  ${tw`
    text-4xl
    lg:text-6xl
    md:m-2
  `};
`;

const InfoText = styled.p`
  ${tw`
    font-normal
    text-justify
    md:m-2
  `};
`;
const ImageContainer = styled.div`
${tw`
  lg:w-3/5
  flex
  order-first
  lg:order-last
  w-full
`};
`;

const ImageCmponent = styled.img`
${tw`
  w-full
`};
`;
const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    md:m-2
  `};
`;
const LogoText = styled.span`
${tw`
    font-bold
    text-primary
  `};
`;

export function HeroBanner()  {
  return (
    <HeroBannerContainer>
      <InfoContainer>
        <Marginer direction="vertical" margin="2em" />
        <Title>Bienvenu chez <LogoText>ZIDEA</LogoText> TECH</Title>
        <InfoText>
          Développons ensemble l'avenir numérique de votre entreprise.
        </InfoText>
        <ButtonsContainer>
          <Button text="Découvrez nos services" url="#" type="primary"/>
          <Button text="Contactez-nous" url="#" type="secondary"/>
        </ButtonsContainer>
        <Marginer direction="vertical" margin="2em" />
      </InfoContainer>
      <ImageContainer>
        <ImageCmponent src={heroImg} />
      </ImageContainer>
    </HeroBannerContainer>
);
}