import { ChakraProvider, Box, Text, Code, VStack, Grid, Button } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

// Themes
import CHAKRA_THEME from '@themes/index';

// Font family
import Fonts from '@components/fonts';

// Constants
import { COLORS } from '@constants';
import { PRODUCT_STATUS } from '@constants';

// Components
import { CloseIcon, DeleteIcon } from '@components/common/Icons';
import { Select } from '@components/common/Select';

// Utils
import { convertStringToCapitalize } from '@utils/index';

const App = () => {
  const status = Object.values(PRODUCT_STATUS).map((status) => ({
    label: convertStringToCapitalize(status === PRODUCT_STATUS.SOLD_OUT ? 'Sold Out' : status),
    value: status
  }));

  return (
    <ChakraProvider theme={CHAKRA_THEME}>
      <Fonts />
      <Box
        textAlign='center'
        fontSize='xl'
      >
        <Grid
          minH='100vh'
          p={3}
        >
          <ColorModeSwitcher justifySelf='flex-end' />
          <Text>
            Edit <Code fontSize='xl'>src/App.tsx</Code> and save to reload.
          </Text>
          <VStack spacing={8}>
            <Button
              size='lg'
              variant='solid'
            >
              Submit
            </Button>
            <Button
              size='xs'
              variant='outline'
              colorScheme='red'
            >
              Sold out
            </Button>
            <Button
              size='lg'
              variant='outline'
              color='black'
              borderColor={`${COLORS.CONAL}.500`}
            >
              Save
            </Button>
            <Button
              size='xs'
              variant='outline'
              colorScheme='mania'
            >
              Avaiable
            </Button>
            {/* Apply component Icon */}
            <CloseIcon />
            <DeleteIcon />
            {/* Apply component Select */}
            <Select
              label='Select'
              options={status}
            />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
