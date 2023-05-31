import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from 'features/AddCommentForm/model/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

export const AddCommentForm = ({ className }: AddCommentFormProps) => {
  const { t } = useTranslation('profile');
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = (value: string) => {
    dispatch(addCommentFormActions.setText(value));
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(styles.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t('Add comment')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button>{t('Send')}</Button>
      </div>
    </DynamicModuleLoader>
  );
};
