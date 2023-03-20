import { render } from 'react-dom';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/provider/theme';
import ErrorBoundary from 'app/provider/ErrorBoundary/ui/ErrorBoundary';
import 'app/styles/index.scss';

import 'shared/config/i18n';
import { StoreProvider } from 'app/provider/StoreProvider';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
