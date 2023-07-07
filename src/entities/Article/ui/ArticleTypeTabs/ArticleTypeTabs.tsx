import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { classNames } from 'shared/lib/classNames';
import { ArticleType } from 'entities/Article/model/types/article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = ({
  className,
  value,
  onChangeType,
}: ArticleTypeTabsProps) => {
  const { t } = useTranslation();

  const typeTabs: TabItem[] = [
    {
      value: ArticleType.ALL,
      content: t('All articles'),
    },
    {
      value: ArticleType.IT,
      content: t('IT'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Economics'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Science'),
    },
  ];

  const onTabClick = (tab: TabItem) => {
    onChangeType(tab.value as ArticleType);
  };

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      className={classNames('', {}, [className])}
      onTabClick={onTabClick}
    />
  );
};
