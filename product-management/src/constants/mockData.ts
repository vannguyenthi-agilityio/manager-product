// Types
import { Product } from '@types';

// Constants
import { PRODUCT_STATUS, PRODUCT_TYPE } from '@constants';

export const MOCKED_PRODUCT_VALUE_DEFAULT = {
  id: '',
  name: '',
  price: 0,
  quantity: 0,
  brand: '',
  status: PRODUCT_STATUS.AVAILABLE,
  types: PRODUCT_TYPE.DIAMOND
} as Product;

export const MOCKED_PRODUCT_EXIST = {
  id: '1',
  name: 'Louis Vuitton',
  price: 1000,
  quantity: 100,
  brand: 'Evan Flores',
  status: PRODUCT_STATUS.AVAILABLE,
  types: PRODUCT_TYPE.RING
} as Product;
