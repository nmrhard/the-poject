/* eslint-disable react/self-closing-comp */
import { classNames } from 'shared/lib/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(styles.navbar, {}, [className])}>
    <div className={styles.links}></div>
  </div>
);

export { Navbar };
