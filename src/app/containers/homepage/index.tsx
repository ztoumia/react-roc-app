import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//import { BookCard } from "../../components/bookCard";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { Services } from "./services";
//import { TopCars } from "./topCars";
import { HeroBanner } from "../../components/herobanner";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    items-center
  `}
`;
const DarckContainer = styled.div`
  ${tw`
    w-full
    lg:h-screen
    flex
    justify-center
    items-center
    bg-dback
  `};
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

export function HomePage() {
  return (
    <PageContainer id="top">
      <Navbar />
      <DarckContainer>
        <HeroBanner />
      </DarckContainer>
      <WhiteContainer id="services">
        <Services/>
      </WhiteContainer>
      <DarckContainer id="about-us">
        <AboutUs />
      </DarckContainer>
      <Footer />
    </PageContainer>
  );
}
