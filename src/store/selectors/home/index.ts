import * as R from 'ramda';
import { createSelector, createStructuredSelector } from 'reselect';

const selectIsModalOpened = R.pathOr('', [
  'ui',
  'isModalOpened',
]);

export default createStructuredSelector({
  isModalOpened: selectIsModalOpened,
});
