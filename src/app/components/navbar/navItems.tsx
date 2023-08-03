import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const LinkContainer = styled.a <{ menu?: any }>`
  ${tw`
    flex
    text-sm
    md:text-base
    font-medium
    text-black
    no-underline
  `};

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
        text-white
        text-xl
      `};
    `};
`;

const NavItem = styled.li <{ menu?: any }>`
  ${tw`
    flex
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
        mb-3
        hover:text-white
      `};
    `};
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <LinkContainer href="/" menu>Accueil</LinkContainer>
          </NavItem>
          <NavItem menu>
            <LinkContainer href="#services" menu>Services</LinkContainer>
          </NavItem>
          <NavItem menu>
            <LinkContainer href="#about-us" menu>À propos</LinkContainer>
          </NavItem>
          <NavItem menu>
            <LinkContainer href="/contact" menu>Contactez-nous</LinkContainer>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <LinkContainer href="/">Accueil</LinkContainer>
      </NavItem>
      <NavItem>
        <LinkContainer href="#services">Services</LinkContainer>
      </NavItem>
      <NavItem>
        <LinkContainer href="#about-us">À propos</LinkContainer>
      </NavItem>
      <NavItem>
        <LinkContainer href="/contact">Contactez-nous</LinkContainer>
      </NavItem>
    </ListContainer>
  );
}
