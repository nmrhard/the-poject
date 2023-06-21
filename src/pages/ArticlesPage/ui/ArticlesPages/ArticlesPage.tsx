/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames';
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  const onChangeView = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  };

  const onLoadNextPart = () => {
    dispatch(fetchNextArticlesPage());
  };

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(
      fetchArticlesList({
        page: 1,
      })
    );
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        className={classNames(styles.ArticlesPage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
};
export default ArticlesPage;
