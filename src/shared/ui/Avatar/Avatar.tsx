/* eslint-disable object-curly-newline */
import { Mods, classNames } from 'shared/lib/classNames';
import React, { CSSProperties } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar = ({ className, src, alt, size }: AvatarProps) => {
  const mods: Mods = {};

  const style = React.useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );

  return (
    <img
      className={classNames(styles.Avatar, mods, [className])}
      style={style}
      src={src}
      alt={alt}
    />
  );
};
