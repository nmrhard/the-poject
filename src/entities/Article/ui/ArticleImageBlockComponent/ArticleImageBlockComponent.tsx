import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({
  className,
  block,
}: ArticleImageBlockComponentProps) => (
  <div
    className={classNames(styles.ArticleImageBlockComponent, {}, [className])}
  >
    <img className={styles.img} src={block.src} alt={block.title} />
    {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
  </div>
);
