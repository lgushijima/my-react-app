import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './assets/css/font-awesome.min.css';
import './assets/css/main.scss';
import {App} from './App.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from '@mui/material/styles';
import muzitTheme from './theme/index.js';
import {persistor, store} from './store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={muzitTheme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
