import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async ({ page = 1 }, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  const limit = getArticlesPageLimit(getState());

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
      },
    });

    if (!response.data) {
      throw new Error('No data');
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
