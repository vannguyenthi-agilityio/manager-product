import { useForm } from 'react-hook-form';
import { FormEvent } from 'react';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text
} from '@chakra-ui/react';

// Helpers
import { convertPxToRem } from '@utils/common';

// Constants
import { COLORS, MODAL_TYPE, MODAL_STATUS, POPUP_STATUS, MESSAGES_ERROR } from '@constants';

// Components
import { DeleteIcon } from '@components/common/Icons';
import { useCustomPopup } from '@components/common/Popup/useCustomPopup';

// Types
import { Product } from '@types';

//Stories
import productStore from '@stores/index';

interface ICreateProductProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
  title?: string;
  content?: string;
  status?: MODAL_STATUS;
  type?: MODAL_TYPE;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

export interface IFormProductProps {
  product?: Product;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  handleBack?: (e: FormEvent<HTMLFormElement>) => void;
}

const ConfirmModal = ({
  isOpen = true,
  onClose,
  product,
  title = 'Ooops',
  content = 'Something went wrong',
  status = MODAL_STATUS.WARNING,
  type = MODAL_TYPE.WRONG
}: ICreateProductProps) => {
  const { handleSubmit, formState } = useForm<IFormProductProps>({
    defaultValues: {
      product: product
    },
    mode: 'onChange'
  });

  const { isLoading, messageError, deleteProduct } = productStore();
  const popup = useCustomPopup();

  const onSubmit = () => {
    if (product) {
      deleteProduct(product);
      if (isLoading && messageError) {
        popup(messageError, POPUP_STATUS.ERROR);
      } else {
        onClose();
        popup(MESSAGES_ERROR.REMOVE_PRODUCT_SUCCESS, POPUP_STATUS.SUCCESS);
      }
    }
    onClose();
  };

  const { isSubmitting } = formState;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'xs', sm: 'sm', md: 'md' }}
    >
      <ModalOverlay />
      <ModalContent data-testid='confirm-modal'>
        <ModalHeader
          color={`${COLORS.BLACK}.500`}
          fontWeight='semibold'
          fontSize='xl'
          mb={convertPxToRem(10)}
        >
          <Stack>
            <DeleteIcon />
            <Text>{title}</Text>
          </Stack>
        </ModalHeader>
        <ModalBody
          fontWeight='normal'
          color={`${COLORS.GREY}.300`}
        >
          {content}
        </ModalBody>
        <ModalFooter
          justifyContent='right'
          gap={convertPxToRem(15)}
        >
          {type === MODAL_TYPE.DELETE && (
            <Button
              mt={1}
              variant='outline'
              color={`${COLORS.BLACK}.500`}
              borderColor={`${COLORS.CONAL}.500`}
              size='lg'
              fontWeight='semibold'
              onClick={onClose}
              data-testid='click-to-close'
            >
              Cancel
            </Button>
          )}
          <Button
            mt={1}
            colorScheme={`${COLORS.CORAL}`}
            size={status === MODAL_STATUS.WARNING ? 'full' : 'lg'}
            fontWeight='semibold'
            isLoading={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            data-testid='click-confirm'
          >
            {status === MODAL_STATUS.WARNING ? 'Close' : 'Delete'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmModal;
