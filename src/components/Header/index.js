import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const propTypes = {
  title: PropTypes.string,
  leftIcon: PropTypes.element,
  onPressLeftIcon: PropTypes.func,
  leftIconId: PropTypes.string,
  toolbarContainer: PropTypes.object,
  transparentBackground: PropTypes.bool,
  rightIcon: PropTypes.element,
  onPressRightIcon: PropTypes.func,
};

const defaultProps = {
  title: '',
  leftIcon: <Icon name="arrowleft" size={30} color="#FFFFFF" />,
  onPressLeftIcon: null,
  leftIconId: '',
  toolbarContainer: {},
  transparentBackground: false,
  rightIcon: null,
  onPressRightIcon: () => {},
};

const Header = props => {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={[
          styles.toolbarContainer,
          props.toolbarContainer,
          props.transparentBackground ? styles.transparentBackground : {},
        ]}>
        {!!props.leftIcon && (
          <TouchableOpacity
            accessibilityLabel={props.leftIconId}
            testID={props.leftIconId}
            onPress={
              props.onPressLeftIcon
                ? props.onPressLeftIcon
                : () => {
                    navigation.goBack();
                  }
            }>
            <View style={styles.leftIconContainer}>{props.leftIcon}</View>
          </TouchableOpacity>
        )}

        <View style={styles.middleContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              styles.toolbarTitle,
              props.leftIconName === '' ? styles.paddingLeft16 : {},
            ]}>
            {props.title}
          </Text>
        </View>
        {!!props.rightIcon && (
          <TouchableOpacity
            accessibilityLabel={props.rightIconId}
            testID={props.rightIconId}
            onPress={props.onPressRightIcon}>
            <View style={styles.leftIconContainer}>{props.rightIcon}</View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

Header.defaultProps = defaultProps;

Header.propTypes = propTypes;

export default Header;
