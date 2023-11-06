import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

// constants
import { ROUTES } from '@constants/routes';
import ProductProvider from '@contexts/ProductProvider';

// Pages
const HomePage = lazy(() => import('@pages/Home'));

const Router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <ProductProvider>
        <HomePage />
      </ProductProvider>
    )
  }
]);

export default Router;
