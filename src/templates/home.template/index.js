import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Item from '../../components/PostTile';
import styles from './styles';

const propTypes = {
  posts: PropTypes.array,
};

const defaultProps = {
  posts: [],
};

const HomeTemplate = props => {
  const { posts } = props;

  return (
    <View style={styles.wrapper}>
      <Header title="Posts" leftIcon={null} />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.content}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          keyExtractor={key => key.id}
          data={posts}
          renderItem={data => <Item {...data} {...props} />}
        />
      </View>
    </View>
  );
};

HomeTemplate.defaultProps = defaultProps;

HomeTemplate.propTypes = propTypes;

export default HomeTemplate;
