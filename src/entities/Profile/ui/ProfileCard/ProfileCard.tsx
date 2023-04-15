/* eslint-disable max-len */
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Profile')} />
        <Button className={styles.editButton} theme={ThemeButton.OUTLINE}>
          {t('Edit')}
        </Button>
      </div>
      <div className={styles.content}>
        <Input
          className={styles.input}
          value={data?.firstName}
          placeholder={t('First name')}
        />
        <Input
          className={styles.input}
          value={data?.lastName}
          placeholder={t('Last name')}
        />
      </div>
    </div>
  );
};
