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
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
};

export default App;
