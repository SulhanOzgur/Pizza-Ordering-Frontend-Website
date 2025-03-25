import React from 'react';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 16px;

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;

const CounterButton = styled.button`
  background-color: #fdc913;
  border: none;
  padding: 12px 16px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: black;
  transition: background-color 0.2s;

  &:hover {
    background-color: #fdc913;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
  }
`;

const CountDisplay = styled.div`
  padding: 12px 24px;
  background-color: white;
  font-size: 18px;
  font-weight: bold;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }
`;

export default function PizzaCounter({ count, onIncrement, onDecrement }) {
  return (
    <CounterWrapper>
      <CounterButton onClick={onDecrement}>-</CounterButton>
      <CountDisplay>{count}</CountDisplay>
      <CounterButton onClick={onIncrement}>+</CounterButton>
    </CounterWrapper>
  );
}

/* import React from 'react';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 16px;

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;

const CounterButton = styled.button`
  background-color: #fdc913;
  border: none;
  padding: 12px 16px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: black;
  transition: background-color 0.2s;

  &:hover {
    background-color: #fdc913;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
  }
`;

const CountDisplay = styled.div`
  padding: 12px 24px;
  background-color: white;
  font-size: 18px;
  font-weight: bold;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }
`;

export default function PizzaCounter({ count, onIncrement, onDecrement }) {
  return (
    <CounterWrapper>
      <CounterButton onClick={onDecrement}>-</CounterButton>
      <CountDisplay>{count}</CountDisplay>
      <CounterButton onClick={onIncrement}>+</CounterButton>
    </CounterWrapper>
  );
} */
