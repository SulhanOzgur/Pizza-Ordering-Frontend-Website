import React from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { SelectorBox } from '../layout/OrderPageLayout';

const CrustQuestion = styled.h4`
  font-size: 16px;
  color: black;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CrustSelect = styled(Input)`
  background-color: #faf7f2;
  border: none;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14.5px;
  color: #292929;
  box-shadow: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  option {
    background-color: white;
    color: #292929;
  }
`;

export default function CrustSelector({ selectedCrust, handleCrustChange }) {
  return (
    <SelectorBox>
      <Form>
        <FormGroup>
          <CrustQuestion>
            <Label htmlFor="crust">
              Hamur Seç <span style={{ color: 'red' }}>*</span>
            </Label>
          </CrustQuestion>
          <CrustSelect
            type="select"
            name="crust"
            id="crust"
            value={selectedCrust}
            onChange={handleCrustChange}
          >
            <option value="">Hamur Kalınlığı Seç</option>
            <option value="Kalın">Kalın</option>
            <option value="Orta">Orta</option>
            <option value="İnce">İnce</option>
          </CrustSelect>
        </FormGroup>
      </Form>
    </SelectorBox>
  );
}

/* import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { SelectorBox } from '../layout/OrderPageLayout';
import { CrustQuestion } from '../layout/OrderPageLayout';

export default function CrustSelector({ selectedCrust, handleCrustChange }) {
  return (
    <SelectorBox>
      <Form>
        <FormGroup>
          <CrustQuestion>
            <Label htmlFor="crust">
              Hamur Seç <span style={{ color: 'red' }}>*</span>
            </Label>
          </CrustQuestion>
          <Input
            type="select"
            name="crust"
            id="crust"
            value={selectedCrust}
            onChange={handleCrustChange}
          >
            <option value="">Hamur Kalınlığı</option>
            <option value="kalın">Kalın</option>
            <option value="orta">Orta</option>
            <option value="ince">İnce</option>
          </Input>
        </FormGroup>
      </Form>
    </SelectorBox>
  );
} */
