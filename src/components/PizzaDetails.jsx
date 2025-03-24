import { useState } from 'react';
import {
  FormWrapper,
  SelectorRow,
  SummaryRow,
  PizzaContainer,
  PizzaName,
  InfoLine,
  Price,
  Score,
  Comment,
  Description,
} from '../components/layout/FormLayout';
import SizeSelector from './inputs/SizeSelector';
import ExtraIngredients from './inputs/ExtraIngredients';
import NameInput from './inputs/NameInput';
import OrderNoteInput from './inputs/OrderNoteInput';
import PizzaCounter from '../components/PizzaCounter';
import PriceSummaryBox from './PriceSummaryBox';
import CrustSelector from './inputs/CrustSelector';

export default function PizzaDetails({
  pizzaName,
  pizzaPrice,
  pizzaScore,
  pizzaComment,
  pizzaDescription,
}) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCrust, setSelectedCrust] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [orderNote, setOrderNote] = useState('');
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleCrustChange = (e) => {
    setSelectedCrust(e.target.value);
  };

  const handleIngredientChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      if (selectedIngredients.length < 10) {
        setSelectedIngredients([...selectedIngredients, value]);
      } else {
        alert('En fazla 10 malzeme seçebilirsiniz.');
      }
    } else {
      setSelectedIngredients(selectedIngredients.filter((f) => f !== value));
    }
  };

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleOrderNoteChange = (e) => {
    setOrderNote(e.target.value);
  };

  const handleIncrement = () => setCount((c) => (c < 10 ? c + 1 : 10));
  const handleDecrement = () => setCount((c) => (c > 1 ? c - 1 : 1));

  return (
    <>
      <FormWrapper>
        <PizzaContainer>
          <PizzaName>{pizzaName}</PizzaName>
          <InfoLine>
            <Price>{pizzaPrice}</Price>
            <Score>{pizzaScore}</Score>
            <Comment>{pizzaComment}</Comment>
          </InfoLine>
          <Description>{pizzaDescription}</Description>
        </PizzaContainer>

        <SelectorRow>
          <SizeSelector
            selectedSize={selectedSize}
            handleChange={handleChange}
          />
          <CrustSelector
            selectedCrust={selectedCrust}
            handleCrustChange={handleCrustChange}
          />
        </SelectorRow>

        <ExtraIngredients
          selectedIngredients={selectedIngredients}
          handleChange={handleIngredientChange}
        />

        <NameInput
          value={customerName}
          onChange={handleCustomerNameChange}
          touched={nameTouched}
          onBlur={() => setNameTouched(true)}
        />
        <OrderNoteInput value={orderNote} onChange={handleOrderNoteChange} />
        <SummaryRow>
          <PizzaCounter
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <PriceSummaryBox
            basePrice={pizzaPrice}
            extraCount={selectedIngredients.length}
            count={count}
          />
        </SummaryRow>
      </FormWrapper>
    </>
  );
}
