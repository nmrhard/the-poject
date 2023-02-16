import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(styles.navbar, {}, [className])}>
    <ThemeSwitcher />
    <div className={styles.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={'/'}
        className={styles.mainLink}
      >
        Home
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
        About
      </AppLink>
    </div>
  </div>
);

export { Navbar };
