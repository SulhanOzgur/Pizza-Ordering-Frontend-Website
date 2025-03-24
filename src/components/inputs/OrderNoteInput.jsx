import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const OrderNote = styled.section`
  font-weight: bold;
`;

export default function OrderNoteInput({ value, onChange }) {
  return (
    <FormGroup className="mt-4 px-3">
      <OrderNote>
        <Label for="orderNote">Sipariş Notu</Label>{' '}
      </OrderNote>
      <Input
        id="orderNote"
        type="textarea"
        rows="3"
        value={value}
        onChange={onChange}
        placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
      />
    </FormGroup>
  );
}
