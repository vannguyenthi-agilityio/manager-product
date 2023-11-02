import { useForm } from 'react-hook-form';
import { FormEvent, useRef } from 'react';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

// Helpers
import { convertPxToRem } from '@utils/common';

// Constants
import { COLORS } from '@constants';

// Components
import FormProduct from '@components/form';

// Types
import { Product } from '@types';

interface ICreateProductProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
  product?: Product;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

export interface IFormProductProps {
  product?: Product;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const CreateProductModal = ({ isOpen = true, onClose, onClick, product }: ICreateProductProps) => {
  const { handleSubmit, register, formState, watch } = useForm<IFormProductProps>({
    defaultValues: {
      product: product
    },
    mode: 'onChange'
  });

  const { errors, dirtyFields } = formState;

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
    // TODO: will integration data
    onClick();
    console.log(data);
  };

  const { isSubmitting } = formState;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'xs', sm: 'sm', md: 'lg' }}
    >
      <ModalOverlay />
      <ModalContent data-testid='create-product-modal'>
        <ModalHeader
          color={`${COLORS.BLACK}.500`}
          fontWeight='semibold'
          fontSize='xl'
          mb={convertPxToRem(20)}
        >
          Add New Product
        </ModalHeader>
        <ModalBody>
          <FormProduct
            product={product}
            register={register}
            formState={formState}
          />
        </ModalBody>
        <ModalFooter
          justifyContent='right'
          gap={convertPxToRem(20)}
        >
          <Button
            mt={4}
            variant='outline'
            color={`${COLORS.BLACK}.500`}
            borderColor={`${COLORS.CONAL}.500`}
            size='sm'
            fontWeight='semibold'
            onClick={onClose}
            data-testid='click-to-close'
          >
            Cancel
          </Button>
          <Button
            mt={4}
            colorScheme={`${COLORS.MANIA}`}
            size='sm'
            fontWeight='semibold'
            isLoading={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            data-testid='click-confirm'
            isDisabled={disableBtnSubmit}
            style={{ cursor: disableBtnSubmit ? 'not-allowed' : 'pointer' }}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateProductModal;
