import { classNames } from 'shared/lib/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({
  className,
  block,
}: ArticleCodeBlockComponentProps) => (
  <div
    className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}
  >
    <Code>{block.code}</Code>
  </div>
);
