import { all, fork } from 'redux-saga/effects';
import 'isomorphic-unfetch';
import { 
  watchOpenMenu, 
  watchCloseMenu, 
  watchOpenModal, 
  watchCloseModal, 
  watchLocationChange,
} from 'src/store/sagas/ui';

function* rootSaga() {
  yield all([
    watchOpenMenu(),
    watchCloseMenu(),
    watchOpenModal(),
    watchCloseModal(),
    watchLocationChange(),
  ]);
}

export default rootSaga;