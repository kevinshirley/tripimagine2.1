import { connect } from 'react-redux';
import AtlasPage from 'src/components/atlas';
import storeConnector from 'src/store/selectors/common';

export default connect(
  storeConnector,
  {},
)(AtlasPage);
