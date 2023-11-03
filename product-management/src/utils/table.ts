// Types
import { Product } from '@types';

export const filterItemInArray = (data: string[], items: string[]) =>
  data.filter((item: string) => ![...items].includes(item));

export const formatProductResponse = (productList: Product[]) =>
  productList?.map((product) => ({
    id: product.id,
    name: product.name,
    status: product.status,
    types: product.types,
    quantity: product.quantity,
    brand: product.brand,
    price: product.price
  }));
