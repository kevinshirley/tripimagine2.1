import { connect } from 'react-redux';
import ContinentPage from 'src/components/continent';
import storeConnector from 'src/store/selectors/destinations';
import * as actions from 'src/store/actions';

const actionsCreators = {
  getDestinations: actions.destinations.getDestinations,
  getDestination: actions.destinations.getDestination,
};

export default connect(
  storeConnector,
  actionsCreators,
)(ContinentPage);
