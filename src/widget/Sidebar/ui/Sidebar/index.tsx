/* eslint-disable implicit-arrow-linebreak */
import * as React from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'widget/ThemeSwitcher';
import { useSelector } from 'react-redux';
import { getSidebarItems } from 'widget/Sidebar/model/selectors/getSidebarItmes';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

type Props = {
  className?: string;
};

const Sidebar = React.memo(({ className }: Props) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      data-testid='sidebar'
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        className={styles.collapseBtn}
        data-testid='sidebar-toggle'
        theme={ThemeButton.BACKGROUND_INVERTED}
        onClick={onToggle}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={styles.lang} />
      </div>
    </aside>
  );
});

export { Sidebar };
