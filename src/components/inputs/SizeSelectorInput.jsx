import { Form, FormGroup, Label, Input } from 'reactstrap';
import { SelectorBox } from '../layout/OrderPageLayout';
import { SizeSelectorBox } from '../layout/OrderPageLayout';
import { SizeSelectorQuestion } from '../layout/OrderPageLayout';
import { SizeOptions } from '../layout/OrderPageLayout';

export default function SizeSelector({ selectedSize, handleSizeChange }) {
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
                    onChange={handleSizeChange}
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
                    onChange={handleSizeChange}
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
                    onChange={handleSizeChange}
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

/* import { Form, FormGroup, Label, Input } from 'reactstrap';
import { SelectorBox } from '../layout/OrderPageLayout';
import { SizeSelectorBox } from '../layout/OrderPageLayout';
import { SizeSelectorQuestion } from '../layout/OrderPageLayout';
import { SizeOptions } from '../layout/OrderPageLayout';

export default function SizeSelector({ selectedSize, handleSizeChange }) {
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
                    onChange={handleSizeChange}
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
                    onChange={handleSizeChange}
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
                    onChange={handleSizeChange}
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
} */
