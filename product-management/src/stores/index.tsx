// Libraries
import { create } from 'zustand';

// Constants
import { FETCH_STATUS, MESSAGES_ERROR } from '@constants';

// types
import { Product } from '@types';

// services
import { getProducts, addNewProduct, updateProduct, deleteProduct, getProductById } from '@services/index';

interface ProductState {
  productsData: Product[];
  productData: Product;
  isLoading: boolean;
  messageError: string;
  valueFilter: string;
  getProducts: () => void;
  getProduct: (id: string) => void;
  addNewProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
  filterProduct: (valueFilter: string, dataFilter?: Product[]) => void;
}

const productStore = create<ProductState>((set) => ({
  productsData: [],
  productData: {} as Product,
  isLoading: false,
  messageError: '',
  valueFilter: 'name',
  inputFilter: '',
  status: FETCH_STATUS.INIT,

  getProducts: async () => {
    set({ isLoading: true });
    try {
      const productsData = await getProducts();
      set({ productsData: productsData, isLoading: false });
    } catch (error) {
      // Handle error
      set({ isLoading: false, messageError: MESSAGES_ERROR.FAIL_TO_FETCH_API });
      throw new Error(MESSAGES_ERROR.FAIL_TO_FETCH_API);
    }
  },

  getProduct: async (id: string) => {
    set({ isLoading: true });
    try {
      const productData = await getProductById(id);
      if (productData) {
        set({ productData: productData, isLoading: false });
      }
    } catch (error) {
      // Handle error
      set({ isLoading: false, messageError: MESSAGES_ERROR.FAIL_TO_FETCH_API });
      throw new Error(MESSAGES_ERROR.FAIL_TO_FETCH_API);
    }
  },

  addNewProduct: async (product: Product) => {
    set({ isLoading: true });
    try {
      const productNewData = await addNewProduct(product);
      set((state) => ({ ...state, productsData: [...state.productsData, productNewData], isLoading: false }));
    } catch (error) {
      // Handle error
      set({ isLoading: false, messageError: MESSAGES_ERROR.ADD_NEW_PRODUCT_FAIL });
      throw new Error(MESSAGES_ERROR.ADD_NEW_PRODUCT_FAIL);
    }
  },

  updateProduct: async (product: Product) => {
    set({ isLoading: true });
    try {
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
        }),
        isLoading: false
      }));
    } catch (error) {
      // Handle error
      set({ isLoading: false, messageError: MESSAGES_ERROR.UPDATE_PRODUCT_FAIL });
      throw new Error(MESSAGES_ERROR.UPDATE_PRODUCT_FAIL);
    }
  },

  deleteProduct: async (product: Product) => {
    set({ isLoading: true });
    try {
      await deleteProduct(product.id);
      set((state) => ({
        productsData: state.productsData.filter((item) => item.id !== product.id)
      }));
    } catch (error) {
      // Handle error
      set({ isLoading: false, messageError: MESSAGES_ERROR.REMOVE_PRODUCT_FAIL });
      throw new Error(MESSAGES_ERROR.REMOVE_PRODUCT_FAIL);
    }
  },

  filterProduct: (valueFilter: string, dataFilter?: Product[]) => {
    set({ valueFilter: valueFilter });
    if (dataFilter) {
      set({ productsData: dataFilter });
    }
  }
}));

export default productStore;
