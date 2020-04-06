import { connect } from 'react-redux';
import PostPage from 'src/components/post';
import storeConnector from 'src/store/selectors/blog';
import * as actions from 'src/store/actions';

const actionsCreators = {
  setPost: actions.blog.setPost,
};

export default connect(
  storeConnector,
  actionsCreators,
)(PostPage);
