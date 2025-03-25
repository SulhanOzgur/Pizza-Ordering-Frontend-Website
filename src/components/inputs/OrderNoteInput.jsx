import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const NoteContainer = styled.section`
  margin-top: 1rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    padding: 0 0.5rem;
  }
`;

const OrderNote = styled.div`
  font-weight: bold;
`;

export default function OrderNoteInput({ value, onChange }) {
  return (
    <NoteContainer>
      <FormGroup>
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
    </NoteContainer>
  );
}
