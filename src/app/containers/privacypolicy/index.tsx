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

export function PrivacyPolicy() {
  return (
    <PageContainer>
      <Navbar />
      <WhiteContainer>
        <Content className="max-w-screen-2xl">
          <h1>Politique de Confidentialité</h1>
          <p>Date de dernière mise à jour : 03/08/2023</p>
          
          <p>Zidea Tech s&rsquo;engage pleinement à respecter le Règlement général sur la protection des données (RGPD) du 27 avril 2016. 
            Dans le cadre de cette réglementation, Zidea Tech renforce sa politique de protection des données personnelles pour assurer
            une collecte et une utilisation transparentes, confidentielles et sécurisées des données de nos utilisateurs.</p>
          
          <h2>POLITIQUE DE PROTECTION DES DONNÉES PERSONNELLES À PARTIR DU 03/08/2023</h2>
          <p>Notre Politique de protection des données personnelles décrit comment Zidea Tech traite les données à caractère personnel 
            des visiteurs et utilisateurs (ci-après les « Utilisateurs ») naviguant sur notre site www.zideatech.com (ci-après le « Site »). 
            Cette politique fait partie intégrante de nos Conditions Générales d&rsquo;Utilisation.</p>
          
          <p>Zidea Tech accorde une attention constante aux données de nos Utilisateurs. Nous pouvons modifier, compléter ou mettre à jour 
            cette politique de protection des données personnelles. Nous vous invitons à consulter régulièrement la dernière version en vigueur, 
            accessible sur notre Site. En cas de modifications majeures, nous vous informerons par email ou par nos services, vous permettant 
            d&rsquo;examiner ces changements avant leur entrée en vigueur. Si vous continuez à utiliser nos services après la publication ou l&rsquo;envoi 
            d&rsquo;un avis concernant les modifications de cette politique, cela signifie que vous acceptez les mises à jour.</p>

          <h2>QUELLES DONNÉES PERSONNELLES SONT COLLECTÉES ET POUR QUELLES RAISONS ?</h2>
          <p>Lorsque vous naviguez sur notre site, vous vous inscrivez à notre newsletter, ou remplissez l&rsquo;un de nos formulaires de contact, 
            nous collectons et traitons des données à caractère personnel vous concernant, telles que votre nom et prénom.</p>

          <p>Nous pouvons également vous demander votre adresse email pour l&rsquo;envoi d&rsquo;emails d&rsquo;informations, de notifications et de newsletters.</p>

          <p>Nous collectons également le nom de votre entreprise, votre numéro de téléphone, votre adresse IP et les informations pour lesquelles 
            vous nous contactez (par exemple, besoins en développement ou conception web).</p>

          <p>Zidea Tech utilise des services d&rsquo;analyse en temps réel et d&rsquo;identification client tels que Google Analytics ou Woopra pour recueillir 
            des informations sur votre parcours de navigation. Nous utilisons ces données pour analyser les intérêts de nos 
            utilisateurs et à des fins statistiques.</p>

          <p>Lorsque vous nous fournissez vos coordonnées pour être recontactés, nous pouvons vous appeler par téléphone et vous demander des 
            informations complémentaires sur votre demande. Ces données sont utilisées pour mieux répondre à vos attentes.</p>

          <p>En résumé, nous collectons les informations que vous nous fournissez notamment lorsque :</p>

          <ul>
            <li>Vous naviguez sur notre site</li>
            <li>Vous remplissez un formulaire de contact</li>
            <li>Vous postulez à nos offres d&rsquo;emploi</li>
            <li>Vous rejoignez notre site après avoir cliqué sur un lien provenant de nos emails</li>
            <li>Vous vous inscrivez à l&rsquo;un de nos événements</li>
          </ul>

          <h2>COOKIES</h2>
          <p>Liste des cookies utilisés :</p>
          <ul>
            <li><strong>google tag manager</strong> - Utilisé afin de charger les scripts nécessaires à l&rsquo;application des choix de cookies pour l&rsquo;utilisateur</li>
          </ul>
          
          <h2>COOKIES DE PERFORMANCE</h2>
          <p>Ces cookies nous permettent de mesurer et d&rsquo;améliorer les performances de notre site Web en recueillant des informations sur les visites et les 
            sources de trafic. Ils nous aident à identifier les pages les plus visitées et à évaluer comment les visiteurs naviguent sur le site. 
            Toutes les informations collectées par ces cookies sont agrégées et anonymisées.</p>
          <h2>COOKIES POUR UNE PUBLICITÉ CIBLÉE</h2>
          <p>Ces cookies peuvent être mis en place par nos partenaires publicitaires pour établir un profil de vos intérêts et vous proposer des 
            publicités pertinentes sur d&rsquo;autres sites Web. Ils ne stockent pas directement de données personnelles, mais sont basés sur l&rsquo;identification 
            unique de votre navigateur et de votre appareil Internet.</p>
          <h2>VOS DONNÉES SONT-ELLES PARTAGÉES AVEC DES TIERS ?</h2>
          <p>Les données personnelles vous concernant collectées sur notre site sont destinées pour la propre utilisation de Zidea Tech et peuvent 
            être transmises aux sociétés sous-traitantes auxquelles Zidea Tech fait appel dans le cadre de l’exécution de ses services. Zidea Tech 
            ne vend ni ne loue vos données personnelles à des tiers à des fins de marketing, en aucun cas.</p>
          <ul>
            <li>Lorsque nous faisons appel à des fournisseurs de moteurs de recherche et de solutions analytiques pour améliorer et optimiser notre site;</li>
            <li>Droit de mise à jour et de complétude</li>
            <li>Droit de verrouillage ou de suppression</li>
            <li>Droit de retirer votre consentement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d&rsquo;opposition au traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
          
          <h2>VOS DROITS</h2>
          <p>Vous disposez des droits suivants concernant vos données personnelles :</p>
          <ul>
            <li>Droit d&rsquo;accès et de rectification</li>
            <li>Droit de mise à jour et de complétude</li>
            <li>Droit de verrouillage ou de suppression</li>
            <li>Droit de retirer votre consentement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d&rsquo;opposition au traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
          
          <p>Pour exercer vos droits ou pour toute question relative à vos données personnelles, veuillez nous contacter à info@zideatch.com</p>

          
          <h2>COMMENT NOUS CONTACTER</h2>
          <p>Si vous avez des questions, des réclamations ou des recommandations concernant notre Politique de protection des données personnelles, 
            veuillez nous contacter info@zideatch.com</p>
          
          <p>Nous prenons en charge les requêtes concernant vos données personnelles dans les 30 jours. Veuillez fournir une photocopie de votre 
            pièce d&rsquo;identité pour vérifier votre identité.</p>
          
          <h2>RÉCLAMATIONS</h2>
          <p>Si vous n&rsquo;êtes pas satisfait de la manière dont nous traitons vos données personnelles, vous avez le droit de déposer une réclamation 
            auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr:fr/plaintes)</p>
          
          <p>Merci d&rsquo;avoir pris le temps de lire notre Politique de confidentialité.</p>
        </Content>
      </WhiteContainer>
      <Footer />
    </PageContainer>
  );
}
