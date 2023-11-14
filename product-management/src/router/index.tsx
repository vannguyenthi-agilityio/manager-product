import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

// constants
import { ROUTES } from '@constants/routes';

// Pages
const HomePage = lazy(() => import('@pages/Home'));

const Router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />
  }
]);

export default Router;
