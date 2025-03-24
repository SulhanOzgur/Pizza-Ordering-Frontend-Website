import { FormGroup, Label, Input, Alert } from 'reactstrap';
import {
  IngredientsGrid,
  ExtraIngredientsQuestion,
  ExtraIngredientsCondition,
  ExtraIngredientsSection,
  WarningText,
} from '../layout/FormLayout';

export default function ExtraIngredients({
  selectedIngredients,
  handleChange,
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
                onChange={handleChange}
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
}
