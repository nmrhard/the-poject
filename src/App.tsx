import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { classNames } from './helpers/classNames';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

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
      <React.Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;
