import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Box = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-top: 16px;
  text-align: center;
  flex: 1;
`;

const Title = styled.h5`
  font-weight: bold;
  margin-bottom: 12px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
`;

const Label = styled.span`
  color: ${(props) => (props.variant === 'danger' ? '#CE2829' : '#5F5F5F')};
  font-weight: ${(props) => (props.variant === 'danger' ? 'bold' : 'bold')};
`;

const Value = styled.span`
  color: ${(props) => (props.variant === 'danger' ? '#CE2829' : '#5F5F5F')};
  font-weight: ${(props) => (props.variant === 'danger' ? 'bold' : 'bold')};
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
`;

export default function PriceSummaryBox({ basePrice, extraCount, count }) {
  const numericBase = parseFloat(basePrice);
  const extraPrice = extraCount * 5;
  const total = (numericBase + extraPrice) * count;
  const history = useHistory();

  function handleOrderClick() {
    history.push('/success');
  }

  return (
    <Box>
      <Title>Sipariş Toplamı</Title>

      <Row>
        <Label>Seçimler</Label>
        <Value>{extraPrice.toFixed(2)}₺</Value>
      </Row>

      <Row>
        <Label variant="danger">Toplam</Label>
        <Value variant="danger">{total.toFixed(2)}₺</Value>
      </Row>

      <OrderButton onClick={handleOrderClick}>SİPARİŞ VER</OrderButton>
    </Box>
  );
}

/*
import { useNavigate } from 'react-router-dom';

export default function PriceSummaryBox({ basePrice, extraCount, count }) {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    // burada başka işlemler yapılabilir
    navigate('/success');
  };

  ...
  return (
    <Box>
      ...
      <OrderButton onClick={handleOrderClick}>SİPARİŞ VER</OrderButton>
    </Box>
  );
}


import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-top: 24px;
  text-align: center;
`;

const Title = styled.h5`
  font-weight: bold;
  margin-bottom: 12px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
`;

const Label = styled.span`
  color: #292929;
`;

const Value = styled.span`
  color: #292929;
`;

const TotalValue = styled(Value)`
  color: #ce2829;
  font-weight: bold;
`;

const Button = styled.button`
  margin-top: 16px;
  width: 100%;
  padding: 10px;
  background-color: #ffc107;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;

export default function PriceSummaryBox({ basePrice, extraCount, count }) {
  const numericBase = parseFloat(basePrice);
  const extraPrice = extraCount * 5;
  const total = (numericBase + extraPrice) * count;

  return (
    <Box>
      <Title>Sipariş Toplamı</Title>

      <Row>
        <Label>Seçimler</Label>
        <Value>{extraPrice.toFixed(2)}₺</Value>
      </Row>

      <Row>
        <Label>Toplam</Label>
        <TotalValue>{total.toFixed(2)}₺</TotalValue>
      </Row>

      <Button>SİPARİŞ VER</Button>
    </Box>
  );
}*/
