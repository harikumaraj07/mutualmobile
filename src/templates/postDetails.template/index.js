import React from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import PostTile from '../../components/PostTile';
import Comment from '../../components/Comment';
import styles from './styles';

const propTypes = {
  postDetails: PropTypes.object,
  userDetails: PropTypes.object,
  onPressUserName: PropTypes.func,
};

const defaultProps = {
  postDetails: {},
  userDetails: {},
  onPressUserName: () => { },
};

const PostDetailsTemplate = props => {
  const { postDetails, userDetails, comments, onPressUserName } = props;

  const renderPostTile = () => {
    return (
      <View style={styles.headerContainer}>
        <PostTile
          item={postDetails}
          userDetails={userDetails}
          disabled
          showBody
          onPressUserName={onPressUserName}
        />
        <Text style={styles.title}>Comments</Text>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <Header title="Post Info" />
      <FlatList
        contentContainerStyle={styles.container}
        ListHeaderComponent={renderPostTile}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        keyExtractor={key => key.id}
        data={comments}
        renderItem={Comment}
      />
    </View>
  );
};

PostDetailsTemplate.defaultProps = defaultProps;

PostDetailsTemplate.propTypes = propTypes;

export default PostDetailsTemplate;
