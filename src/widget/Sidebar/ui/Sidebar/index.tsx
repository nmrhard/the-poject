import * as React from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import styles from './Sidebar.module.scss';

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        className={styles.collapseBtn}
        data-testid='sidebar-toogle'
        theme={ThemeButton.BACKGROUND_INVERTED}
        onClick={onToggle}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={styles.item}
        >
          <MainIcon className={styles.icon} />
          <span className={styles.link}>{t('Главная страница')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={styles.item}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t('O сайте')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </div>
  );
};

export { Sidebar };
