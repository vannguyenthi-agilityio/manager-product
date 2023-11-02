export const asDefault = `
import ProductModal from '@components/modals/create';
import MOCKED_PRODUCT_VALUE_DEFAULT from '@constants/mocks/product';

/**
 * The used to render ProductModal component.
 *
 */

<ProductModal
  product={MOCKED_PRODUCT_VALUE_DEFAULT} />
`;

export const Edit = `
import ProductModal from '@components/modals/create';
import MOCKED_PRODUCT_VALUE_DEFAULT from '@constants/mocks/product';

/**
 * The used to render ProductModal component.
 *
 */

<ProductModal
  product={MOCKED_PRODUCT_VALUE_DEFAULT} />
  action='edit'
`;
