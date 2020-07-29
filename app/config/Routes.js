// @vendors
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

// @containers and screens
import Home from '../screens/Home';
import SignIn from '../screens/SingIn';

const routes = {
  HomeScreen: {
    screen: Home,
    navigationOptions: {header: null},
  },
  SignInScreen: {
    screen: SignIn,
    navigationOptions: {header: null},
  },
};

export default routes;
