import { combineReducers } from 'redux';
import { UI } from 'src/store/actions';
import { LOCATION_CHANGE } from 'react-router-redux';

function isModalOpened(state = false, { type }) {
  switch (type) {
    case UI.OPEN_MODAL:
      return true;
    case UI.CLOSE_MODAL:
      return false;
    case LOCATION_CHANGE:
      console.log('location changed');
      return 'location changed';
    default:
      return state;
  }
}

function isMenuOpened(state = false, { type }) {
  switch (type) {
    case UI.OPEN_MENU:
      return true;
    case UI.CLOSE_MENU:
      return false;
    default:
      return state;
  }
}

function selectedPortfolio(state = null, { type, payload }) {
  switch (type) {
    case UI.SELECT_PORTFOLIO:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  isModalOpened,
  isMenuOpened,
  selectedPortfolio,
});