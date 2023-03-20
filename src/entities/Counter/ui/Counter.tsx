import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>{t('counter')}</h1>
      <p data-testid='value-title'>{counterValue}</p>
      <button type='button' onClick={increment} data-testid='increment-btn'>
        {t('increment')}
      </button>
      <button type='button' onClick={decrement} data-testid='decrement-btn'>
        {t('decrement')}
      </button>
    </div>
  );
};
