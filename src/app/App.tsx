import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import './styles/index.scss';
import { useTheme } from 'app/provider/theme';
import { AppRouter } from './provider/router';
import { Navbar } from 'widget/Navbar';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button type='button' onClick={toggleTheme}>
        Toggle
      </button>
      <AppRouter />
    </div>
  );
};

export default App;
