import { NotFoundPage } from 'pages/NotFound';
import { ProfilePage } from 'pages/Profile';
import * as React from 'react';
import { RouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('pages/Home'));
const About = React.lazy(() => import('pages/About'));

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRouter {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: '/',
  [AppRouter.ABOUT]: '/about',
  [AppRouter.PROFILE]: '/profile',
  [AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouter, AppRoutesProps> = {
  [AppRouter.MAIN]: {
    path: RoutePath.main,
    element: <Home />,
  },
  [AppRouter.ABOUT]: {
    path: RoutePath.about,
    element: <About />,
  },
  [AppRouter.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRouter.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
