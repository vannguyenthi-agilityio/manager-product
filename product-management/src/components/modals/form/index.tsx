import { useForm } from 'react-hook-form';
import { FormEvent, useRef } from 'react';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

// Utils
import { convertPxToRem, formatProduct } from '@utils/index';

// Constants
import { COLORS, MESSAGES_ERROR, POPUP_STATUS, MODAL_TYPE } from '@constants';

// Components
import FormProduct from '@components/form';
import { usePopup } from '@components/common/Popup/usePopup';

// Types
import { Product } from '@types';

//Stories
import productStore from '@stores/index';

interface ICreateProductProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
  type?: MODAL_TYPE;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

export interface IFormProductProps {
  product?: Product;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const ProductModal = ({ type = MODAL_TYPE.CREATE, isOpen = true, onClose, product }: ICreateProductProps) => {
  const { handleSubmit, register, formState, watch, reset } = useForm<IFormProductProps>({
    defaultValues: {
      product: product
    },
    mode: 'onChange'
  });

  const { errors, dirtyFields } = formState;

  const popup = usePopup();

  const price = useRef({});
  const quantity = useRef({});
  price.current = watch('product.price', 0);
  quantity.current = watch('product.quantity', 0);
  const isEmptyPrice = price.current.toString() == '';
  const isEmptyQuantity = quantity.current.toString() == '';

  const isDirtyInputRequired =
    type === MODAL_TYPE.CREATE
      ? !dirtyFields.product?.name || !dirtyFields.product?.brand
      : !dirtyFields.product?.name && !dirtyFields.product?.brand;

  const disableBtnSubmit =
    isDirtyInputRequired ||
    !!errors.product?.name?.message ||
    !!errors.product?.brand?.message ||
    !!errors.product?.price?.message ||
    !!errors.product?.quantity?.message ||
    isEmptyPrice ||
    isEmptyQuantity;

  const { addNewProduct, isLoading, messageError, updateProduct } = productStore();
  const { isSubmitting } = formState;

  const onSubmit = (data: IFormProductProps) => {
    if (data.product) {
      const dataFormat = formatProduct(data.product);
      if (type === MODAL_TYPE.CREATE) {
        addNewProduct(dataFormat);
        if (isLoading && messageError) {
          popup(messageError, POPUP_STATUS.ERROR);
        } else {
          onClose();
          popup(MESSAGES_ERROR.ADD_NEW_PRODUCT_SUCCESS, POPUP_STATUS.SUCCESS);
        }
      } else {
        if (product) {
          const dataProductUpdated = {
            ...product,
            name: data.product.name,
            status: data.product.status,
            types: data.product.types,
            quantity: data.product.quantity,
            brand: data.product.brand,
            price: data.product.price
          };
          updateProduct(dataProductUpdated);
        }
        if (isLoading && messageError) {
          popup(MESSAGES_ERROR.UPDATE_PRODUCT_FAIL, POPUP_STATUS.ERROR);
        } else {
          onClose();
          popup(MESSAGES_ERROR.UPDATE_PRODUCT_SUCCESS, POPUP_STATUS.SUCCESS);
        }
      }
    }
  };

  const handleCancelModal = () => {
    reset();
    onClose();
  };

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
          {type === MODAL_TYPE.CREATE ? 'Add New Product' : 'Product Information'}
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
            onClick={handleCancelModal}
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

export default ProductModal;
