import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import styles from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = ({
  className,
}: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = () => {
    navigate(RoutePath.articles);
  };

  return (
    <div
      className={classNames(styles.ArticleDetailsPageHeader, {}, [className])}
    >
      <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
        {t('Back')}
      </Button>
      {canEdit && (
        <Button
          className={styles.editButton}
          theme={ThemeButton.OUTLINE}
          onClick={onBackToList}
        >
          {t('Edit')}
        </Button>
      )}
    </div>
  );
};
