import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import LogoWhiteImg from "../../../assets/images/invention-idea-wh.svg";
import LogoImg from "../../../assets/images/invention-idea.svg";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.a`
  ${tw`
    flex
    items-center
  `};
`;

const LogoText = styled.span`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    `};
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-primary`)}
` as any;
const LogoTextSecond = styled.span`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-gray-500
    m-1
    `}
  `;

const Image = styled.img`
  width: auto;
  height: 100%;
  ${tw`
    h-8
    md:h-9
  `};
`;

export function Logo(props: ILogoProps) {
  const { color, bgColor } = props;

  return (
    <LogoContainer href="/">
      <LogoText color={color || "dark"}>ZIDEA</LogoText>
      <Image src={bgColor === "white" ? LogoWhiteImg : LogoImg} alt="Logo">
      </Image>
      <LogoTextSecond>TECH</LogoTextSecond>
    </LogoContainer>
  );
}
