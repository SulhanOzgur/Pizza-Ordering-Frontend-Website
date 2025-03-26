/*OrderPage*/

import styled from 'styled-components';

export const OrderPageWrapper = styled.div`
  background-color: #faf7f2; /* Bej arka plan */
  min-height: 100vh;
`;

export const BannerWrapper = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const BannerImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

export const BejSection = styled.section`
  background-color: #faf7f2;
  padding: 2rem 0;
`;

export const WhiteSection = styled.section`
  background-color: #fff;
  padding: 2rem 0;
`;

export const PizzaContainer = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0.5rem;
  }
`;

export const PizzaName = styled.h2`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const InfoLine = styled.div`
  display: flex;
  gap: 4rem;
  font-size: 16px;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Score = styled.span`
  color: #5f5f5f;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Comment = styled.span`
  color: #5f5f5f;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Description = styled.p`
  color: #5f5f5f;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const FormWrapper = styled.section`
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 1rem auto;
    gap: 1rem;
  }
`;

export const SelectorBox = styled.section`
  flex: 1;
  flex: none;
  min-width: 200px;
  max-width: 300px;
  padding: 1rem;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: white;

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    max-width: unset;
    padding: 0.5rem;
  }
`;

export const SelectorRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const SummaryRow = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #292929;
`;

export const ErrorMessage = styled.p`
  color: #ce2829;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
`;

/* import styled from 'styled-components';

export const PizzaContainer = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0.5rem;
  }
`;

export const PizzaName = styled.h2`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const InfoLine = styled.div`
  display: flex;
  gap: 4rem;
  font-size: 16px;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Score = styled.span`
  color: #5f5f5f;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Comment = styled.span`
  color: #5f5f5f;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Description = styled.p`
  color: #5f5f5f;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const FormWrapper = styled.section`
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 1rem auto;
    gap: 1rem;
  }
`;

export const SelectorBox = styled.section`
  flex: 1;
  flex: none;
  min-width: 200px;
  max-width: 300px;
  padding: 1rem;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: white;

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    max-width: unset;
    padding: 0.5rem;
  }
`;

export const SizeSelectorBox = styled.div`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SizeSelectorQuestion = styled.h4`
  font-size: 16px;
  color: black;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SizeOptions = styled.div`
  font-size: 16px;
  color: #5f5f5f;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CrustQuestion = styled.h4`
  font-size: 16px;
  color: black;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SelectorRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const ExtraIngredientsSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const IngredientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  color: #5f5f5f;
  font-weight: bold;
  font-size: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    font-size: 13px;
  }
`;

export const ExtraIngredientsQuestion = styled.h4`
  font-size: 16px;
  color: black;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ExtraIngredientsCondition = styled.div`
  color: #5f5f5f;
  font-weight: normal;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const WarningText = styled.p`
  font-size: 15px;
  color: #ce2829;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const SummaryRow = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #292929;
`; */
