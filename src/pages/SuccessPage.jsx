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
  SummaryTitle,
  PriceRow,
  TotalAmount,
  ResponseInfo,
  ServerText,
  PizzaDetailLine,
  DetailLabel,
  DetailValue,
  PriceSummaryTitle,
  DetailRow,
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

        <DetailRow>
          <DetailLabel>Boyut:</DetailLabel>
          <DetailValue>{orderData.size}</DetailValue>
        </DetailRow>

        <DetailRow>
          <DetailLabel>Hamur:</DetailLabel>
          <DetailValue>{orderData.crust}</DetailValue>
        </DetailRow>

        <DetailRow>
          <DetailLabel>Ek Malzemeler:</DetailLabel>
          <DetailValue>{orderData.ingredients.join(', ')}</DetailValue>
        </DetailRow>
      </OrderDetails>

      <OrderSummary>
        <PriceSummaryTitle>Sipariş Toplamı</PriceSummaryTitle>
        <PriceRow>
          <span>Seçimler</span>
          <span>{orderData.extraPrice}₺</span>
        </PriceRow>
        <TotalAmount>
          <span>Toplam</span>
          <span>{orderData.totalPrice}₺</span>
        </TotalAmount>
      </OrderSummary>

      {orderData.response && (
        <ResponseInfo>
          <ServerText>Sipariş ID: {orderData.response.id}</ServerText>
          <ServerText>
            Sipariş Tarihi: {orderData.response.createdAt}
          </ServerText>
        </ResponseInfo>
      )}
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
