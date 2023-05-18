import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsError,
  getArticleDetailsLoading,
  getArticleDetailsData,
} from 'entities/Article/model/selectors/articleDetails';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import styles from './ArticleDetails.module.scss';

type ArticleDetailsProps = {
  className?: string;
  id: string;
};

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsLoading);
  const articlce = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  React.useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (!isLoading) {
    content = (
      <div>
        <Skeleton
          className={styles.avatar}
          width={200}
          height={200}
          border='50%'
        />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width='100%' height={200} />
        <Skeleton className={styles.skeleton} width='100%' height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <Text align={TextAlign.CENTER} title={t("Article didn't load ")} />
    );
  } else {
    content = <div>{t('Article details')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(styles.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
};
