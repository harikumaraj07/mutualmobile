import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserDetails from '../../templates/userDetails.template';
import { getUserDetailsAction } from '../../actions/app.actions';

const propTypes = {
  userDetails: PropTypes.object,
  users: PropTypes.array,
  getUserDetails: PropTypes.func,
};

const defaultProps = {
  userDetails: {},
  users: [],
  getUserDetails: () => { },
};

const UserDetailsTemplate = props => {

  const {
    getUserDetails,
    route,
  } = props;

  const { user } = route.params;

  useEffect(() => {
    getUserDetails(user.id);
  }, []);

  const setUser = data => {
    getUserDetails(data.id);
  }

  return (
    <UserDetails
      {...props}
      setUser={setUser}
    />
  );
};

UserDetailsTemplate.defaultProps = defaultProps;

UserDetailsTemplate.propTypes = propTypes;

const mapStateToProps = state => ({
  userDetails: state.app.userDetails,
  users: state.app.users,
});

const mapDispatchToProps = dispatch => ({
  getUserDetails: id => dispatch(getUserDetailsAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsTemplate);
