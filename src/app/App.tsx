import { classNames } from 'shared/lib/classNames';
import './styles/index.scss';
import { useTheme } from 'app/provider/theme';
import { AppRouter } from './provider/router';
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar/ui';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
