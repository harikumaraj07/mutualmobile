import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, Text, FlatList, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import SearchItem from '../SearchItem';

const propTypes = {
    searchPlaceHolder: PropTypes.string,
};

const defaultProps = {
    searchPlaceHolder: '',
};

const SearchModal = props => {

    const { searchPlaceHolder, users, setUser } = props;

    const [modalVisible, setModalVisible] = useState(false);

    const [search, setSearch] = useState('');

    const toggleModalVisible = () => {
        setModalVisible(val => !val);
    }

    const setUserSearch = (data) => {
        setUser(data);
        toggleModalVisible();
    }

    const getSortedUsers = () => {
        return users.filter(user => user.username.toLowerCase().includes(search.toLowerCase()) || user.name.toLowerCase().includes(search.toLowerCase()))
    }

    return (
        <>
            <TouchableOpacity onPress={toggleModalVisible}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.searchText}>{searchPlaceHolder || 'Search'}</Text>
                    <Icon name="search" size={25} color="#2E384D" />
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={toggleModalVisible}
            >
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Search'
                            value={search}
                            onChangeText={setSearch}
                        />
                    </View>
                    <FlatList
                        contentContainerStyle={styles.content}
                        data={getSortedUsers()}
                        renderItem={data => <SearchItem {...data} setUserSearch={setUserSearch} />}
                    />
                </View>
            </Modal>
        </>
    )
}

SearchModal.defaultProps = defaultProps;

SearchModal.propTypes = propTypes;

export default SearchModal;
