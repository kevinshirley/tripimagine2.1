import { all } from 'redux-saga/effects';
import 'isomorphic-unfetch';
import { 
  watchOpenMenu, 
  watchCloseMenu, 
  watchOpenModal, 
  watchCloseModal, 
  watchLocationChange,
} from 'src/store/sagas/ui';
import { 
  watchGetDestinations,
  watchGetDestination,
} from 'src/store/sagas/destinations';

function* rootSaga() {
  yield all([
    watchOpenMenu(),
    watchCloseMenu(),
    watchOpenModal(),
    watchCloseModal(),
    watchLocationChange(),
    watchGetDestinations(),
    watchGetDestination(),
  ]);
}

export default rootSaga;