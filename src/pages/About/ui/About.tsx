import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');
  return <h1>{t('О сайте')}</h1>;
};

export { About };
