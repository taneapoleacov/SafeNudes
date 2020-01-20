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
import AddFriend from '../components/AddFriend';
import User from '../components/User';
import {Icon} from 'react-native-elements';
import isContain from '../functions/isConaint';

const SearchFriendsScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('http://192.168.103.103:8081/api/users')
      .then(response => response.json())
      .then(responseJson => {
        for (const key in responseJson) {
          if (!isContain(responseJson[key], friends)) {
            setFriends(friends => [...friends, responseJson[key]]);
          }
        }
        for (const key in responseJson) {
          if (responseJson[key].Id != User.Id) {
            if (
              !isContain(responseJson[key], users) &&
              !isContain(responseJson[key], friends)
            ) {
              setUsers(users => [...users, responseJson[key]]);
            }
          }
        }
      })
      .catch(error => console.log(error));
  });

  const renderRow = ({item}) => {
    return <AddFriend item={item} />;
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.orangeOpac} />
      <FlatList
        data={users}
        renderItem={renderRow}
        keyExtractor={item => item.Id}
      />
    </SafeAreaView>
  );
};

export default SearchFriendsScreen;

SearchFriendsScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('FriendRequests')}>
        <Icon name="people" type="material" color={COLORS.blasck} size={40} />
      </TouchableOpacity>
    ),
  };
};
