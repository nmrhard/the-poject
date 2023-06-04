import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Comment } from 'entities/Comment/model/types/comment';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = ({
  className,
  comment,
  isLoading,
}: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(styles.CommentCard, {}, [className])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton className={styles.username} width={100} height={16} />
        </div>
        <Skeleton className={styles.text} width='100%' height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div
      className={classNames(styles.CommentCard, {}, [
        className,
        styles.loading,
      ])}
    >
      <AppLink
        className={styles.header}
        to={`${RoutePath.profile}${comment.user.id}`}
      >
        {comment.user.avatar ? (
          <Avatar src={comment.user.avatar} size={30} />
        ) : null}
        <Text className={styles.username} title={comment.user.username} />
      </AppLink>
      <Text className={styles.text} text={comment.text} />
    </div>
  );
};
