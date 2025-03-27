import Header from '../components/Header.jsx';
import PizzaDetails from '../components/PizzaDetails.jsx';
import React from 'react';
import FoodsDataList from '../datas/FoodsDataList.js';
import { useState } from 'react';
import formBanner from '../../images/iteration-2-images/pictures/form-banner.png';
import {
  OrderPageWrapper,
  BannerWrapper,
  BannerImage,
} from '../components/layout/OrderPageLayout.js';
import Footer from '../components/Footer';

function PizzaOrderPage({ setOrderData }) {
  const [pizzas, setPizzas] = useState(FoodsDataList);
  const pizza = pizzas[0];
  return (
    <>
      <OrderPageWrapper>
        <Header />
        <BannerWrapper>
          <BannerImage src={formBanner} alt="Yarım Pizza Banner" />
        </BannerWrapper>
        <PizzaDetails
          pizzaName={pizza.name}
          pizzaPrice={pizza.price}
          pizzaScore={pizza.score}
          pizzaComment={pizza.comment}
          pizzaDescription={pizza.description}
          setOrderData={setOrderData}
        />
        <Footer />
      </OrderPageWrapper>
    </>
  );
}

export default PizzaOrderPage;

/* import Header from '../components/Header.jsx';
import PizzaDetails from '../components/PizzaDetails.jsx';
import React from 'react';
import PizzaListData from '../datas/PizzaListData.js';
import { useState } from 'react';

function PizzaOrderPage() {
  const [pizzas, setPizzas] = useState(PizzaListData);
  const pizza = pizzas[0];
  return (
    <>
      <Header />
      <PizzaDetails
        pizzaName={pizza.name}
        pizzaPrice={pizza.price}
        pizzaScore={pizza.score}
        pizzaComment={pizza.comment}
        pizzaDescription={pizza.description}
      />
    </>
  );
}

export default PizzaOrderPage; */
