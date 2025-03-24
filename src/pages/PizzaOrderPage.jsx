import Header from '../components/Header.jsx';
import PizzaDetails from '../components/PizzaDetails.jsx';
import React from 'react';
import PizzaListData from '../datas/PizzaListData.js';
import { useState } from 'react';

function PizzaOrderPage() {
  const [pizzas, setPizzas] = useState(PizzaListData);
  const pizza = pizzas[0];
  return (
    <>
      <Header title="Teknolojik Yemekler" />
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

export default PizzaOrderPage;
