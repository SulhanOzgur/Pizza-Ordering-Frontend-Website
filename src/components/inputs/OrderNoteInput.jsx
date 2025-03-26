import styled from 'styled-components';

const NoteContainer = styled.section`
  margin-top: 1rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    padding: 0 0.5rem;
  }
`;

const NoteLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

const StyledOrderNoteInput = styled.textarea`
  width: 100%;
  background-color: #faf7f2;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  color: #292929;
  outline: none;
  resize: none;
  min-height: 100px;
  box-shadow: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export default function OrderNoteInput({ value, onChange }) {
  return (
    <NoteContainer>
      <NoteLabel htmlFor="orderNote">Sipariş Notu</NoteLabel>
      <StyledOrderNoteInput
        id="orderNote"
        value={value}
        onChange={onChange}
        placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
      />
    </NoteContainer>
  );
}

/* import React from 'react';
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
} */
