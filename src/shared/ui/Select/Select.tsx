/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { Mods, classNames } from 'shared/lib/classNames';
import { memo, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo(
  ({ className, label, options, value, onChange, readonly }: SelectProps) => {
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
        onChange(evt.target.value);
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
  }
);
