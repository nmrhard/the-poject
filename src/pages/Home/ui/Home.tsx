import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('home');
  return <h1>{t('Главаня страница')}</h1>;
};

export { Home };
