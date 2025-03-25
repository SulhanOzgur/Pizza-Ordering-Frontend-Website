import React from 'react';
import logo from '../../images/iteration-1-images/logo.svg';
import {
  SuccessPageWrapper,
  LogoWrapper,
  Logo,
  Content,
  Divider,
  OrderInfo,
  SuccessInfo,
  OrderDetails,
  OrderName,
  PizzaSize,
  PizzaCrust,
  PizzaExtraIngredients,
  OrderSummary,
  PriceRow,
  TotalAmount,
} from '../components/layout/SuccessPageLayout.js';

export default function SuccessPage({ orderData }) {
  if (!orderData) return null;

  return (
    <SuccessPageWrapper>
      <LogoWrapper>
        <Logo src={logo} alt="Teknolojik Yemekler" />
      </LogoWrapper>

      <Content>
        <OrderInfo>lezzetin yolda</OrderInfo>
        <SuccessInfo>SİPARİŞ ALINDI</SuccessInfo>
      </Content>

      <Divider />

      <OrderDetails>
        <OrderName>{orderData.name}</OrderName>
        <PizzaSize>Boyut: {orderData.size}</PizzaSize>
        <PizzaCrust>Hamur: {orderData.crust}</PizzaCrust>
        <PizzaExtraIngredients>
          Ek Malzemeler: {orderData.ingredients.join(', ')}
        </PizzaExtraIngredients>
      </OrderDetails>

      <OrderSummary>
        <PriceRow>Seçimler: {orderData.extraPrice}₺</PriceRow>
        <TotalAmount>Toplam: {orderData.totalPrice}₺</TotalAmount>
      </OrderSummary>
    </SuccessPageWrapper>
  );
}

/* import logo from '../../images/iteration-1-images/logo.svg';
import {
  SuccessPageWrapper,
  LogoWrapper,
  Logo,
  Content,
  Title,
} from '../components/layout/SuccessPageLayout.js';

export default function SuccessPage() {
  return (
    <SuccessPageWrapper>
      <LogoWrapper>
        <Logo src={logo} alt="Teknolojik Yemekler" />
      </LogoWrapper>
      <Content>
        <Title>
          TEBRİKLER!
          <br />
          SİPARİŞİNİZ ALINDI!
        </Title>
      </Content>
    </SuccessPageWrapper>
  );
} */
