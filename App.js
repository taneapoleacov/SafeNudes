import React, {useState, useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './src/screens/LoginScreen';
import ChatScreen from './src/screens/ChatScreen';
import RegistrationScreen from './src/screens/RegistratrionScreen';
import AllContactsScreen from './src/screens/AllContactsScreen';
import SearchFriendsScreen from './src/screens/SearchFriendsScreen';
import AcceptFriendsScreen from './src/screens/AcceptFriendsScreen';
import COLORS from './src/assets/COLORS';
import {RawButton} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native';

const MainNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Registration: {
      screen: RegistrationScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: COLORS.accentColor,
        },
      }),
    },
    SearchFriends: {
      screen: SearchFriendsScreen,
      navigationOptions: () => ({
        title: `Search Friends`,
        headerStyle: {
          backgroundColor: COLORS.accentColor,
        },
      }),
    },
    AllContacts: {
      screen: AllContactsScreen,
      navigationOptions: () => ({
        title: `AllContacts`,
        headerStyle: {
          backgroundColor: COLORS.accentColor,
        },
      }),
    },
    FriendRequests: {
      screen: AcceptFriendsScreen,
      navigationOptions: () => ({
        title: `Friend Requests`,
        headerStyle: {
          backgroundColor: COLORS.accentColor,
        },
      }),
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(MainNavigator);
