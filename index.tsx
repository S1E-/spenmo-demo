import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';



import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="rootContainer">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </StrictMode>
);
