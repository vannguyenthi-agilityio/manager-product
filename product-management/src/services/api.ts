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
  const url = `${PRODUCTS_API}/${id}`;

  const response = await axios.get(url, {
    headers: { 'content-type': 'application/json' }
  });
  return response.data;
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(PRODUCTS_API, {
      headers: { 'content-type': 'application/json' }
    });

    return response.data;
  } catch (error) {
    throw new Error(MESSAGES_ERROR.FAIL_TO_FETCH_API);
  }
};

/**
 * Adds a product to list.
 * @param {Product} product - The product to add to the list.
 * @returns {Promise<Product>} - The response from the API.
 * @throws {Error} - If there's an error adding the product to the list.
 */
export const addNewProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await axios.post(PRODUCTS_API, product);
    return response.data;
  } catch (error) {
    throw new Error(MESSAGES_ERROR.ADD_NEW_PRODUCT_FAIL);
  }
};

/**
 * Updates an product.
 * @param {string} id - The ID of the product to update.
 * @param {Partial<Product>} updatedData - The updated data for the product.
 * @param {string} url - The URL of the API endpoint.
 * @returns {Promise<Product>} - The response from the API.
 * @throws {Error} - If there's an error updating the product.
 */
export const updateProduct = async (id: string, updatedData: Partial<Product>): Promise<Product> => {
  try {
    const urlUpdateProduct = `${PRODUCTS_API}/${id}`;
    const response = await axios.put(urlUpdateProduct, updatedData, {
      headers: { 'content-type': 'application/json' }
    });
    return response.data;
  } catch (error) {
    throw new Error(MESSAGES_ERROR.UPDATE_PRODUCT_FAIL);
  }
};

/**
 * Delete a product.
 * @param {string} id - The ID of the product to delete.
 * @returns {Promise<Product>} - The response from the API.
 * @throws {Error} - If there's an error deleting the product.
 * */
export const deleteProduct = async (id: string): Promise<Product> => {
  try {
    const url = `${PRODUCTS_API}/${id}`;
    const response = await axios.delete(url, {
      headers: { 'content-type': 'application/json' }
    });

    return response.data;
  } catch (error) {
    throw new Error(MESSAGES_ERROR.REMOVE_PRODUCT_FAIL);
  }
};
