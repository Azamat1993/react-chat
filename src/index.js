import React from 'react';
import ReactDOM from 'react-dom';
import { initialize, get } from 'js-dep-inj';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as providers from './providers';
import * as instances from './instances';

initialize({
  providers: Object.keys(providers).map(i => providers[i]),
  instances: Object.keys(instances).map(i => instances[i])
});

ReactDOM.render((
  <Provider store={get('Store').instance}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>),
  document.getElementById('root'));
registerServiceWorker();
