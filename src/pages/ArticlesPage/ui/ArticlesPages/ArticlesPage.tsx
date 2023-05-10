import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ArticlesPage, {}, [className])}>
      {t('Articles page')}
    </div>
  );
};

export default ArticlesPage;
