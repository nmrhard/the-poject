import * as React from 'react';
import { routeConfig, AppRoutesProps } from 'shared/config/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'shared/ui/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = React.useCallback((route: AppRoutesProps) => {
    const element = <div className='page-wrapper'>{route.element}</div>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return (
    <React.Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </React.Suspense>
  );
};

export { AppRouter };
