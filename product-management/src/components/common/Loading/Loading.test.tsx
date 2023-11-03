// Libraries
import { render } from '@testing-library/react';

// Components
import Loading from '.';

describe('Loading component', () => {
  it('should render Loading component', () => {
    const { container } = render(<Loading />);

    const spinnerLoadPage = container.querySelector('.chakra-spinner');
    expect(spinnerLoadPage).toBeTruthy();
  });

  describe('jest Snapshot testing', () => {
    it('matches Loading Snapshot', () => {
      const { asFragment } = render(<Loading />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
