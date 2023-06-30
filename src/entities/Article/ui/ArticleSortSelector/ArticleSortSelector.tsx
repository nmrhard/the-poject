import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import styles from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (order: SortOrder) => void;
  onChangeSort: (sort: ArticleSortField) => void;
}

export const ArticleSortSelector = ({
  className,
  sort,
  order,
  onChangeOrder,
  onChangeSort,
}: ArticleSortSelectorProps) => {
  const { t } = useTranslation();

  const orderOptions: SelectOption<SortOrder>[] = [
    { value: 'asc', content: t('ascending') },
    { value: 'desc', content: t('descending') },
  ];

  const sortFieldOptions: SelectOption<ArticleSortField>[] = [
    { value: ArticleSortField.CREATED_AT, content: t('created at') },
    { value: ArticleSortField.TITLE, content: t('title') },
    { value: ArticleSortField.VIEWS, content: t('views') },
  ];

  return (
    <div className={classNames(styles.ArticleSortSelector, {}, [className])}>
      <Select
        label={t('Sort by')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        className={styles.order}
        label={t('by')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
};
