import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from 'react-native';
import COLORS from '../assets/COLORS';
const SearchFriendsScreen = ({navigation}) => {
  useEffect(() => {
    fetch('http://192.168.1.106:8081/api/users')
      .then(response => response.json())
      .then(responseJson => {
        for (const i in responseJson) {
          console.log(responseJson[i]);
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  );
};

export default SearchFriendsScreen;
