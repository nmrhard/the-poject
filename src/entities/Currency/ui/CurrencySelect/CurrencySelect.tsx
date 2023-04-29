/* eslint-disable object-curly-newline */
import { Currency } from 'entities/Currency/model/types/currency';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';

const options = [
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.UAH, content: Currency.UAH },
];

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        if (onChange) {
          onChange(value as Currency);
        }
      },
      [onChange]
    );

    return (
      <Select
        label={t('Select currency')}
        value={value}
        onChange={onChangeHandler}
        options={options}
        readonly={readonly}
      />
    );
  }
);
