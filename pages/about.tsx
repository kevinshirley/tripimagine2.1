import { connect } from 'react-redux';
import AboutPage from 'src/components/about';
import storeConnector from 'src/store/selectors/common';
import * as actions from 'src/store/actions';

export default connect(
  storeConnector,
  {},
)(AboutPage);
