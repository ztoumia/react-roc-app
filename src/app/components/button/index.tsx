
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface ButtonProps {
    text: any,
    url: any,
    type: "primary" | "secondary"
} 
  
const ButtonContainer = styled.a`
    ${tw`
        flex
        px-4
        py-2
        rounded
        mr-2
        my-2
    `};
    ${({ type }: any) => (type === "primary"? tw`
        text-white
        bg-primary
    ` : tw`
        text-primary
        border-solid
        border
        border-primary
    `)}
` as any;
export function Button( prop: ButtonProps)  {

    return (
      <ButtonContainer href={prop.url} type={prop.type}>
        {prop.text}
      </ButtonContainer>
    );
}