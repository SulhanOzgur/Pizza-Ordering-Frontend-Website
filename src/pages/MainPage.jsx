import React from 'react';

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
