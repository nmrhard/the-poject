import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input
        className={styles.input}
        placeholder={t('Введите username')}
        type='text'
      />
      <Input
        className={styles.input}
        placeholder={t('Введите пароль')}
        type='text'
      />
      <Button className={styles.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
