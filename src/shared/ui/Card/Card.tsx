import React from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Card.module.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={classNames(styles.Card, {}, [className])} {...props}>
    {children}
  </div>
);
