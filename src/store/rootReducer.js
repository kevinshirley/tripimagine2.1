import { combineReducers } from 'redux';

import ui from 'src/store/reducers/ui';
import destinations from 'src/store/reducers/destinations';

export default combineReducers({
  ui,
  destinations,
});