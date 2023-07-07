/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { Mods, classNames } from 'shared/lib/classNames';
import { memo, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: string;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  readonly,
}: SelectProps<T>) => {
  const optionList = useMemo(
    () =>
      options?.map((optionItem) => (
        <option
          className={styles.option}
          value={optionItem.value}
          key={optionItem.value}
        >
          {optionItem.content}
        </option>
      )),
    [options]
  );

  const mods: Mods = {};

  const onChangeHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(evt.target.value as T);
    }
  };

  return (
    <div className={classNames(styles.Select, mods, [className])}>
      {label && <span className={styles.label}>{label}</span>}
      <select
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
};
