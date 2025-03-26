import styled from 'styled-components';

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

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ExtraIngredientsQuestion = styled.h4`
  font-size: 16px;
  color: black;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ExtraIngredientsCondition = styled.div`
  color: #5f5f5f;
  font-weight: normal;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const WarningText = styled.p`
  font-size: 15px;
  color: #ce2829;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ExtraIngredientsHiddenCheckbox = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;

const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.$checked ? '#FDC913' : '#FAF7F2')};
  border: 2px solid ${(props) => (props.$checked ? '#FDC913' : '#FAF7F2')};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  &::after {
    content: '${(props) => (props.$checked ? '✓' : '')}';
    font-size: 14px;
    color: black;
  }
`;

const IngredientLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  font-size: 15px;
  color: #5f5f5f;
`;

export default function ExtraIngredients({
  selectedIngredients,
  handleIngredientChange,
}) {
  const ingredientsList = [
    'Pepperoni',
    'Sosis',
    'Kanada Jambonu',
    'Tavuk Izgara',
    'Soğan',
    'Domates',
    'Mısır',
    'Sucuk',
    'Jalepeno',
    'Sarımsak',
    'Biber',
    'İtalyan Sucuğu',
    'Ananas',
    'Kabak',
  ];

  const isTooFew = selectedIngredients.length < 4;
  const isTooMany = selectedIngredients.length > 10;

  return (
    <ExtraIngredientsSection>
      <ExtraIngredientsQuestion>Ek Malzemeler</ExtraIngredientsQuestion>
      <ExtraIngredientsCondition>
        En az 4, en fazla 10 malzeme seçebilirsiniz. Her biri 5₺!
      </ExtraIngredientsCondition>

      {isTooFew && <WarningText>En az 4 malzeme seçmelisiniz.</WarningText>}
      {isTooMany && (
        <WarningText>En fazla 10 malzeme seçebilirsiniz.</WarningText>
      )}

      <IngredientsGrid>
        {ingredientsList.map((ingredient, index) => {
          const checked = selectedIngredients.includes(ingredient);
          const disabled = !checked && selectedIngredients.length >= 10;

          return (
            <CheckboxContainer key={index}>
              <IngredientLabel>
                <ExtraIngredientsHiddenCheckbox
                  type="checkbox"
                  value={ingredient}
                  checked={checked}
                  onChange={handleIngredientChange}
                  disabled={disabled}
                />
                <StyledCheckbox $checked={checked} />
                {ingredient}
              </IngredientLabel>
            </CheckboxContainer>
          );
        })}
      </IngredientsGrid>
    </ExtraIngredientsSection>
  );
}

/* import { FormGroup, Label, Input, Alert } from 'reactstrap';
import {
  IngredientsGrid,
  ExtraIngredientsQuestion,
  ExtraIngredientsCondition,
  ExtraIngredientsSection,
  WarningText,
} from '../layout/OrderPageLayout';

export default function ExtraIngredients({
  selectedIngredients,
  handleIngredientChange,
}) {
  const ingredientsList = [
    'Pepperoni',
    'Sosis',
    'Kanada Jambonu',
    'Tavuk Izgara',
    'Soğan',
    'Domates',
    'Mısır',
    'Sucuk',
    'Jalepeno',
    'Sarımsak',
    'Biber',
    'İtalyan Sucuğu',
    'Ananas',
    'Kabak',
  ];
  const isTooFew = selectedIngredients.length < 4;
  const isTooMany = selectedIngredients.length > 10;

  return (
    <ExtraIngredientsSection>
      <ExtraIngredientsQuestion>Ek Malzemeler</ExtraIngredientsQuestion>
      <ExtraIngredientsCondition>
        En az 4, en fazla 10 malzeme seçebilirsiniz. Her biri 5₺!
      </ExtraIngredientsCondition>

      {isTooFew && <WarningText>En az 4 malzeme seçmelisiniz.</WarningText>}
      {isTooMany && (
        <WarningText>En fazla 10 malzeme seçebilirsiniz.</WarningText>
      )}

      <IngredientsGrid>
        {ingredientsList.map((ingredient, index) => (
          <FormGroup check key={index}>
            <Label check>
              <Input
                type="checkbox"
                value={ingredient}
                checked={selectedIngredients.includes(ingredient)}
                onChange={handleIngredientChange}
                disabled={
                  !selectedIngredients.includes(ingredient) &&
                  selectedIngredients.length >= 10
                }
              />
              {ingredient}
            </Label>
          </FormGroup>
        ))}
      </IngredientsGrid>
    </ExtraIngredientsSection>
  );
} */
