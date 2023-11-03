import { useContext } from 'react';

// Components Chakra
import { Button, Heading, Flex, Box } from '@chakra-ui/react';

// Utils
import { convertPxToRem, formatProductResponse } from '@utils/index';

// Components
import Table from '@components/table';

// Mocks
import { productColumns } from '@constants/mocks/table';

// Types
import { Product } from '@types';

// Constants
import { COLORS } from '@constants';

// Layouts
import PageLayout from '@layouts/PageLayout';

// context
import { ProductContext } from '@contexts/ProductProvider';

const HomePage = () => {
  const { products } = useContext(ProductContext);

  const formatProductData = formatProductResponse(products) as Product[];

  const handleSearchClick = () => {
    console.log('handleSearchClick');
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
          >
            Add New Product
          </Button>
        </Flex>
        <Table
          columns={productColumns}
          data={formatProductData}
          filteredItems={['id']}
          onSearchClick={handleSearchClick}
        />
      </Box>
    </PageLayout>
  );
};

export default HomePage;
