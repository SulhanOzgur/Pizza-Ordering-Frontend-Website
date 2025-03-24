import styled from 'styled-components';

export const PizzaContainer = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
`;

export const PizzaName = styled.h2`
  font-size: 20px;
`;

export const InfoLine = styled.div`
  display: flex;
  gap: 4rem;
  font-size: 16px;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 24px;
`;

export const Score = styled.span`
  color: #5f5f5f;
  font-size: 16px;
`;

export const Comment = styled.span`
  color: #5f5f5f;
  font-size: 16px;
`;

export const Description = styled.p`
  color: #5f5f5f;
  margin-top: 30px;
`;

export const FormWrapper = styled.section`
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
`;

export const SizeSelectorBox = styled.div`
  font-size: 16px;
`;

export const SizeSelectorQuestion = styled.h4`
  font-size: 16px;
  color: black;
  font-weight: bold;
`;

export const SizeOptions = styled.div`
  font-size: 16px;
  color: #5f5f5f;
`;

export const CrustQuestion = styled.h4`
  font-size: 16px;
  color: black;
  font-weight: bold;
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
`;

export const IngredientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  color: #5f5f5f;
  font-weight: bold;
  font-size: 15px;
`;

export const ExtraIngredientsQuestion = styled.h4`
  font-size: 16px;
  color: black;
  font-weight: bold;
`;

export const ExtraIngredientsCondition = styled.div`
  color: #5f5f5f;
  font-weight: normal;
  font-size: 14px;
`;

export const WarningText = styled.p`
  font-size: 15px;
  color: #ce2829;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

export const SummaryRow = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 1rem;
`;
