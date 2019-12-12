import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';  

import LoginScreen from './src/screens/LoginScreen'
import ChatScreen from './src/screens/ChatScreen'
import RegistrationScreen from './src/screens/RegistratrionScreen'
import AllContactsScreen from './src/screens/AllContactsScreen'

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Registration :{screen: RegistrationScreen},
  Chat: {screen: ChatScreen},
  AllConctacst:{screen: AllContactsScreen}
});


export default createAppContainer(MainNavigator);