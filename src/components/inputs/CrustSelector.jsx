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

/*import React from 'react';
import { SelectorBox } from '../layout/FormLayout';

export default function CrustSelector({ selectedCrust, handleCrustChange }) {
  return (
    <SelectorBox>
      <div className="form-group">
        <label htmlFor="crust" className="form-label">
          Hamur Seç <span style={{ color: 'red' }}>*</span>
        </label>
        <select
          style={{ width: '150px' }}
          id="crust"
          name="crust"
          className="form-control"
          value={selectedCrust}
          onChange={handleCrustChange}
        >
          <option value="">
            Hamur Kalınlığı <span className="dropdown-icon">▼</span>
          </option>
          <option value="kalın">Kalın</option>
          <option value="orta">Orta</option>
          <option value="ince">İnce</option>
        </select>
      </div>
    </SelectorBox>
  );
}*/
