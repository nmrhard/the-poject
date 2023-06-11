/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames';
import { ArticleList, ArticleView } from 'entities/Article';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => (
  <div className={classNames(styles.ArticlesPage, {}, [className])}>
    <ArticleList view={ArticleView.LIST} articles={[]} />
  </div>
);

export default ArticlesPage;
