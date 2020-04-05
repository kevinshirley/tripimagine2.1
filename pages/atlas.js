import { connect } from 'react-redux';
import AtlasPage from 'src/components/atlas';
import storeConnector from 'src/store/selectors/destinations';
import * as actions from 'src/store/actions';

const actionsCreators = {
  getDestinations: actions.destinations.getDestinations,
};

export default connect(
  storeConnector,
  actionsCreators,
)(AtlasPage);
