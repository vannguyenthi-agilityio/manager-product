import { ChakraProvider, Box, Text, Code, VStack, Grid, Button } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

// Themes
import CHAKRA_THEME from '../src/themes';

// Font family
import Fonts from '../src/components/fonts';

// Constants
import { COLORS } from '@constants';

const App = () => {
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
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
