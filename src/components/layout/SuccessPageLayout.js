/*SuccessPage */

import styled from 'styled-components';

export const SuccessPageWrapper = styled.div`
  background-color: #ce2829;
  min-height: 100vh;
  width: 100%;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  width: 220px;

  @media (max-width: 768px) {
    width: 160px;
  }
`;

export const Content = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const OrderInfo = styled.p`
  color: #fdc913;
  font-size: 1.3rem;
  font-family: 'Satisfy', cursive;
  margin: 0;
`;

export const SuccessInfo = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin-top: 0.5rem;
`;

export const Divider = styled.hr`
  width: 60%;
  margin: 2rem 0;
  border: 0;
  border-top: 1px solid white;
`;

export const OrderDetails = styled.section`
  text-align: center;
  margin-bottom: 2rem;
`;

export const OrderName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
`;

export const PizzaSize = styled.p`
  font-size: 0.95rem;
  margin: 0.2rem 0;
`;

export const PizzaCrust = styled.p`
  font-size: 0.95rem;
  margin: 0.2rem 0;
`;

export const PizzaExtraIngredients = styled.div`
  font-size: 0.9rem;
  margin-top: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.4rem;

  span {
    font-weight: bold;
    margin: 0.1rem 0;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const SummaryTitle = styled.h4`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: left;
  color: white;
`;

export const OrderSummary = styled.div`
  border: 1px solid white;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  text-align: left;
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const PriceRow = styled.p`
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

export const TotalAmount = styled.p`
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const ResponseInfo = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.85rem;
  opacity: 0.8;
`;

export const ServerText = styled.p`
  margin: 0.3rem 0;
`;

export const PizzaDetailLine = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 0.95rem;
  margin: 0.3rem auto;
  width: fit-content;
  gap: 0.4rem;
  text-align: left;
  line-height: 1.5;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const DetailLabel = styled.span`
  display: inline-block;
  min-width: 120px; /* Etiket genişliği sabit */
  text-align: left;
  font-weight: normal;
`;

export const DetailRow = styled.div`
  /* Her satır: Boyut / Hamur / Ek Malzemeler */
  display: flex;
  align-items: flex-start;
  margin: 0.4rem 0;
  /* Tüm satırı sola hizalamak için */
  justify-content: flex-start;
`;

export const DetailValue = styled.span`
  font-weight: bold;
  white-space: normal; /* Sığmazsa alt satıra geçer */
  line-height: 1.4;
`;

export const PriceSummaryTitle = styled.h4`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
`;

/* import styled from 'styled-components';

  export const SuccessPageWrapper = styled.div`
  background-color: #ce2829;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LogoWrapper = styled.div`
  padding: 5rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 350px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  text-align: center;
  line-height: 1.3;
  letter-spacing: 2px;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`; */
