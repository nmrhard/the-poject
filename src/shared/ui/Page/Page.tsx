import React from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Page.module.scss';

interface PageProps {
  className?: string;
  children: React.ReactNode;
}

export const Page = ({ className, children }: PageProps) => (
  <section className={classNames(styles.Page, {}, [className])}>
    {children}
  </section>
);
