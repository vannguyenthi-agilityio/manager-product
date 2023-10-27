import { PRODUCT_STATUS, PRODUCT_TYPE } from '@constants'

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  status: PRODUCT_STATUS;
  type: PRODUCT_TYPE;
}
