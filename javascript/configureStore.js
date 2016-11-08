import { createStore } from 'redux';
import reducer from './reducer';

/* eslint global-require: 0 no-underscore-dangle:0 */
export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  if (module.hot) {
    module.hot.accept('./reducer', () =>
      store.replaceReducer(require('./reducer').default)
    );
  }
  return store;
}

