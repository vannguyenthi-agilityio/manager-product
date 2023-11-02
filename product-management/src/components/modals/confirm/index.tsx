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
import { COLORS } from '@constants';

// Components
import { DeleteIcon } from '@components/common/Icons';

// Types
import { Product } from '@types';

interface ICreateProductProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
  product?: Product;
  title?: string;
  content?: string;
  type?: string;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

export interface IFormProductProps {
  product?: Product;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  handleBack?: (e: FormEvent<HTMLFormElement>) => void;
}

const CreateProductModal = ({
  isOpen = true,
  onClose,
  onClick,
  product,
  title = 'Ooops',
  content = 'Something went wrong',
  type = 'waring'
}: ICreateProductProps) => {
  const { handleSubmit, formState } = useForm<IFormProductProps>({
    defaultValues: {
      product: product
    },
    mode: 'onChange'
  });

  const onSubmit = (data: IFormProductProps) => {
    onClick();
    console.log(data);
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
          {type === 'delete' && (
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
            size={type === 'waring' ? 'full' : 'lg'}
            fontWeight='semibold'
            isLoading={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            data-testid='click-confirm'
          >
            {type === 'waring' ? 'Close' : 'Delete'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateProductModal;
