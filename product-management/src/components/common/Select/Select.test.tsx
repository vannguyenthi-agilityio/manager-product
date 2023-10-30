//Libraries
import { fireEvent, render, screen } from '@testing-library/react';

//Components
import { Select } from '.';

const mockOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
];

describe('Select render', () => {
  test('match with snapshot', () => {
    render(
      <Select
        options={mockOptions}
        value={mockOptions[0].value}
        label='Select'
        onChange={() => {}}
      />
    );

    const select = screen.getByTestId('select');

    expect(select).toMatchSnapshot();
  });

  test('should render without label', () => {
    render(
      <Select
        options={mockOptions}
        value={mockOptions[0].value}
        onChange={() => {}}
      />
    );

    const select = screen.queryByText('Select');

    expect(select).toBeFalsy();
  });

  test('should simulate onChange event', () => {
    const mockOnChange = jest.fn();

    render(
      <Select
        options={mockOptions}
        value={mockOptions[0].value}
        label='Select'
        onChange={mockOnChange}
      />
    );

    const select = screen.getByTestId('select');
    fireEvent.change(select);

    expect(mockOnChange).toHaveBeenCalled();
  });
});
