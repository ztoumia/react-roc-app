import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navItems";
import { useScrollPosition } from "../../hooks";
interface NavbarProps {
  isScrolled: any;
}
const NavbarContainer = styled.div`
  ${tw`
    w-full
    sticky
    top-0
    z-30
    transition-all
    duration-300
  `};
  ${({ isScrolled }: any) => (isScrolled ? tw`shadow-lg` : "")}
` as any;
const NavbarRow = styled.div`
  min-height: ${({ isScrolled }:any) => (isScrolled ? "70px" : "86px")};
  ${tw`
    flex
    flex-row
    items-center
    justify-between
    transition-all
    duration-300
  `};
  
  ${({ isScrolled }: any) => (isScrolled ? tw`
    bg-white
    lg:pl-8
    lg:pr-8
  ` : tw`
    bg-secondary
    pl-4
    lg:pt-2
    lg:pl-12
    lg:pr-12
  `)}
` as any;
const LogoContainer = styled.div``;

export function Navbar() {
  const scrollPositon = useScrollPosition();
  return (
    <NavbarContainer isScrolled={scrollPositon}>
      <NavbarRow isScrolled={scrollPositon}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <NavItems />
      </NavbarRow>
    </NavbarContainer>
  );
}
