/* eslint-disable object-curly-newline */
import * as React from 'react';
import { classNames } from 'shared/lib/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import styles from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: React.ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = ({ className, tabs, value, onTabClick }: TabsProps) => {
  const handleTabClick = (tab: TabItem) => () => onTabClick(tab);

  return (
    <div className={classNames(styles.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={styles.tab}
          onClick={handleTabClick(tab)}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
