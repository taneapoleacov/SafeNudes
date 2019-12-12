import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './src/screens/LoginScreen';
import ChatScreen from './src/screens/ChatScreen';
import RegistrationScreen from './src/screens/RegistratrionScreen';
import AllContactsScreen from './src/screens/AllContactsScreen';

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
        title: `Chat`,
      }),
    },
    AllContacts: {
      screen: AllContactsScreen,
      navigationOptions: () => ({
        title: `Allcontacts`,
      }),
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(MainNavigator);
