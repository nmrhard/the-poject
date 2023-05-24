/* eslint-disable react/no-array-index-key */
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = ({
  className,
  block,
}: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation('article');

  return (
    <div
      className={classNames(styles.ArticleTextBlockComponent, {}, [className])}
    >
      {block.title && <Text title={block.title} className={styles.title} />}
      {block.paragraphs.map((paragraph, index) => (
        <Text key={index} title={paragraph} className={styles.paragraph} />
      ))}
    </div>
  );
};
