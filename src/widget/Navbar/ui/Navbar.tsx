/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/self-closing-comp */
import { LoginModal } from 'features/AuthByUsername';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setAuthModal] = React.useState(false);

  const onCloseModal = React.useCallback(() => {
    setAuthModal(false);
  }, []);

  const onShowModal = React.useCallback(() => {
    setAuthModal(true);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        className={styles.links}
        onClick={onShowModal}
        theme={ThemeButton.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};

export { Navbar };
