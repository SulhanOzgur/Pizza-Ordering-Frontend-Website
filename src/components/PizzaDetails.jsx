import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
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
  Divider,
} from './layout/OrderPageLayout';
import SizeSelector from './inputs/SizeSelectorInput';
import ExtraIngredients from './inputs/ExtraIngredientsInput';
import NameInput from './inputs/NameInput';
import OrderNoteInput from './inputs/OrderNoteInput';
import PizzaCounter from '../components/PizzaCounter';
import PriceSummaryBox from './PriceSummaryBox';
import CrustSelector from './inputs/CrustSelectorInput';

export default function PizzaDetails({
  pizzaName,
  pizzaPrice,
  pizzaScore,
  pizzaComment,
  pizzaDescription,
  setOrderData,
}) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCrust, setSelectedCrust] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [orderNote, setOrderNote] = useState('');
  const [count, setCount] = useState(1);
  const [extraPrice, setExtraPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formValid, setFormValid] = useState(false);

  const history = useHistory();

  const handleSizeChange = (e) => {
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

  useEffect(() => {
    const basePrice = parseFloat(pizzaPrice);
    const extraPrice = selectedIngredients.length * 5;
    const total = (basePrice + extraPrice) * count;
    setExtraPrice(extraPrice);
    setTotalPrice(total);
  }, [pizzaPrice, selectedIngredients, count]);

  useEffect(() => {
    const isValid =
      customerName.length >= 3 &&
      selectedSize !== '' &&
      selectedCrust !== '' &&
      selectedIngredients.length >= 4;

    setFormValid(isValid);
  }, [customerName, selectedSize, selectedCrust, selectedIngredients]);

  function handleOrderClick(e) {
    e.preventDefault();

    if (!formValid) {
      alert('Form geçerli değil! Sipariş gönderilemedi.');
      return;
    }

    const orderData = {
      name: customerName,
      size: selectedSize,
      crust: selectedCrust,
      ingredients: selectedIngredients,
      note: orderNote,
      count: count,
      extraPrice: extraPrice,
      totalPrice: totalPrice,
    };

    axios
      .post('https://reqres.in/api/pizza', orderData)
      .then((res) => {
        console.log('Sunucudan gelen cevap:', res.data);
        setOrderData(orderData);
        history.push('/success');
      })
      .catch((error) => {
        console.error('Sipariş gönderilirken hata oluştu:', error);
      });
  }

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
            handleSizeChange={handleSizeChange}
          />
          <CrustSelector
            selectedCrust={selectedCrust}
            handleCrustChange={handleCrustChange}
          />
        </SelectorRow>

        <ExtraIngredients
          selectedIngredients={selectedIngredients}
          handleIngredientChange={handleIngredientChange}
        />

        <NameInput
          value={customerName}
          onChange={handleCustomerNameChange}
          touched={nameTouched}
          onBlur={() => setNameTouched(true)}
        />
        <OrderNoteInput value={orderNote} onChange={handleOrderNoteChange} />

        <Divider />

        <SummaryRow>
          <PizzaCounter
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <PriceSummaryBox
            extraPrice={extraPrice}
            totalPrice={totalPrice}
            formValid={formValid}
            onOrderClick={handleOrderClick}
          />
        </SummaryRow>
      </FormWrapper>
    </>
  );
}

/* import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
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
  Divider,
} from './layout/OrderPageLayout';
import SizeSelector from './inputs/SizeSelectorInput';
import ExtraIngredients from './inputs/ExtraIngredientsInput';
import NameInput from './inputs/NameInput';
import OrderNoteInput from './inputs/OrderNoteInput';
import PizzaCounter from '../components/PizzaCounter';
import PriceSummaryBox from './PriceSummaryBox';
import CrustSelector from './inputs/CrustSelectorInput';

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
  const [extraPrice, setExtraPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formValid, setFormValid] = useState(false);

  const history = useHistory();

  const handleSizeChange = (e) => {
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

  useEffect(() => {
    const basePrice = parseFloat(pizzaPrice);
    const extraPrice = selectedIngredients.length * 5;
    const total = (basePrice + extraPrice) * count;
    setExtraPrice(extraPrice);
    setTotalPrice(total);
  }, [pizzaPrice, selectedIngredients, count]);

  useEffect(() => {
    const isValid =
      customerName.length >= 3 &&
      selectedSize !== '' &&
      selectedCrust !== '' &&
      selectedIngredients.length >= 4;

    setFormValid(isValid);
  }, [customerName, selectedSize, selectedCrust, selectedIngredients]);

  function handleOrderClick(e) {
    e.preventDefault();

    if (!formValid) {
      alert('Form geçerli değil! Sipariş gönderilemedi.');
      return;
    }

    const orderData = {
      name: customerName,
      size: selectedSize,
      crust: selectedCrust,
      ingredients: selectedIngredients,
      note: orderNote,
      count: count,
      totalPrice: totalPrice,
    };

    axios
      .post('https://reqres.in/api/pizza', orderData)
      .then((res) => {
        console.log('Sunucudan gelen cevap:', res.data);
        history.push('/success');
      })
      .catch((error) => {
        console.error('Sipariş gönderilirken hata oluştu:', error);
      });
  }

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
            handleSizeChange={handleSizeChange}
          />
          <CrustSelector
            selectedCrust={selectedCrust}
            handleCrustChange={handleCrustChange}
          />
        </SelectorRow>

        <ExtraIngredients
          selectedIngredients={selectedIngredients}
          handleIngredientChange={handleIngredientChange}
        />

        <NameInput
          value={customerName}
          onChange={handleCustomerNameChange}
          touched={nameTouched}
          onBlur={() => setNameTouched(true)}
        />
        <OrderNoteInput value={orderNote} onChange={handleOrderNoteChange} />

        <Divider />

        <SummaryRow>
          <PizzaCounter
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <PriceSummaryBox
            extraPrice={extraPrice}
            totalPrice={totalPrice}
            formValid={formValid}
            onOrderClick={handleOrderClick}
          />
        </SummaryRow>
      </FormWrapper>
    </>
  );
} */
