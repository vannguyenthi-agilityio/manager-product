import { cleanup, render, fireEvent } from '@testing-library/react';

// Utils
import { formatProductResponse } from '@utils/table';

// Mocks
import { productColumns, productData } from '@constants/mocks/table';

// Types
import { Product } from '@types';

// Components
import Table from '.';

const formatProductData = formatProductResponse(productData) as Product[];

describe('Table render', () => {
  afterEach(cleanup);

  it('should render Table component', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <Table
        columns={productColumns}
        data={formatProductData}
        onActionProduct={mockFunction}
        onShowDetail={mockFunction}
        onSearchClick={mockFunction}
      />
    );

    const table = getByTestId('product-table');

    expect(table).toBeTruthy();
    expect(table).toMatchSnapshot();
  });

  it('should check Name column is ready', () => {
    const mockFunction = jest.fn();
    const { getByText } = render(
      <Table
        columns={productColumns}
        data={formatProductData}
        onActionProduct={mockFunction}
        onShowDetail={mockFunction}
        onSearchClick={mockFunction}
      />
    );
    const nameColumns = getByText('Name');

    expect(nameColumns).toBeTruthy;
  });

  it('should simulate click search and expect mock function to be called', () => {
    const mockFunction = jest.fn();
    const { getByText } = render(
      <Table
        columns={productColumns}
        data={formatProductData}
        onActionProduct={mockFunction}
        onShowDetail={mockFunction}
        onSearchClick={mockFunction}
      />
    );
    const searchColum = getByText('Name');

    fireEvent.click(searchColum);

    expect(mockFunction).toHaveBeenCalled();
  });

  it('should check case data empty', () => {
    const mockFunction = jest.fn();
    const { getByText } = render(
      <Table
        columns={[]}
        data={[]}
        onActionProduct={mockFunction}
        onShowDetail={mockFunction}
        onSearchClick={mockFunction}
      />
    );
    const textContent = getByText('Search not found');

    expect(textContent).toBeTruthy;
  });
});
