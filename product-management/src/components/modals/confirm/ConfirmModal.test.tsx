// Libraries
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// Components
import ConfirmModal from '.';

const onClose = jest.fn();
const onClick = jest.fn();

const baseProps = {
  isOpen: true,
  onClose,
  onClick
};

const setupDefault = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps
  };

  return render(<ConfirmModal {...props} />);
};

describe('ConfirmModal component with Snapshot', () => {
  test('should render correctly', () => {
    setupDefault();

    const formDetail = screen.getByTestId('confirm-modal');

    expect(formDetail).toMatchSnapshot();
  });
});

describe('ConfirmModal component', () => {
  test('should call onClick when click delete button', async () => {
    jest.useFakeTimers();
    setupDefault();
    const confirmBtn = screen.getByRole('button', { name: /Close/i });

    await act(async () => {
      fireEvent.click(confirmBtn);
      jest.runOnlyPendingTimers();
    });

    expect(onClick).toBeCalledTimes(1);
  });
});

const setupDelete = (moreProps = {}) => {
  const props = {
    type: 'delete',
    title: 'Delete Product',
    content: 'Are you sure you want delete this product? This action cannot be undone',
    ...baseProps,
    ...moreProps
  };

  return render(<ConfirmModal {...props} />);
};

describe('ConfirmModal component', () => {
  test('should call onClick when click delete button', async () => {
    jest.useFakeTimers();
    setupDelete();
    const confirmBtn = screen.getByRole('button', { name: /Delete/i });

    await act(async () => {
      fireEvent.click(confirmBtn);
      jest.runOnlyPendingTimers();
    });

    expect(onClick).toBeCalledTimes(2);
  });
});
