// Libraries
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FC, FormEvent, useRef } from 'react';

import { Box, Button, HStack } from '@chakra-ui/react';

// Constant
import { COLORS, ROUTES } from '@constants';

// Utils
import { convertPxToRem } from '@utils/index';

// Components
import FormProduct from '@components/form';

// Types
import { Product } from '@types';

// Constants
import { MOCKED_PRODUCT_VALUE_DEFAULT } from '@constants';

export interface IFormProductProps {
  product?: Product;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  handleBack?: (e: FormEvent<HTMLFormElement>) => void;
}

export const FormDetail: FC<IFormProductProps> = ({ product }) => {
  const { handleSubmit, register, formState, watch } = useForm<IFormProductProps>({
    defaultValues: {
      product: product
    },
    mode: 'onChange'
  });

  const navigate = useNavigate();

  const { isSubmitting, errors, dirtyFields } = formState;

  const price = useRef({});
  const quantity = useRef({});
  price.current = watch('product.price', 0);
  quantity.current = watch('product.quantity', 0);
  const isEmptyPrice = price.current.toString() == '';
  const isEmptyQuantity = quantity.current.toString() == '';

  const disableBtnSubmit =
    !dirtyFields.product?.name ||
    !dirtyFields.product?.brand ||
    !!errors.product?.name?.message ||
    !!errors.product?.brand?.message ||
    !!errors.product?.price?.message ||
    !!errors.product?.quantity?.message ||
    isEmptyPrice ||
    isEmptyQuantity;

  const onSubmit = (data: IFormProductProps) => {
    console.log(data);
  };

  const handleBack = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <Box
      data-testid='form-detail'
      w='full'
      maxW={convertPxToRem(432)}
    >
      <FormProduct
        product={MOCKED_PRODUCT_VALUE_DEFAULT}
        register={register}
        formState={formState}
      />
      <HStack
        maxW={convertPxToRem(432)}
        justifyContent='space-between'
        mt={convertPxToRem(20)}
      >
        <Button
          mt={4}
          variant='outline'
          color={`${COLORS.BLACK}.500`}
          borderColor={`${COLORS.CONAL}.500`}
          size={{ base: 'md', sm: 'xl' }}
          fontWeight='semibold'
          onClick={handleBack}
          data-testid='click-to-home'
        >
          Back
        </Button>
        <Button
          mt={4}
          colorScheme={`${COLORS.MANIA}`}
          size={{ base: 'md', sm: 'xl' }}
          fontWeight='semibold'
          isLoading={isSubmitting}
          onClick={handleSubmit(onSubmit)}
          data-testid='click-save'
          isDisabled={disableBtnSubmit}
          style={{ cursor: disableBtnSubmit ? 'not-allowed' : 'pointer' }}
        >
          Save
        </Button>
      </HStack>
    </Box>
  );
};

export default FormDetail;
