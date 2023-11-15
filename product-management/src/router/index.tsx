import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// constants
import { ROUTES } from '@constants/routes';

// Components
import Loading from '@components/common/Loading';

// Pages
const HomePage = lazy(() => import('@pages/Home'));
const DetailPage = lazy(() => import('@pages/Detail'));

const Router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    )
  },
  {
    path: ROUTES.DETAIL,
    element: (
      <Suspense fallback={<Loading />}>
        <DetailPage />
      </Suspense>
    )
  }
]);

export default Router;
