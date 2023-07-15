import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widget/Page/Page';
import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(styles.ArticleEditPage, {}, [className])}>
      {isEdit ? t('Edit article') : t('Create new article')}
    </Page>
  );
};

export default ArticleEditPage;
