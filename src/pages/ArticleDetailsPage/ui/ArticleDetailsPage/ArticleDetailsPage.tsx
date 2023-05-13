import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ArticleDetails } from 'entities/Article';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails />
    </div>
  );
};

export default ArticleDetailsPage;
