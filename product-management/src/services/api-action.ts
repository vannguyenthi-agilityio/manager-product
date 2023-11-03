import axios from 'axios';

// constants
import { MESSAGES_ERROR } from '@constants';

// types
import { Product } from '@types';

// constants
import { PRODUCTS_API } from '@constants';

/**
 * Get a product by its ID from the API.
 * @param {string} id - The ID of the product.
 * @returns {Promise<Product | null>} - The product with the specified ID, or null if not found.
 * @throws {Error} - If there's an error geting the product.
 */
export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const url = `${PRODUCTS_API}/${id}`;

    const response = await axios.get(url, {
      headers: { 'content-type': 'application/json' }
    });

    return response.data;
  } catch (error) {
    throw new Error(MESSAGES_ERROR.FAIL_TO_FETCH);
  }
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(PRODUCTS_API, {
      headers: { 'content-type': 'application/json' }
    });

    return response.data;
  } catch (error) {
    throw new Error(MESSAGES_ERROR.FAIL_TO_FETCH);
  }
};
