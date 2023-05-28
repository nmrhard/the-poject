/* eslint-disable quote-props */
/* eslint-disable operator-linebreak */
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoaded: false,
    error: undefined,
    ids: ['1', '2'],
    entities: {
      '1': {
        id: '1',
        text: 'Comment 1',
        user: {
          id: '1',
          username: 'User 1',
        },
      },
      '2': {
        id: '2',
        text: 'Comment 2',
        user: {
          id: '1',
          username: 'User 1',
        },
      },
    },
  }),
  reducers: {
    // fetchArticleCommentsStart(state) {
    //   state.isLoaded = false;
    //   state.error = undefined;
    // },
    // fetchArticleCommentsSuccess(state, action) {
    //   state.isLoaded = true;
    //   commentsAdapter.setAll(state, action.payload);
    // },
    // fetchArticleCommentsFailure(state, action) {
    //   state.isLoaded = true;
    //   state.error = action.payload;
    // },
  },
});

export const { reducer: articleDetailsCommentsReducers } =
  articleDetailsCommentsSlice;
