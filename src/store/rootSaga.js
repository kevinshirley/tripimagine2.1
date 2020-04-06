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
import { 
  watchGetPosts,
} from 'src/store/sagas/blog';

function* rootSaga() {
  yield all([
    watchOpenMenu(),
    watchCloseMenu(),
    watchOpenModal(),
    watchCloseModal(),
    watchLocationChange(),
    watchGetDestinations(),
    watchGetDestination(),
    watchGetPosts(),
  ]);
}

export default rootSaga;