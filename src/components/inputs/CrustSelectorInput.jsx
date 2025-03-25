import React from 'react';
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
}
