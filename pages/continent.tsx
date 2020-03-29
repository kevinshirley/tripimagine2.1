import { connect } from 'react-redux';
import ContinentPage from 'src/components/continent';
import storeConnector from 'src/store/selectors/common';

export default connect(
  storeConnector,
  {},
)(ContinentPage);
