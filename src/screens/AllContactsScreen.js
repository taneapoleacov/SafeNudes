import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import COLORS from '../assets/COLORS';
import Person from '../components/Person';

const AllContactsScreen = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.orangeOpac} />
      <Person name="jora" />
      <Person name="jora" />
      <Person name="jora" />
      <Person name="jora" />
    </View>
  );
};

export default AllContactsScreen;
