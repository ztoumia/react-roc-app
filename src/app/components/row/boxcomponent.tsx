import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const BoxContainer = styled.div`
  ${tw`
    w-full
    h-full
    items-center
    bg-white
    block
    transform 
    group-hover:bg-wback
    group-hover:shadow-lg
    group-hover:scale-105 transition-all
    border border-black border-solid
  `};
`;

const BoxIcon = styled.img`
  ${tw`
    flex
    w-[320px]
    text-3xl
  `};
`;

const BoxTitle = styled.h3`
  ${tw`
    font-bold
    text-2xl
    leading-4
  `};
`;

const BoxDescription = styled.p`
  ${tw`
    text-xs
    md:text-sm
  `};
`;

const CardImage = styled.div`
  ${tw`
    bg-blue-200
    flex
    justify-center
  `};
`;

const CardContent = styled.div`
  ${tw`
    p-6
  `};
`;

export interface Box {
    icon: string;
    title: string;
    description: string;
}

export function BoxComponent({ icon, title, description }: Box) {
  return (
    <div className="group">
      <BoxContainer>
        <CardImage>
          <BoxIcon src={icon} />
        </CardImage>
        <CardContent>
          <BoxTitle>{title}</BoxTitle>
          <BoxDescription>{description}</BoxDescription>
        </CardContent>
      </BoxContainer>
    </div>
  );
}