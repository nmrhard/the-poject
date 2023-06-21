/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/self-closing-comp */
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = React.memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setAuthModal] = React.useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = React.useCallback(() => {
    setAuthModal(false);
  }, []);

  const onShowModal = React.useCallback(() => {
    setAuthModal(true);
  }, []);

  const onLogout = React.useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(styles.navbar, {}, [className])}>
        <Button
          className={styles.links}
          onClick={onLogout}
          theme={ThemeButton.CLEAR_INVERTED}
        >
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(styles.navbar, {}, [className])}>
      <Button
        className={styles.links}
        onClick={onShowModal}
        theme={ThemeButton.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});

export { Navbar };
