import { getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { Select } from 'shared/ui/Select/Select';
import { Card } from 'shared/ui/Card/Card';
import styles from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters = ({ className }: ArticlePageFiltersProps) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);

  const onChangeView = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  };

  return (
    <div className={classNames(styles.ArticlePageFilters, {}, [className])}>
      <div className={styles.sortWrapper}>
        <Select label={t('Sort by')} />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={styles.search}>
        <input type='text' placeholder={t('Search')} />
      </Card>
    </div>
  );
};
