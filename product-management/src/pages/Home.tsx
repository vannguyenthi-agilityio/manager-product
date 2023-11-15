import { useState, useEffect } from 'react';

// Components Chakra
import { Button, Heading, Flex, Box, useDisclosure } from '@chakra-ui/react';

// Utils
import { convertPxToRem, formatProductResponse } from '@utils/index';

// Components
import Table from '@components/table';
import Loading from '@components/common/Loading';
import ProductModal from '@components/modals/form';
import ConfirmModal from '@components/modals/confirm';

// Hooks
import { useCustomPopup } from '@hooks/useCustomPopup';

// Mocks
import { productColumns } from '@constants/mocks/table';

// Types
import { Product } from '@types';

// Constants
import {
  COLORS,
  MESSAGES_ERROR,
  POPUP_STATUS,
  MODAL_TYPE,
  MODAL_STATUS,
  MOCKED_PRODUCT_VALUE_DEFAULT
} from '@constants';

// Layouts
import PageLayout from '@layouts/PageLayout';

//Stories
import productStore from '@stores/index';

const HomePage = () => {
  const { getProducts, productsData, isLoading, messageError } = productStore();
  const [product, setProduct] = useState<Product>();
  const popup = useCustomPopup();

  const { onOpen: onOpenPurchase, isOpen: isOpenPurchase, onClose: onClosePurchase } = useDisclosure();

  const {
    isOpen: isOpenProductEditModal,
    onOpen: onOpenProductEditModal,
    onClose: onCloseProductEditModal
  } = useDisclosure();

  const { isOpen: isOpenConfirmModal, onOpen: onOpenConfirmModal, onClose: onCloseConfirmModal } = useDisclosure();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (messageError) {
      popup(MESSAGES_ERROR.FAIL_TO_FETCH_API, POPUP_STATUS.ERROR);
    }
  }, [messageError]);

  const formatProductData = formatProductResponse(productsData) as Product[];

  const handleActionProduct = (product: Product, action: string) => {
    if (product) {
      setProduct(product);
      if (action === MODAL_TYPE.EDIT) {
        onOpenProductEditModal();
      } else {
        onOpenConfirmModal();
      }
    }
  };

  return (
    <PageLayout>
      <Box overflowX='auto'>
        <Heading
          fontSize={{
            base: convertPxToRem(20),
            sm: convertPxToRem(30),
            md: convertPxToRem(50),
            lg: convertPxToRem(60)
          }}
          mb={{ base: convertPxToRem(20), sm: convertPxToRem(30), md: convertPxToRem(50), lg: convertPxToRem(60) }}
          textAlign='left'
          color={`${COLORS.BLACK}.200`}
        >
          Managermance
        </Heading>
        <Flex justifyContent='right'>
          <Button
            size='md'
            variant='outline'
            mb={convertPxToRem(30)}
            onClick={onOpenPurchase}
          >
            Add New Product
          </Button>
        </Flex>
        {isLoading ? (
          <Loading />
        ) : (
          <Table
            columns={productColumns}
            data={formatProductData}
            filteredItems={['id']}
            onActionProduct={handleActionProduct}
          />
        )}
        <ProductModal
          isOpen={isOpenPurchase}
          onClose={onClosePurchase}
          product={MOCKED_PRODUCT_VALUE_DEFAULT}
        />
        {productsData && (
          <ProductModal
            isOpen={isOpenProductEditModal}
            onClose={onCloseProductEditModal}
            product={product}
            type={MODAL_TYPE.EDIT}
          />
        )}
        <ConfirmModal
          isOpen={isOpenConfirmModal}
          onClose={onCloseConfirmModal}
          product={product}
          status={MODAL_STATUS.CONFIRM}
          type={MODAL_TYPE.DELETE}
          title='Delete Product'
          content='Are you sure you want delete this product? This action cannot be undone'
        />
      </Box>
    </PageLayout>
  );
};

export default HomePage;
