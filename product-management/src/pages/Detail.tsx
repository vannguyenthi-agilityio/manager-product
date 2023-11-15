import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components Chakra
import { Heading, Flex } from '@chakra-ui/react';

// Utils
import { convertPxToRem } from '@utils/index';

// Components
import FormDetail from '@components/form/detail';
import Loading from '@components/common/Loading';

// Constants
import { COLORS, MESSAGES_ERROR, POPUP_STATUS } from '@constants';

// Layouts
import PageLayout from '@layouts/PageLayout';

//Stories
import productStore from '@stores/index';

// Hooks
import { useCustomPopup } from '@hooks/useCustomPopup';

const DetailPage = () => {
  const { getProduct, isLoading, messageError, productData } = productStore();
  const { id } = useParams();
  const popup = useCustomPopup();

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  useEffect(() => {
    if (messageError) {
      popup(MESSAGES_ERROR.FAIL_TO_FETCH_API, POPUP_STATUS.ERROR);
    }
  }, [messageError]);

  return (
    <PageLayout>
      <Flex
        overflowX='auto'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
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
              {productData.name}
            </Heading>
            <FormDetail product={productData} />
          </>
        )}
      </Flex>
    </PageLayout>
  );
};

export default DetailPage;
