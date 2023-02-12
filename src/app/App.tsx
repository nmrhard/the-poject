import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import './styles/index.scss';
import { useTheme } from 'app/provider/theme';
import { AppRouter } from './provider/router';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button type='button' onClick={toggleTheme}>
        Toggle
      </button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;
