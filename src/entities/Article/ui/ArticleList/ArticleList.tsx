/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { classNames } from 'shared/lib/classNames';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import styles from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = ({
  className,
  articles,
  isLoading,
  view = ArticleView.GRID,
}: ArticleListProps) => (
  <div
    className={classNames(styles.ArticleList, {}, [className, styles[view]])}
  >
    {articles.length > 0
      ? articles.map((article) => (
          <ArticleListItem
            className={styles.card}
            article={article}
            view={view}
          />
        ))
      : null}
  </div>
);
