import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ArticleEditPage, {}, [className])}>
      {t('ArticleEditPage')}
    </div>
  );
};

export default ArticleEditPage;
