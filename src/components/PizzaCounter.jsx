import React from 'react';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 16px;
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
`;

const CountDisplay = styled.div`
  padding: 12px 24px;
  background-color: white;
  font-size: 18px;
  font-weight: bold;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
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
