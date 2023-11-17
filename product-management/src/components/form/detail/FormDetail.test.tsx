// Libraries
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

// Components
import FormDetail from '.';

const onBack = jest.fn();
const onSubmit = jest.fn();
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

const setup = () => {
  const props = {
    handleSubmit: onSubmit,
    handleBack: onBack
  };

  return render(<FormDetail {...props} />, { wrapper: MemoryRouter });
};

describe('Product Form Component', () => {
  test('should render correctly', () => {
    setup();

    const formDetail = screen.getByTestId('form-detail');

    expect(formDetail).toMatchSnapshot();
  });

  test('should call onClick navigation to Home page', async () => {
    setup();

    const navHomePage = screen.getByTestId('click-to-home');
    expect(navHomePage).toBeDefined();

    fireEvent.click(navHomePage);

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });

  test('should call onClick pass validate to save Product ', async () => {
    jest.useFakeTimers();
    setup();

    const saveProduct = screen.getByTestId('click-save');

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

  test('should call onClick do not pass validate show error message', async () => {
    jest.useFakeTimers();
    setup();

    const saveProduct = screen.getByTestId('click-save');
    expect(saveProduct).toBeDefined();

    const inputName = screen.getByTestId<HTMLInputElement>('input-name');
    expect(inputName).toBeDefined();

    const inputBrand = screen.getByTestId<HTMLInputElement>('input-brand');
    expect(inputBrand).toBeDefined();

    const inputQuantity = screen.getByTestId<HTMLInputElement>('input-quantity');
    expect(inputQuantity).toBeDefined();
    expect(saveProduct).toBeDisabled;

    const inputPrice = screen.getByTestId<HTMLInputElement>('input-price');
    expect(inputPrice).toBeDefined();

    await act(async () => {
      fireEvent.change(inputName, { target: { value: '' } });
      jest.runOnlyPendingTimers();
    });

    await act(async () => {
      fireEvent.change(inputBrand, { target: { value: '' } });
      jest.runOnlyPendingTimers();
    });

    await act(async () => {
      fireEvent.change(inputQuantity, { target: { value: '' } });
      jest.runOnlyPendingTimers();
    });

    await act(async () => {
      fireEvent.change(inputPrice, { target: { value: '' } });
      jest.runOnlyPendingTimers();
    });

    await act(async () => {
      fireEvent.click(saveProduct);
      jest.runOnlyPendingTimers();
    });
    expect(onSubmit).toHaveBeenCalledTimes(0);

    expect(inputName.value).toBe('');
    expect(inputBrand.value).toBe('');
  });
});
