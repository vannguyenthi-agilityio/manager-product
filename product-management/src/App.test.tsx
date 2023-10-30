import { render, screen } from '@testing-library/react';
import App from './App';

it('should have a link text', () => {
  render(<App />);

  expect(screen.getByText('Submit')).toBeInTheDocument();
});
