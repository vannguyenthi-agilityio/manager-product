export const URL_API = {
  BASE_URL: process.env.VITE_BASE_URL,
  DATA_URL: 'data'
};

const PRODUCTS_API = `${URL_API.BASE_URL}${URL_API.DATA_URL}`;
export { PRODUCTS_API };
