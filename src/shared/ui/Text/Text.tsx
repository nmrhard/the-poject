/* eslint-disable object-curly-newline */
import { Mods, classNames } from 'shared/lib/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = (props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
  };

  return (
    <div className={classNames(styles.Text, mods, [className])}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
