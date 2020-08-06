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
import CreateAccount from "../screens/CreateAccount";
import WelcomePage from "../screens/WelcomePage";

const routes = {
  HomeScreen: {
    screen: Home,
    navigationOptions: {header: null},
  },
  SignInScreen: {
    screen: SignIn,
    navigationOptions: {header: null},
  },
  CreateAccountScreen: {
    screen: CreateAccount,
    navigationOptions: {header: null},
  },
  WelcomePageScreen: {
    screen: WelcomePage,
    navigationOptions: {header: null},
  }
};

export default routes;
