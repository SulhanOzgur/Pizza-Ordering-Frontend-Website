import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: #faf7f2;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-top: 16px;
  text-align: center;
  flex: 1;

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 8px;
  }
`;

const Title = styled.h5`
  font-weight: bold;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 4px 0;
  }
`;

const Label = styled.span`
  color: ${(props) => (props.variant === 'danger' ? '#CE2829' : '#5F5F5F')};
  font-weight: ${(props) => (props.variant === 'danger' ? 'bold' : 'bold')};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Value = styled.span`
  color: ${(props) => (props.variant === 'danger' ? '#CE2829' : '#5F5F5F')};
  font-weight: ${(props) => (props.variant === 'danger' ? 'bold' : 'bold')};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const OrderButton = styled.button`
  margin-top: 16px;
  width: 100%;
  padding: 12px;
  background-color: #fdc913;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`;

export default function PriceSummaryBox({
  extraPrice,
  totalPrice,
  formValid,
  onOrderClick,
}) {
  return (
    <Box>
      <Title>Sipariş Toplamı</Title>

      <Row>
        <Label>Seçimler</Label>
        <Value>{extraPrice.toFixed(2)}₺</Value>
      </Row>

      <Row>
        <Label variant="danger">Toplam</Label>
        <Value variant="danger">{totalPrice.toFixed(2)}₺</Value>
      </Row>

      <OrderButton onClick={onOrderClick} disabled={!formValid}>
        SİPARİŞ VER
      </OrderButton>
    </Box>
  );
}

/* import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-top: 16px;
  text-align: center;
  flex: 1;

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 8px;
  }
`;

const Title = styled.h5`
  font-weight: bold;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 4px 0;
  }
`;

const Label = styled.span`
  color: ${(props) => (props.variant === 'danger' ? '#CE2829' : '#5F5F5F')};
  font-weight: ${(props) => (props.variant === 'danger' ? 'bold' : 'bold')};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Value = styled.span`
  color: ${(props) => (props.variant === 'danger' ? '#CE2829' : '#5F5F5F')};
  font-weight: ${(props) => (props.variant === 'danger' ? 'bold' : 'bold')};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const OrderButton = styled.button`
  margin-top: 16px;
  width: 100%;
  padding: 12px;
  background-color: #fdc913;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`;

export default function PriceSummaryBox({
  extraPrice,
  totalPrice,
  formValid,
  onOrderClick,
}) {
  return (
    <Box>
      <Title>Sipariş Toplamı</Title>

      <Row>
        <Label>Seçimler</Label>
        <Value>{extraPrice.toFixed(2)}₺</Value>
      </Row>

      <Row>
        <Label variant="danger">Toplam</Label>
        <Value variant="danger">{totalPrice.toFixed(2)}₺</Value>
      </Row>

      <OrderButton onClick={onOrderClick} disabled={!formValid}>
        SİPARİŞ VER
      </OrderButton>
    </Box>
  );
} */
