import { classNames } from 'shared/lib/classNames';
import { ArticleView } from 'entities/Article/model/types/article';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = ({
  className,
  view,
}: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.GRID) {
    return (
      <div
        className={classNames(styles.articleListItem, {}, [
          className,
          styles[view],
        ])}
      >
        <Card className={styles.card}>
          <div className={styles.imageWrapper}>
            <Skeleton className={styles.img} width={200} height={200} />
          </div>
          <div className={styles.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton className={styles.title} width={150} height={16} />
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.articleListItem, {}, [
        className,
        styles[view],
      ])}
    >
      <Card className={styles.card}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton width={150} height={16} className={styles.username} />
          <Skeleton width={150} height={16} className={styles.date} />
        </div>
        <Skeleton width={250} height={24} className={styles.title} />
        <Skeleton height={24} className={styles.img} />
        <div className={styles.footer}>
          <Skeleton width={200} height={236} />
        </div>
      </Card>
    </div>
  );
};
