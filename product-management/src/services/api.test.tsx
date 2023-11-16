import axios from 'axios';
import { act } from '@testing-library/react';

// Services
import { addNewProduct } from '@services/index';

// Constants
import { MOCKED_PRODUCT_TESTING, PRODUCTS_API } from '@constants';

jest.spyOn(console, 'error').mockImplementation(() => {});

jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  post: jest.fn(),
  get: jest.fn(),
  delete: jest.fn()
}));

describe('Services API', () => {
  test('should check create new product when call addNewProduct', async () => {
    jest.useFakeTimers();
    axios.post = jest.fn().mockResolvedValue(MOCKED_PRODUCT_TESTING);

    act(async () => {
      await addNewProduct(MOCKED_PRODUCT_TESTING);
      jest.runOnlyPendingTimers();
    });

    expect(axios.post).toHaveBeenCalledWith(PRODUCTS_API, expect.objectContaining(MOCKED_PRODUCT_TESTING));
  });
});
