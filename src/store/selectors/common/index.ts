import * as R from 'ramda';
import { createSelector, createStructuredSelector } from 'reselect';
import allDestinations from 'src/api/destinations';

const selectIsModalOpened = R.pathOr('', [
  'ui',
  'isModalOpened',
]);

const selectIsMenuOpened = R.pathOr('', [
  'ui',
  'isMenuOpened',
]);

const selectSelectedPortfolio = R.pathOr('', [
  'ui',
  'selectedPortfolio',
]);

const destinations = () => allDestinations;

export default createStructuredSelector({
  destinations: destinations,
  isModalOpened: selectIsModalOpened,
  isMenuOpened: selectIsMenuOpened,
  selectedPortfolio: selectSelectedPortfolio,
});
