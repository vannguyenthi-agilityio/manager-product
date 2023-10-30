import { ChakraProvider, Box, Text, Link, VStack, Code, Grid } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

// Themes
import CHAKRA_THEME from '../src/themes';

// Font family
import Fonts from '../src/components/fonts';

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
          <VStack spacing={8}>
            <Text>
              Edit <Code fontSize='xl'>src/App.tsx</Code> and save to reload.
            </Text>
            <Link
              color='teal.500'
              href='https://chakra-ui.com'
              fontSize='2xl'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
