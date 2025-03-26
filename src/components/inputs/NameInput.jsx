import styled from 'styled-components';

const NameContainer = styled.section`
  margin-top: 1rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    padding: 0 0.5rem;
  }
`;

const NameLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

const RequiredMark = styled.span`
  color: red;
`;

const StyledNameInput = styled.input`
  width: 100%;
  background-color: #faf7f2;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  color: #292929;
  outline: none;
  box-shadow: none;

  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }

  &.invalid {
    border: 2px solid #ce2829;
  }
`;

const ErrorText = styled.div`
  color: #ce2829;
  font-size: 14px;
  margin-top: 0.5rem;
`;

export default function NameInput({ value, onChange, touched, onBlur }) {
  const isNameValid = value.length >= 3;

  return (
    <NameContainer>
      <NameLabel htmlFor="customerName">
        İsim ve Soyisim <RequiredMark>*</RequiredMark>
      </NameLabel>

      <StyledNameInput
        id="customerName"
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="Adınızı ve soyadınızı giriniz"
        className={touched && !isNameValid ? 'invalid' : ''}
      />

      {!isNameValid && touched && (
        <ErrorText>İsim en az 3 karakter olmalı.</ErrorText>
      )}
    </NameContainer>
  );
}

/* import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
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
} */
