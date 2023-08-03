import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import constructImg from "../../../assets/images/consturct.svg";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    items-center
  `}
`;
const WhiteContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    bg-wback
  `};
`;


const ImageCmponent = styled.img`
${tw`
  max-h-screen
`};
`;

export function UnderConstruction() {
  return (
    <PageContainer>
      <Navbar />
      <WhiteContainer>
        <ImageCmponent src={constructImg} alt="This page is currently under construction. Check back later!" />
      </WhiteContainer>
      <Footer />
    </PageContainer>
  );
}
