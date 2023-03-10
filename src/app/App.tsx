import * as React from 'react';
import { classNames } from 'shared/lib/classNames';
import './styles/index.scss';
import { useTheme } from 'app/provider/theme';
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar/ui';
import { AppRouter } from './provider/router';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
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
