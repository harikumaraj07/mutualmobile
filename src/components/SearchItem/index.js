import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
    item: PropTypes.object,
    setUserSearch: PropTypes.func,
};

const defaultProps = {
    item: {},
    setUserSearch: () => {},
};

const SearchItem = props => {

    const { item, setUserSearch } = props;

    return (
        <TouchableOpacity style={styles.container} onPress={() => { setUserSearch(item); }}>
            <Text style={styles.nameText}>{item.name}</Text>
        </TouchableOpacity>
    );
}

SearchItem.defaultProps = defaultProps;

SearchItem.propTypes = propTypes;

export default SearchItem;
