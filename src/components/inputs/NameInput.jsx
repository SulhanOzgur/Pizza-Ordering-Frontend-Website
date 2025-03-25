import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import styled from 'styled-components';

const NameContainer = styled.section`
  margin-top: 1rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    padding: 0 0.5rem;
  }
`;

const NameQuestion = styled.div`
  font-weight: bold;
`;

export default function NameInput({ value, onChange, touched, onBlur }) {
  const isNameValid = value.length >= 3;

  return (
    <NameContainer>
      <FormGroup>
        <NameQuestion>
          <Label for="customerName">
            İsim ve Soyisim <span style={{ color: 'red' }}>*</span>
          </Label>
        </NameQuestion>
        <Input
          id="customerName"
          type="text"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="Adınızı ve soyadınızı giriniz"
          invalid={touched && !isNameValid}
        />
        <FormFeedback>İsim en az 3 karakter olmalı.</FormFeedback>
      </FormGroup>
    </NameContainer>
  );
}
