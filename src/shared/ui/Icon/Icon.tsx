import React from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ className, Svg }: IconProps) => (
  <Svg className={classNames(styles.Icon, {}, [className])} />
);
