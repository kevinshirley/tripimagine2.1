import * as R from 'ramda';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { get } from 'src/utils/fetch';
import { indexedObjectToArray } from 'src/utils/object';
import { BLOG, blog } from 'src/store/actions';

export function* watchGetPosts() {
  yield takeLatest(BLOG.GET_POSTS, getPosts);
}

// export function* watchGetDestination() {
//   yield takeLatest(BLOG.GET_POST, getDestination);
// }

function* getPosts() {
  const data = yield call(get, '/api/blog');
  console.log('posts data', data);
  yield put(blog.setPosts(data));
}
