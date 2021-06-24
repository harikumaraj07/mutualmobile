import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
    item: PropTypes.object,
};

const defaultProps = {
    item: {},
};

const Comment = props => {

    const { item } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.bodyText}>{item.body}</Text>
            <Text style={styles.emailText}>{item.email}</Text>
        </View>
    );
}

Comment.defaultProps = defaultProps;

Comment.propTypes = propTypes;

export default Comment;
