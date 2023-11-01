// Libraries
import { FormState, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';
import { Box, FormControl, FormLabel, FormErrorMessage, HStack, Input } from '@chakra-ui/react';

// Utils
import { convertPxToRem, convertStringToCapitalize, isEmpty } from '@utils/index';

// Components
import { Select } from '@components/common/Select';

// Types
import { Product } from '@types';

// Constants
import { PRODUCT_STATUS, PRODUCT_TYPE, MESSAGES_ERROR } from '@constants';

export interface IProductProps {
  product?: Product;
}

export interface IFormProductProps {
  product?: Product;
  register: UseFormRegister<IProductProps>;
  formState: FormState<IProductProps>;
}

export const FormProduct: FC<IFormProductProps> = ({ register, formState }) => {
  const status = Object.values(PRODUCT_STATUS).map((status) => ({
    label: convertStringToCapitalize(status === PRODUCT_STATUS.SOLD_OUT ? 'Sold Out' : status),
    value: status
  }));

  const types = Object.values(PRODUCT_TYPE).map((type) => ({
    label: convertStringToCapitalize(type),
    value: type
  }));

  return (
    <Box
      data-testid='form-product'
      w='full'
      maxW={convertPxToRem(432)}
    >
      <FormControl
        isInvalid={!isEmpty(formState?.errors?.product?.name)}
        maxW={convertPxToRem(432)}
        mt={convertPxToRem(20)}
      >
        <FormLabel
          htmlFor='name'
          fontWeight='bold'
          fontSize='sm'
        >
          Name
        </FormLabel>
        <Input
          id='name'
          placeholder='Enter Name...'
          {...register('product.name', {
            required: MESSAGES_ERROR.NAME_REQUIRED,
            minLength: { value: 4, message: MESSAGES_ERROR.NAME_MIN_LENGTH }
          })}
          data-testid='input-name'
        />
        <FormErrorMessage data-testid='error-message-input-name'>
          {formState?.errors?.product?.name && formState?.errors?.product?.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={!isEmpty(formState?.errors?.product?.quantity)}
        maxW={convertPxToRem(432)}
        mt={convertPxToRem(20)}
      >
        <FormLabel
          htmlFor='quantity'
          fontWeight='bold'
          fontSize='sm'
        >
          Quantity
        </FormLabel>
        <Input
          id='quantity'
          placeholder='Quantity'
          {...register('product.quantity', {
            required: MESSAGES_ERROR.QUANTITY_REQUIRED
          })}
          data-testid='input-quantity'
        />
        <FormErrorMessage data-testid='error-message-input-quantity'>
          {formState?.errors?.product?.quantity && formState?.errors?.product?.quantity.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={!isEmpty(formState?.errors?.product?.price)}
        maxW={convertPxToRem(432)}
        mt={convertPxToRem(20)}
      >
        <FormLabel
          htmlFor='price'
          fontWeight='bold'
          fontSize='sm'
        >
          Price
        </FormLabel>
        <Input
          id='price'
          placeholder='Price'
          {...register('product.price', {
            required: MESSAGES_ERROR.PRICE_REQUIRED
          })}
          data-testid='input-price'
        />
        <FormErrorMessage data-testid='error-message-input-price'>
          {formState?.errors?.product?.price && formState?.errors?.product?.price.message}
        </FormErrorMessage>
      </FormControl>
      <HStack
        maxW={convertPxToRem(432)}
        justifyContent='space-between'
        mt={convertPxToRem(20)}
      >
        <FormControl
          isInvalid={!isEmpty(formState?.errors?.product?.price)}
          maxW={convertPxToRem(200)}
        >
          <FormLabel
            htmlFor='status'
            fontWeight='bold'
            fontSize='sm'
          >
            Status
          </FormLabel>
          <Select
            id='status'
            {...register('product.status')}
            options={status}
            defaultValue={status[0].value}
          />
        </FormControl>
        <FormControl
          isInvalid={!isEmpty(formState?.errors?.product?.type)}
          style={{ maxWidth: '200px' }}
        >
          <FormLabel
            htmlFor='status'
            fontWeight='bold'
            fontSize='sm'
          >
            Types
          </FormLabel>
          <Select
            id='type'
            {...register('product.types')}
            options={types}
            defaultValue={types[0].value}
          />
        </FormControl>
      </HStack>
      <FormControl
        isInvalid={!isEmpty(formState?.errors?.product?.brand)}
        maxW={convertPxToRem(432)}
        mt={convertPxToRem(20)}
      >
        <FormLabel
          htmlFor='name'
          fontWeight='bold'
          fontSize='sm'
        >
          Brand
        </FormLabel>
        <Input
          id='brand'
          placeholder='Enter Brand...'
          {...register('product.brand', {
            required: MESSAGES_ERROR.BRAND_REQUIRED,
            minLength: { value: 4, message: MESSAGES_ERROR.NAME_MIN_LENGTH }
          })}
          data-testid='input-brand'
        />
        <FormErrorMessage data-testid='error-message-input-brand'>
          {formState.errors?.product?.brand && formState.errors?.product?.brand.message}
        </FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default FormProduct;
