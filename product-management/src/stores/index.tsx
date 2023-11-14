// Libraries
import { create } from 'zustand';

// Constants
import { FETCH_STATUS, MESSAGES_ERROR, MOCKED_PRODUCT_VALUE_DEFAULT } from '@constants';

// types
import { Product } from '@types';

// services
import { getProducts, addNewProduct, updateProduct } from '@services/index';

interface ProductState {
  productsData: Product[];
  newProductData: Product;
  status: FETCH_STATUS;
  getProducts: () => void;
  addNewProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
}

const productStore = create<ProductState>((set) => ({
  productsData: [],
  newProductData: MOCKED_PRODUCT_VALUE_DEFAULT,
  status: FETCH_STATUS.INIT,

  getProducts: async () => {
    try {
      set({ status: FETCH_STATUS.LOADING });
      const productsData = await getProducts();
      set({ productsData: productsData });
    } catch (error) {
      // Handle error
      set({ status: FETCH_STATUS.ERROR });
      throw new Error(MESSAGES_ERROR.FAIL_TO_FETCH_API);
    }
  },

  addNewProduct: async (product: Product) => {
    try {
      set({ status: FETCH_STATUS.LOADING });
      const productNewData = await addNewProduct(product);
      set((state) => ({ ...state, productsData: [...state.productsData, productNewData] }));
    } catch (error) {
      // Handle error
      set({ status: FETCH_STATUS.ERROR });
      throw new Error(MESSAGES_ERROR.ADD_NEW_PRODUCT_FAIL);
    }
  },

  updateProduct: async (product: Product) => {
    try {
      set({ status: FETCH_STATUS.LOADING });
      updateProduct(product.id, product);
      set((state) => ({
        productsData: state.productsData.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              name: product.name,
              status: product.status,
              types: product.types,
              quantity: product.quantity,
              brand: product.brand,
              price: product.price
            };
          } else {
            return item;
          }
        })
      }));
    } catch (error) {
      // Handle error
      set({ status: FETCH_STATUS.ERROR });
      throw new Error(MESSAGES_ERROR.UPDATE_PRODUCT_FAIL);
    }
  }
}));

export default productStore;
