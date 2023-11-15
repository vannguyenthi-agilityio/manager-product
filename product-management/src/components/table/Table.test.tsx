import { cleanup, render } from '@testing-library/react';

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
      />
    );

    const table = getByTestId('product-table');

    expect(table).toBeTruthy();
    expect(table).toMatchSnapshot();
  });
});
