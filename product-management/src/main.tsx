import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// Themes
import CHAKRA_THEME from '@themes/index';

// Font family
import Fonts from '@components/fonts';

import Router from '@router/index';

// Styles
import 'src/styles/App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={CHAKRA_THEME}>
      <Fonts />
      <RouterProvider router={Router} />
    </ChakraProvider>
  </React.StrictMode>
);
