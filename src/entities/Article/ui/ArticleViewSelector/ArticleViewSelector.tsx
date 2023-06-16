import { ArticleView } from 'entities/Article/model/types/article';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import GridIcon from 'shared/assets/icons/tiled-24-24.svg';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: GridIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = ({
  className,
  view,
  onViewClick,
}: ArticleViewSelectorProps) => {
  const onClick = (view: ArticleView) => () => {
    onViewClick?.(view);
  };

  return (
    <div className={classNames(styles.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ThemeButton.CLEAR}
          onClick={onClick(viewType.view)}
          key={viewType.view}
        >
          <Icon
            className={classNames('', {
              [styles.notSelected]: view !== viewType.view,
            })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
};
