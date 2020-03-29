import { connect } from 'react-redux';
import ItinerariesPage from 'src/components/itineraries';
import storeConnector from 'src/store/selectors/common';
import * as actions from 'src/store/actions';

export default connect(
  storeConnector,
  {},
)(ItinerariesPage);