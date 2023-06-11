import { classNames } from 'shared/lib/classNames';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from 'entities/Article/model/types/article';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
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
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = () => {
    navigate(RoutePath.article_details + article.id);
  };

  const types = (
    <Text text={article.type.join(', ')} className={styles.types} />
  );
  const views = (
    <>
      <Text text={String(article.views)} className={styles.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.GRID) {
    return (
      <div
        className={classNames(styles.articleListItem, {}, [
          className,
          styles[view],
        ])}
      >
        <Card className={styles.card} onClick={onOpenArticle}>
          <div className={styles.imageWrapper}>
            <img className={styles.img} src={article.img} alt={article.title} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <div className={styles.infoWrapper}>
            {types}
            {views}
          </div>
          <Text text={article.title} className={styles.title} />
        </Card>
      </div>
    );
  }

  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT
  ) as ArticleTextBlock;

  return (
    <div
      className={classNames(styles.articleListItem, {}, [
        className,
        styles[view],
      ])}
    >
      <Card className={styles.card}>
        <div className={styles.header}>
          <Avatar size={30} src={article.user.avatar} />
          <Text text={article.user.username} className={styles.username} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <Text title={article.title} className={styles.title} />
        {types}
        <img src={article.img} alt={article.title} className={styles.img} />
        {textBlock && (
          <ArticleTextBlockComponent
            className={styles.textBlock}
            block={textBlock}
          />
        )}
        <div className={styles.footer}>
          <Button theme={ThemeButton.OUTLINE} onClick={onOpenArticle}>
            {t('Read more')}
          </Button>
        </div>
      </Card>
    </div>
  );
};
