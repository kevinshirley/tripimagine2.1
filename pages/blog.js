import { connect } from 'react-redux';
import BlogPage from 'src/components/blog';
import storeConnector from 'src/store/selectors/blog';
import * as actions from 'src/store/actions';

const actionsCreators = {
  getPosts: actions.blog.getPosts,
  setPost: actions.blog.setPost,
};

export default connect(
  storeConnector,
  actionsCreators,
)(BlogPage);
