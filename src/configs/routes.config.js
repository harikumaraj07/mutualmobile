import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../containers/home.container';
import PostDetails from '../containers/postDetails.container';
import UserDetails from '../containers/userDetails.container';

const Stack = createStackNavigator();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

const Routes = props => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="postDetails" component={PostDetails} />
        <Stack.Screen name="userDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
