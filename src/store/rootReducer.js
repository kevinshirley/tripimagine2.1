import { combineReducers } from 'redux';

import ui from 'src/store/reducers/ui';
import destinations from 'src/store/reducers/destinations';
import blog from 'src/store/reducers/blog';

export default combineReducers({
  ui,
  destinations,
  blog,
});
