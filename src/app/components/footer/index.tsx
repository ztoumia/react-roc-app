import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  ${tw`
    flex
    flex-col
    min-w-full
    bg-gray-900
    pt-10
    md:pt-16
    justify-center
    items-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    justify-center
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
  `};
`;

const AboutText = styled.p`
  ${tw`
    text-whitetext
    text-justify
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `};
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
    text-sm
    text-gray-500
  `};

  & > a {
    ${tw`
      text-lg
      text-whitetext
      transition-all
      hover:text-gray-200
    `};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-whitetext
    mb-3
  `};
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
        <HeaderTitle><Logo color="white" bgColor="white" /></HeaderTitle>
          <AboutText>
            ZIDEA TECH est une Entreprise de Services du Numérique, établie en Île-de-France, 
            spécialisée dans l'accompagnement des entreprises dans le processus de transformation numérique.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Nos liens</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="/">Accueil</a>
            </ListItem>
            <ListItem>
              <a href="/#services">Services</a>
            </ListItem>
            <ListItem>
              <a href="/#about-us">À propos</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Autres liens</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="/contact">Contactez-nous</a>
            </ListItem>
            <ListItem>
              <a href="/privacy-policy">Politique de confidentialité</a>
            </ListItem>
            <ListItem>
              <a href="/legal-notice-and-terms-of-use">Mentions légales</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Crédit photo</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="https://www.freepik.com/free-vector/flat-construction-template_1584422.htm#query=under%20construction&position=11&from_view=search&track=ais">Par Freepik</a>
            </ListItem>
            <ListItem>
              <a href="https://www.freepik.com/free-vector/it-specialist-composition-with-flat-view-hipster-programmers-workplace-icons-cycle-representing-work-pipeline-vector-illustration_26766321.htm#page=3&query=cod%C3%A9&position=1&from_view=search&track=sph">Par Macrovector</a> sur Freepik
            </ListItem>
            <ListItem>
              <a href="https://www.freepik.com/free-vector/programmer-concept-illustration_8775515.htm#from_view=detail_author">Par Storyset</a> sur  Freepik
            </ListItem>
          </LinksList>
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  );
}
