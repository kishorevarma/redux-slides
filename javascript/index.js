import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import createRoutes from './routes';
import configureStore from './configureStore';

require('../globalStyles/customBulma.scss');

const store = configureStore({});
const routes = createRoutes(store);

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('appView')
);

