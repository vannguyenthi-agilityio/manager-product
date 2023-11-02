// Libraries
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// Components
import CreateProductModal from '.';

const onClose = jest.fn();
const onClick = jest.fn();
const onSubmit = jest.fn();

const baseProps = {
  isOpen: true,
  onClose,
  onClick,
  onSubmit
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps
  };

  return render(<CreateProductModal {...props} />);
};

describe('CreateProductModal component with Snapshot', () => {
  test('should render correctly', () => {
    setup();

    const formDetail = screen.getByTestId('create-product-modal');

    expect(formDetail).toMatchSnapshot();
  });
});

describe('CreateProductModal component', () => {
  test('should call onClick when click confirm button', async () => {
    jest.useFakeTimers();
    setup();
    const confirmBtn = screen.getByRole('button', { name: /Confirm/i });

    const inputName = screen.getByTestId<HTMLInputElement>('input-name');
    expect(inputName).toBeDefined();

    const inputBrand = screen.getByTestId<HTMLInputElement>('input-brand');
    expect(inputBrand).toBeDefined();

    await act(async () => {
      fireEvent.change(inputName, { target: { value: '' } });
      jest.runOnlyPendingTimers();
    });

    await act(async () => {
      fireEvent.change(inputBrand, { target: { value: '' } });
      jest.runOnlyPendingTimers();
    });

    await act(async () => {
      fireEvent.click(confirmBtn);
      jest.runOnlyPendingTimers();
    });

    expect(inputName.value).toBe('');
    expect(inputBrand.value).toBe('');

    expect(onClick).toBeCalledTimes(0);
  });
  test('should call onClick pass validate to save Product ', async () => {
    jest.useFakeTimers();
    setup();

    const saveProduct = screen.getByTestId('click-confirm');
    expect(saveProduct).toBeDefined();
    const inputName = screen.getByTestId<HTMLInputElement>('input-name');
    expect(inputName).toBeDefined();

    const inputBrand = screen.getByTestId<HTMLInputElement>('input-brand');
    expect(inputBrand).toBeDefined();

    await act(async () => {
      fireEvent.change(inputName, { target: { value: 'Louis Vuitton' } });
      jest.runOnlyPendingTimers();
    });

    await act(async () => {
      fireEvent.change(inputBrand, { target: { value: 'Evan Flores' } });
      jest.runOnlyPendingTimers();
    });

    await act(async () => {
      fireEvent.click(saveProduct);
      jest.runOnlyPendingTimers();
    });

    expect(inputName.value).toBe('Louis Vuitton');
    expect(inputBrand.value).toBe('Evan Flores');
  });
  test('should call onClick when click confirm button', async () => {
    jest.useFakeTimers();
    setup();
    const confirmBtn = screen.getByRole('button', { name: /Confirm/i });

    const inputName = screen.getByTestId<HTMLInputElement>('input-name');
    expect(inputName).toBeDefined();

    const inputBrand = screen.getByTestId<HTMLInputElement>('input-brand');
    expect(inputBrand).toBeDefined();

    const inputQuantity = screen.getByTestId<HTMLInputElement>('input-quantity');
    expect(inputQuantity).toBeDefined();

    const inputPrice = screen.getByTestId<HTMLInputElement>('input-price');
    expect(inputPrice).toBeDefined();

    await act(async () => {
      fireEvent.change(inputName, { target: { value: 'Louis Vuitton' } });
      jest.runOnlyPendingTimers();
    });

    await act(async () => {
      fireEvent.change(inputBrand, { target: { value: 'Evan Flores' } });
      jest.runOnlyPendingTimers();
    });

    await act(async () => {
      fireEvent.change(inputPrice, { target: { value: 100 } });
      jest.runOnlyPendingTimers();
    });

    await act(async () => {
      fireEvent.change(inputQuantity, { target: { value: 1000 } });
      jest.runOnlyPendingTimers();
    });

    expect(inputName.value).toBe('Louis Vuitton');
    expect(inputBrand.value).toBe('Evan Flores');
    expect(inputPrice.value).toBe('100');
    expect(inputQuantity.value).toBe('1000');

    expect(confirmBtn).toBeDisabled;

    await act(async () => {
      fireEvent.click(confirmBtn);
      jest.runOnlyPendingTimers();
    });

    expect(onClick).toBeCalledTimes(1);
  });
});
