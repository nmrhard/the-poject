/* eslint-disable implicit-arrow-linebreak */
import { StateSchema } from 'app/provider/StoreProvider';

export const getArticleRecommendationIsLoading = (state: StateSchema) =>
  state.articleDetailsPageRecommendation?.isLoading;
export const getArticleRecommendationError = (state: StateSchema) =>
  state.articleDetailsPageRecommendation?.error;
