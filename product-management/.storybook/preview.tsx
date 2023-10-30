// Import the global style enabling classes
//import '../src/styles/App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import CHAKRA_THEME from '../src/themes';

// Font family
import Fonts from '../src/components/fonts';

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <ChakraProvider theme={CHAKRA_THEME}>
        <Fonts />
        <Story />
      </ChakraProvider>
    </BrowserRouter>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};
