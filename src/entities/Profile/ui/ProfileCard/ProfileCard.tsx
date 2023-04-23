/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { Profile } from 'entities/Profile/model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstName: (value?: string) => void;
  onChangeLastName: (value?: string) => void;
  onChangeAge: (value?: string) => void;
  onChangeCity: (value?: string) => void;
  readonly?: boolean;
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  readonly,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(styles.ProfileCard, { [styles.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(styles.ProfileCard, {}, [
          className,
          styles.error,
        ])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Error')}
          text={t('Try to reload the page')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.content}>
        <Input
          className={styles.input}
          value={data?.firstName}
          placeholder={t('First name')}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
        <Input
          className={styles.input}
          value={data?.lastName}
          placeholder={t('Last name')}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          className={styles.input}
          value={data?.age}
          placeholder={t('Age')}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          className={styles.input}
          value={data?.city}
          placeholder={t('City')}
          onChange={onChangeCity}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
