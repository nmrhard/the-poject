import * as React from 'react';
import { Mods, classNames } from 'shared/lib/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = (props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    readonly,
    ...rest
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const mods: Mods = {
    [styles.readonly]: readonly,
  };

  return (
    <div className={classNames(styles.InputWrapper, mods, [className])}>
      {placeholder && <div className={styles.placeholder}>{placeholder}</div>}
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={handleChange}
        readOnly={readonly}
        {...rest}
      />
    </div>
  );
};
