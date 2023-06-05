import { classNames } from 'shared/lib/classNames';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = ({
  className,
  article,
  view,
}: ArticleListItemProps) => {
  if (view === ArticleView.GRID) {
    return (
      <div
        className={classNames(styles.articleListItem, {}, [
          className,
          styles[view],
        ])}
      >
        <Card>
          <div className={styles.imageWrapper}>
            <img className={styles.img} src={article.img} alt={article.title} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <div className={styles.infoWrapper}>
            <Text text={article.type.join(', ')} className={styles.type} />
            <Text text={String(article.views)} className={styles.views} />
            <Icon Svg={EyeIcon} />
          </div>
          <Text text={article.title} className={styles.title} />
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
      <Card>
        <div className={styles.imageWrapper}>
          <img className={styles.img} src={article.img} alt={article.title} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.infoWrapper}>
          <Text text={article.type.join(', ')} className={styles.type} />
          <Text text={String(article.views)} className={styles.views} />
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} className={styles.title} />
      </Card>
    </div>
  );
};
