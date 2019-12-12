import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Icon } from 'react-native-elements';

const App = () => {
  return (
    <View>
      <Text>Hello, world!</Text>
      <Icon
        name='card-giftcard'
        type='material'
        color='#000000'
      />

    </View>
  );
};

export default App;