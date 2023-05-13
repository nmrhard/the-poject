import { useTranslation } from 'react-i18next';

export const ArticleDetails = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('body')}</p>
    </div>
  );
};
