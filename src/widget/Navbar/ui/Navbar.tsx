/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setAuthModal] = React.useState(false);

  const onToggleModal = React.useCallback(() => {
    setAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        className={styles.links}
        onClick={onToggleModal}
        theme={ThemeButton.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        commodi consequatur eligendi impedit incidunt necessitatibus possimus
        quis saepe sunt totam.\n
      </Modal>
    </div>
  );
};

export { Navbar };
