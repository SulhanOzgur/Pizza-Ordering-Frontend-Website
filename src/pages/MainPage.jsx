import React from 'react';
import logo from '../../images/iteration-1-images/logo.svg';
import CardSection from '../components/CardSection';
import CategoryNav from '../components/CategoryNav';
import BestMenus from '../components/BestMenus';
import MenuItemsGrid from '../components/MenuItemsGrid';
import Footer from '../components/Footer';

import {
  HeroSection,
  HeroContent,
  Logo,
  Title,
  OrderButton,
  Advice,
  MainPageAll,
} from '../components/layout/MainPageLayout';

export default function MainPage() {
  return (
    <>
      <MainPageAll>
        <HeroSection>
          <HeroContent>
            <Logo src={logo} alt="Teknolojik Yemekler" />
            <Advice>Fırsatı Kaçırma</Advice>
            <Title>
              KOD ACIKTIRIR,
              <br />
              PİZZA DOYURUR
            </Title>
            <OrderButton to="/order">ACIKTIM</OrderButton>
          </HeroContent>
        </HeroSection>

        <CategoryNav />

        <CardSection />

        <BestMenus />

        <MenuItemsGrid />

        <Footer />
      </MainPageAll>
    </>
  );
}

/* import React from 'react';

import logo from '../../images/iteration-1-images/logo.svg';

import {
  MainContainer,
  Logo,
  Title,
  OrderButton,
} from '../components/layout/MainPageLayout';

export default function MainPage() {
  return (
    <MainContainer>
      <Logo src={logo} alt="Teknolojik Yemekler" />
      <Title>
        KOD ACIKTIRIR,
        <br />
        PİZZA DOYURUR
      </Title>
      <OrderButton to="/order">ACIKTIM</OrderButton>
    </MainContainer>
  );
} */
