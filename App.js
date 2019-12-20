import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './src/screens/LoginScreen';
import ChatScreen from './src/screens/ChatScreen';
import RegistrationScreen from './src/screens/RegistratrionScreen';
import AllContactsScreen from './src/screens/AllContactsScreen';
import COLORS from './src/assets/COLORS';
import {RawButton} from 'react-native-gesture-handler';

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
        title: `AllContacts`,
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
