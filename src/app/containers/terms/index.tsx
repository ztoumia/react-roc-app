import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//import { BookCard } from "../../components/bookCard";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
//import { TopCars } from "./topCars";

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

const Content = styled.div`
  ${tw`
    max-w-screen-2xl
  `};
`;

export function Terms() {
  return (
    <PageContainer>
      <Navbar />
      <WhiteContainer>
        <Content>
        <h1>Mentions Légales</h1>
        <p>Zidea Tech s&rsquo;engage à être très vigilant sur la fiabilité de l&rsquo;information mise à la disposition des internautes qui consultent ce site. 
          Elle ne saurait en revanche être tenue pour responsable d&rsquo;erreurs, d&rsquo;omissions ou des résultats qui pourraient être obtenus par un usage 
          inapproprié de ces informations.</p>

        <h2>DROITS D&rsquo;AUTEURS</h2>
        <p>Le Code de la Propriété Intellectuelle et, plus généralement, les traités et accords internationaux comportant des dispositions relatives 
          à la protection des droits d&rsquo;auteurs, interdisent, quel que soit le procédé utilisé, intégralement ou partiellement, la représentation ou 
          la reproduction de nos pages, pour un usage autre que privé ou la modification sans l&rsquo;autorisation expresse de l&rsquo;auteur ou de ses ayants cause.</p>
        <p>Il est important de rappeler que la loi N° 98-536 du 1er juillet 1998 relative aux bases de données n&rsquo;accorde aucune exception de copie privée.</p>

        <p>Cette création est mise à disposition sous un contrat Creative Commons.</p>

        <h2>CONFIDENTIALITÉ ET RESPECT DES DONNÉES RELATIVES À LA VIE PRIVÉE</h2>
        <p>Conformément à l&rsquo;article 34 de la loi Informatique et Libertés n°78-17 du 6 janvier 1978, Zidea Tech vous rappelle que vous disposez à tout moment 
          d&rsquo;un droit d&rsquo;accès de rectification et de suppression des données nominatives vous concernant.</p>
        <p>Pour exercer ce Droit, il suffit de vous adresser à Zidea Tech.</p>
      
        </Content>
      </WhiteContainer>
      <Footer />
    </PageContainer>
  );
}
