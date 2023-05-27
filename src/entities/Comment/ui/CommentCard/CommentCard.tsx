import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Comment } from 'entities/Comment/model/types/comment';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = ({
  className,
  comment,
  isLoading,
}: CommentCardProps) => (
  <div className={classNames(styles.CommentCard, {}, [className])}>
    <div className={styles.header}>
      {comment.user.avatar ? (
        <Avatar src={comment.user.avatar} size={30} />
      ) : null}
      <Text className={styles.username} title={comment.user.username} />
    </div>
    <Text className={styles.text} text={comment.text} />
  </div>
);
