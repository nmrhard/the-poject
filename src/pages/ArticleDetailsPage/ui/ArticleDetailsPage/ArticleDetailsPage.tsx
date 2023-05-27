import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        {t('Page not found')}
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={styles.commentTitle} title={t('Comments')} />
      <CommentList
        comments={[
          {
            id: '1',
            text: 'Comment 1',
            user: {
              id: '1',
              username: 'User 1',
              avatar: 'https://i.pravatar.cc/100',
            },
          },
          {
            id: '2',
            text: 'Comment 2',
            user: {
              id: '2',
              username: 'User 2',
              avatar: 'https://i.pravatar.cc/100',
            },
          },
        ]}
      />
    </div>
  );
};

export default ArticleDetailsPage;
