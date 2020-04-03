import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'src/store/rootReducer';
import rootSaga from 'src/store/rootSaga';

function bindMiddleware(middleware) {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
}

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer, 
    initialState, 
    bindMiddleware([sagaMiddleware])
  );

  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}
