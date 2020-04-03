import { connect } from 'react-redux';
import BlogPage from 'src/components/blog';
import storeConnector from 'src/store/selectors/common';
import * as actions from 'src/store/actions';

export default connect(
  storeConnector,
  {},
)(BlogPage);
