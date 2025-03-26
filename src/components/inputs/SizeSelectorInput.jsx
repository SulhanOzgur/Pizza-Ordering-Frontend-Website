import styled from 'styled-components';
import { SelectorBox } from '../layout/OrderPageLayout';

const SizeSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SizeQuestion = styled.label`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 0.5rem;
`;

const SizeOptions = styled.div`
  display: flex;
  gap: 1rem;
`;

const SizeHiddenRadio = styled.input`
  display: none;
`;

const StyledCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? '#FDC913' : '#FAF7F2')};
  color: #333;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ selected }) => (selected ? '#FDC913' : '#ddd')};
  cursor: pointer;
  transition: background-color 0.3s;
`;

const SizeOptionLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export default function SizeSelector({ selectedSize, handleSizeChange }) {
  const sizes = ['S', 'M', 'L'];

  return (
    <SizeSelectorWrapper>
      <SizeQuestion>
        Boyut Seç <span style={{ color: 'red' }}>*</span>
      </SizeQuestion>

      <SizeOptions>
        {sizes.map((size) => (
          <SizeOptionLabel key={size}>
            <SizeHiddenRadio
              type="radio"
              name="size"
              value={size}
              checked={selectedSize === size}
              onChange={handleSizeChange}
            />
            <StyledCircle selected={selectedSize === size}>{size}</StyledCircle>
          </SizeOptionLabel>
        ))}
      </SizeOptions>
    </SizeSelectorWrapper>
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
