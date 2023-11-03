import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// Themes
import CHAKRA_THEME from '@themes/index';

// Font family
import Fonts from '@components/fonts';

// Styles
import 'src/styles/App.css';

// Contexts
import ProductProvider from '@contexts/ProductProvider';

// Pages
const HomePage = lazy(() => import('@pages/Home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProductProvider>
        <HomePage />
      </ProductProvider>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={CHAKRA_THEME}>
      <Fonts />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
