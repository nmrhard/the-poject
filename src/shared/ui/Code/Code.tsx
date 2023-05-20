import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import styles from './Code.module.scss';

interface CodeProps {
  className?: string;
  children: React.ReactNode;
}

export const Code = ({ className, children }: CodeProps) => {
  const { t } = useTranslation();

  return (
    <pre className={classNames(styles.Code, {}, [className])}>
      <Button className={styles.copyBtn}>{t('Copy')}</Button>
      <code>{children}</code>
    </pre>
  );
};
