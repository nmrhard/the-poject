import { NotFoundPage } from 'pages/NotFound';
import * as React from 'react';
import { RouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('pages/Home'));
const About = React.lazy(() => import('pages/About'));

export enum AppRouter {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: '/',
  [AppRouter.ABOUT]: '/about',
  [AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouter, RouteProps> = {
  [AppRouter.MAIN]: {
    path: RoutePath.main,
    element: <Home />,
  },
  [AppRouter.ABOUT]: {
    path: RoutePath.about,
    element: <About />,
  },
  [AppRouter.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
