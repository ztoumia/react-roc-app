import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import workImg from "../../../assets/images/performance.svg";
import { Marginer } from "../../components/marginer";



const AboutUsContainer = styled.div`
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

export function AboutUs()  {
  return (
    <AboutUsContainer>
      <ImageContainer>
        <ImageCmponent src={workImg} />
      </ImageContainer>
      <InfoContainer>
        <Marginer direction="vertical" margin="2em" />
        <Title>Notre Expertise au Service de Votre Réussite</Title>
        <InfoText>
            <ul>
              <li>Spécialisés dans les Produits Numériques Sur Mesure : De la conception à la réalisation, nous donnons vie à vos idées avec expertise.</li>
              <li>Solutions Complètes pour Votre Présence en Ligne : Modernisation de sites, applications web, et intégration sur mesure.</li>
              <li>De la Vision à la Réalité : Transformons vos concepts en succès numériques tangibles.</li>
            </ul>            
        </InfoText>
        <Marginer direction="vertical" margin="2em" />
      </InfoContainer>
    </AboutUsContainer>
);
}