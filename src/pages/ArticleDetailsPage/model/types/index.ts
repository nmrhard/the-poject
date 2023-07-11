import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsPageRecommendationSchema } from './ArticleDetailsPageRecommendationSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendation: ArticleDetailsPageRecommendationSchema;
}
