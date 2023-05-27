import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from 'entities/Comment/model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import styles from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

export const CommentList = ({
  className,
  comments,
  isLoading,
}: CommentListProps) => {
  const { t } = useTranslation('comment-list');

  return (
    <div className={classNames(styles.CommentList, {}, [className])}>
      {comments.length ? (
        comments.map((comment) => (
          <CommentCard
            className={styles.comment}
            key={comment.id}
            comment={comment}
          />
        ))
      ) : (
        <Text className={styles.empty} title={t('No comments')} />
      )}
    </div>
  );
};
