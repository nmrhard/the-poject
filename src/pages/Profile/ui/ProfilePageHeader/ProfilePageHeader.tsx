import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import styles from './ProfilePageHeader.module.scss';

type ProfilePageHeaderProps = {
  className?: string;
};

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const readonly = useSelector(getProfileReadonly);

  const canEdit = authData?.id === profileData?.id;
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEditing());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <div className={styles.buttonWrapper}>
          {readonly ? (
            <Button
              className={styles.editButton}
              onClick={onEdit}
              theme={ThemeButton.OUTLINE}
            >
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button
                className={styles.editButton}
                onClick={onCancelEdit}
                theme={ThemeButton.OUTLINE_RED}
              >
                {t('Cancel')}
              </Button>
              <Button
                className={styles.saveButton}
                onClick={onSave}
                theme={ThemeButton.OUTLINE}
              >
                {t('Save')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
