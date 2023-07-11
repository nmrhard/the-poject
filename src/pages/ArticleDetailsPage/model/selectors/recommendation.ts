/* eslint-disable implicit-arrow-linebreak */
import { StateSchema } from 'app/provider/StoreProvider';

export const getArticleRecommendationIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recommendation.isLoading;
export const getArticleRecommendationError = (state: StateSchema) =>
  state.articleDetailsPage?.recommendation.error;
