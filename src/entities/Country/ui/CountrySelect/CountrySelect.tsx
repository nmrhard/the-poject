/* eslint-disable object-curly-newline */
import { Country } from 'entities/Country/model/types/country';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';

const options = [
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Estonia, content: Country.Estonia },
  { value: Country.Lathvia, content: Country.Lathvia },
  { value: Country.Lithuania, content: Country.Lithuania },
  { value: Country.USA, content: Country.USA },
  { value: Country.Poland, content: Country.Poland },
];

interface CountrySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        if (onChange) {
          onChange(value as Country);
        }
      },
      [onChange]
    );

    return (
      <Select
        label={t('Select country')}
        value={value}
        onChange={onChangeHandler}
        options={options}
        readonly={readonly}
      />
    );
  }
);
