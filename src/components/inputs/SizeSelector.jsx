import { Form, FormGroup, Label, Input } from 'reactstrap';
import { SelectorBox } from '../layout/FormLayout';
import { SizeSelectorBox } from '../layout/FormLayout';
import { SizeSelectorQuestion } from '../layout/FormLayout';
import { SizeOptions } from '../layout/FormLayout';

export default function SizeSelector({ selectedSize, handleChange }) {
  return (
    <SelectorBox>
      <SizeSelectorBox>
        <Form>
          <FormGroup tag="fieldset">
            <SizeSelectorQuestion>
              <Label className="custom-legend">
                Boyut Seç <span style={{ color: 'red' }}>*</span>
              </Label>
            </SizeSelectorQuestion>

            <SizeOptions>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="size"
                    value="küçük"
                    checked={selectedSize === 'küçük'}
                    onChange={handleChange}
                  />
                  Küçük
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="size"
                    value="orta"
                    checked={selectedSize === 'orta'}
                    onChange={handleChange}
                  />
                  Orta
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="size"
                    value="büyük"
                    checked={selectedSize === 'büyük'}
                    onChange={handleChange}
                  />
                  Büyük
                </Label>
              </FormGroup>
            </SizeOptions>
          </FormGroup>
        </Form>
      </SizeSelectorBox>
    </SelectorBox>
  );
}
