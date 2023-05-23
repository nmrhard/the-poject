import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import styles from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = ({ className, text }: CodeProps) => {
  const onCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <pre className={classNames(styles.Code, {}, [className])}>
      <Button
        className={styles.copyBtn}
        onClick={onCopy}
        theme={ThemeButton.CLEAR}
      >
        <Icon Svg={AboutIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
};
