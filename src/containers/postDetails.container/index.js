import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostDetails from '../../templates/postDetails.template';
import {
  getPostDetailsAction,
  getPostCommentsAction,
  getUserDetailsAction,
  clearCommentsAction,
  clearPostDetailsAction,
  clearUserDetailsAction,
} from '../../actions/app.actions';

const propTypes = {
  postDetails: PropTypes.object,
  comments: PropTypes.array,
  userDetails: PropTypes.object,
  getPostDetails: PropTypes.func,
  getPostComments: PropTypes.func,
  getUserDetails: PropTypes.func,
  clearComments: PropTypes.func,
  clearUserDetails: PropTypes.func,
  clearPostDetails: PropTypes.func,
};

const defaultProps = {
  postDetails: {},
  comments: [],
  userDetails: {},
  getPostDetails: () => { },
  getPostComments: () => { },
  getUserDetails: () => { },
  clearComments: () => { },
  clearUserDetails: () => { },
  clearPostDetails: () => { },
};

const PostDetailsContainer = props => {

  const {
    getPostDetails,
    getPostComments,
    getUserDetails,
    clearComments,
    clearUserDetails,
    clearPostDetails,
    route,
    navigation: { navigate },
  } = props;

  const { post } = route.params;

  useEffect(() => {
    getPostDetails(post.id);
    getPostComments(post.id);
    getUserDetails(post.userId);
    return clearData;
  }, []);

  const clearData = () => {
    clearComments();
    clearUserDetails();
    clearPostDetails();
  };

  const onPressUserName = (user) => {
    navigate('userDetails', { user });
  };

  return (
    <PostDetails
      {...props}
      onPressUserName={onPressUserName}
    />
  );
};

PostDetailsContainer.defaultProps = defaultProps;

PostDetailsContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  postDetails: state.app.postDetails,
  comments: state.app.comments,
  userDetails: state.app.userDetails,
});

const mapDispatchToProps = dispatch => ({
  getPostDetails: id => dispatch(getPostDetailsAction(id)),
  getPostComments: id => dispatch(getPostCommentsAction(id)),
  getUserDetails: id => dispatch(getUserDetailsAction(id)),
  clearComments: () => dispatch(clearCommentsAction()),
  clearUserDetails: () => dispatch(clearUserDetailsAction()),
  clearPostDetails: () => dispatch(clearPostDetailsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsContainer);
