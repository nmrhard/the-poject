/* eslint-disable operator-linebreak */
import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageRecommendationReducers } from './articleDetailsPageRecommendationSlice';
import { articleDetailsCommentsReducers } from './articleDetailsCommentSlice';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recommendation: articleDetailsPageRecommendationReducers,
    comments: articleDetailsCommentsReducers,
  });
