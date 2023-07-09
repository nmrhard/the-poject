/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsCommentsReducers,
  getArticleComments,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import AddCommentForm from 'features/AddCommentForm/ui/AddCommentForm/AddCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig';
import { Page } from 'widget/Page/Page';
import {
  articleDetailsPageRecommendationReducers,
  getArticleDetailsPageRecommendations,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationSlice';
import { getArticleRecommendationIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recommendation';
import { fetchArticlesRecommendations } from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducers,
  articleDetailsPageRecommendation: articleDetailsPageRecommendationReducers,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(
    getArticleDetailsPageRecommendations.selectAll
  );
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationIsLoading
  );
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const navigate = useNavigate();

  const onBackToList = () => {
    navigate(RoutePath.articles);
  };

  const onSendComment = (text: string) => {
    dispatch(addCommentForArticle(text));
  };

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticlesRecommendations());
  });

  if (!id) {
    return (
      <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        {t('Page not found')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
          {t('Back')}
        </Button>
        <ArticleDetails id={id} />
        <Text className={styles.commentTitle} title={t('Recommendation')} />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={styles.recommendations}
        />
        <Text className={styles.commentTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
