// Libraries
import { create } from 'zustand';
import axios from 'axios';

// Constants
import { FETCH_STATUS, PRODUCTS_API } from '@constants';

// types
import { Product } from '@types';

interface ProductState {
  product: Product | null;
  status: FETCH_STATUS;
  getProduct: () => void;
}

const productStore = create<ProductState>((set) => ({
  product: null,
  status: FETCH_STATUS.INIT,

  getProduct: async () => {
    try {
      set({ status: FETCH_STATUS.LOADING });
      const response = await axios.get(PRODUCTS_API, {
        headers: { 'content-type': 'application/json' }
      });
      set({ product: response.data });
    } catch (e) {
      // Handle error
      set({ status: FETCH_STATUS.ERROR });
    }
  }
}));

export default productStore;
