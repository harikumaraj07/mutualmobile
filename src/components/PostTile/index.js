import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
    item: PropTypes.object,
    userDetails: PropTypes.object,
    getUserDetails: PropTypes.func,
    onPressPost: PropTypes.func,
    onPressUserName: PropTypes.func,
    disabled: PropTypes.bool,
    showBody: PropTypes.bool,
};

const defaultProps = {
    item: {},
    userDetails: {},
    getUserDetails: () => ({}),
    onPressPost: () => { },
    onPressUserName: () => { },
    disabled: false,
    showBody: false,
};

const Item = props => {

    const { item, getUserDetails, onPressPost, onPressUserName, userDetails, disabled, showBody } = props;

    const _userDetails = userDetails.id ? userDetails : getUserDetails(item.userId);

    const onPressItem = () => {
        onPressPost(item);
    }

    const _onPressUserName = () => {
        onPressUserName(_userDetails);
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPressItem}
            disabled={disabled}
        >
            <View style={styles.container}>
                <View style={styles.subTitleContainer}>
                    <TouchableOpacity onPress={_onPressUserName}>
                        <Text style={styles.userNameText}>@{_userDetails.username || ''}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.subSection}>
                    <Text style={styles.postTitle}>{item.title}</Text>
                    {
                        showBody && <Text style={styles.postBodyText}>{item.body}</Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
}

Item.defaultProps = defaultProps;

Item.propTypes = propTypes;

export default Item;
