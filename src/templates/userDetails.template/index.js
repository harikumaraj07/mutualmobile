import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import SearchModal from '../../components/SearchModal';
import styles from './styles';

const propTypes = {
  userDetails: PropTypes.object,
};

const defaultProps = {
  userDetails: {},
};

const UserDetailsTemplate = props => {
  const { userDetails } = props;

  return (
    <View style={styles.wrapper}>
      <Header title="User Info" />
      <ScrollView contentContainerStyle={styles.container}>
        <SearchModal
          searchPlaceHolder={userDetails.name}
          {...props}
        />
        <View style={styles.content}>
          <Text style={styles.usernameText}>@{userDetails.username}</Text>
          <Text style={styles.nameText}>{userDetails.name}</Text>
          <Text style={styles.infoText}>{userDetails.phone}</Text>
          <Text style={styles.infoText}>{userDetails.website}</Text>
          <Text style={styles.infoText}>{userDetails.email}</Text>
          <Text style={styles.infoText}>{userDetails.company ? `${userDetails.company.name} (${userDetails.company.bs})` : ''}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

UserDetailsTemplate.defaultProps = defaultProps;

UserDetailsTemplate.propTypes = propTypes;

export default UserDetailsTemplate;
