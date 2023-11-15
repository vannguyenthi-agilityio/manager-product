// Types
import { Product } from '@types';

// Constants
import { PRODUCT_STATUS, PRODUCT_TYPE } from '@constants';

const productColumns = [
  {
    value: 'Name',
    filterable: {
      isFilter: false
    }
  },
  {
    value: 'Status',
    filterable: {
      isFilter: false
    }
  },
  {
    value: 'Types',
    filterable: {
      isFilter: false
    }
  },
  {
    value: 'Quantity',
    filterable: {
      isFilter: false
    }
  },
  {
    value: 'Brand',
    filterable: {
      isFilter: false
    }
  },
  {
    value: 'Price',
    filterable: {
      isFilter: false
    }
  },
  {
    value: 'Action',
    filterable: null
  }
];

const productData = [
  {
    id: '1',
    name: 'Louis Vuitton',
    status: PRODUCT_STATUS.AVAILABLE,
    types: PRODUCT_TYPE.RING,
    quantity: 9177,
    price: 452.85,
    brand: 'Evan Flores'
  },
  {
    id: '2',
    name: 'Johnson & Johnson',
    status: PRODUCT_STATUS.SOLD_OUT,
    types: PRODUCT_TYPE.DIAMOND,
    quantity: 3064,
    price: 901.35,
    brand: 'Arlene Wilson'
  },
  {
    id: '3',
    name: 'Starbuks',
    status: PRODUCT_STATUS.SOLD_OUT,
    types: PRODUCT_TYPE.GEMSTONE,
    quantity: 9195,
    price: 641.2,
    brand: 'Jennie Cooper'
  },
  {
    id: '4',
    name: 'The Walt Disney',
    status: PRODUCT_STATUS.AVAILABLE,
    types: PRODUCT_TYPE.METAL,
    quantity: 3128,
    price: 510.3,
    brand: 'Philip Steward'
  },
  {
    id: '5',
    name: 'Mitsubishi',
    status: PRODUCT_STATUS.AVAILABLE,
    types: PRODUCT_TYPE.RING,
    quantity: 9892,
    price: 510.3,
    brand: 'Jorge Black'
  },
  {
    id: '6',
    name: 'IBM',
    status: PRODUCT_STATUS.SOLD_OUT,
    types: PRODUCT_TYPE.GOLD,
    quantity: 9011,
    price: 845.59,
    brand: 'Gladys Jones'
  }
] as Product[];

export { productColumns, productData };
