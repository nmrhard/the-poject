/* eslint-disable implicit-arrow-linebreak */
import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
  () => import('./ArticleDetailsPage')
);
