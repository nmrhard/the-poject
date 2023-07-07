import React from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINE = 'outline',
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  theme?: CardTheme;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  theme = CardTheme.NORMAL,
  ...props
}) => (
  <div
    className={classNames(styles.Card, {}, [className, styles[theme]])}
    {...props}
  >
    {children}
  </div>
);
