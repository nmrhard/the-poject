import { getUserAuthData } from 'entities/User';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = Object.values(routeConfig).filter((route) => {
    if (route.authOnly && !isAuth) {
      return false;
    }

    return true;
  });

  return (
    <React.Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className='page-wrapper'>{element}</div>}
          />
        ))}
      </Routes>
    </React.Suspense>
  );
};

export { AppRouter };
