import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import styled from 'styled-components';

export default function NameInput({ value, onChange, touched, onBlur }) {
  const isNameValid = value.length >= 3;

  const NameQuestion = styled.section`
    font-weight: bold;
  `;

  return (
    <div className="mt-4 px-3">
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
    </div>
  );
}
