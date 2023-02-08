import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
import './index.scss';

const App = () => (
  <div className='app'>
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

export default App;
