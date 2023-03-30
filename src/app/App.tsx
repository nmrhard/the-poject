import * as React from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/provider/theme';
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar/ui';
import { userActions } from 'entities/User';
import { useDispatch } from 'react-redux';
import { AppRouter } from './provider/router';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <React.Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </React.Suspense>
    </div>
  );
};

export default App;
