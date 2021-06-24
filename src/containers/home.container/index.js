import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from '../../templates/home.template';
import { getAllPostsAction, getAllUsersAction } from '../../actions/app.actions';
import { getUserDetailsFromId } from '../../utils/general.utils';

const propTypes = {
  posts: PropTypes.array,
  users: PropTypes.array,
  getAllPosts: PropTypes.func,
  getAllUsers: PropTypes.func,
};

const defaultProps = {
  posts: [],
  users: [],
  getAllPosts: () => { },
  getAllUsers: () => { },
};

const HomeContainer = props => {

  const { getAllPosts, getAllUsers, users, navigation: { navigate } } = props;

  useEffect(() => {
    getAllPosts();
    getAllUsers();
  }, []);

  const getUserDetails = id => getUserDetailsFromId(id, users);

  const onPressPost = post => {
    navigate('postDetails', { post });
  };

  const onPressUserName = (user) => {
    navigate('userDetails', { user });
  };

  return (
    <Home
      {...props}
      getUserDetails={getUserDetails}
      onPressPost={onPressPost}
      onPressUserName={onPressUserName}
    />
  );
};

HomeContainer.defaultProps = defaultProps;

HomeContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  posts: state.app.posts,
  users: state.app.users,
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPostsAction()),
  getAllUsers: () => dispatch(getAllUsersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
