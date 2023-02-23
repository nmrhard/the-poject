import * as React from 'react';
import { RouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('pages/Home'));
const About = React.lazy(() => import('pages/About'));

export enum AppRouter {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: '/',
  [AppRouter.ABOUT]: '/about',
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
};
