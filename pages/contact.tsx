import { connect } from 'react-redux';
import ContactPage from 'src/components/contact';
import storeConnector from 'src/store/selectors/common';
import * as actions from 'src/store/actions';

export default connect(
  storeConnector,
  {},
)(ContactPage);
