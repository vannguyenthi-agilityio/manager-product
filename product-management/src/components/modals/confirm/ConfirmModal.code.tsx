export const asDefault = `
import ConfirmModal from '@components/modals/confirm';
import MOCKED_PRODUCT_VALUE_DEFAULT from '@constants/mocks/product';

/**
 * The used to render ConfirmModal component.
 *
 */

<ConfirmModal />
`;

export const asDelete = `
import ConfirmModal from '@components/modals/confirm';
import MOCKED_PRODUCT_VALUE_DEFAULT from '@constants/mocks/product';

/**
 * The used to render ConfirmModal component.
 *
 */

<ConfirmModal
  product={MOCKED_PRODUCT_VALUE_DEFAULT}
  type='delete',
  title='Delete Product',
  content='Are you sure you want delete this product? This action cannot be undone'
/>
`;
