/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable quote-props */
/* eslint-disable operator-linebreak */
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleDetailsPageRecommendationSchema } from '../types/ArticleDetailsPageRecommendationSchema';
import { fetchArticlesRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleDetailsPageRecommendations =
  recommendationAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPageRecommendation ||
      recommendationAdapter.getInitialState()
  );

const articleDetailsPageRecommendationSlice = createSlice({
  name: 'articleDetailsPageRecommendationSlice',
  initialState:
    recommendationAdapter.getInitialState<ArticleDetailsPageRecommendationSchema>(
      {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
      }
    ),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;

        recommendationAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecommendationReducers } =
  articleDetailsPageRecommendationSlice;
