// Libraries
import { render, screen } from '@testing-library/react';

// Components
import Popup from '.';

// Colors
import { POPUP_STATUS } from '@constants';

const mockProps = {
  content: 'Lorem ipsum dolor sit amet',
  onClosePopup: jest.fn()
};

describe('Popup. component', () => {
  test('should render correctly', () => {
    render(
      <Popup
        status={POPUP_STATUS.ERROR}
        {...mockProps}
      />
    );

    const popupError = screen.getByTestId('error');
    expect(popupError).toMatchSnapshot();
  });
});

describe('Popup. component', () => {
  test('should render correctly', () => {
    render(
      <Popup
        status={POPUP_STATUS.WARNING}
        {...mockProps}
      />
    );

    const popupError = screen.getByTestId('warning');
    expect(popupError).toMatchSnapshot();
  });
});

describe('Popup. component', () => {
  test('should render correctly', () => {
    render(
      <Popup
        status={POPUP_STATUS.SUCCESS}
        {...mockProps}
      />
    );

    const popupError = screen.getByTestId('success');
    expect(popupError).toMatchSnapshot();
  });
});
