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
import Person from '../components/Person';
import User from '../components/User';
import styles from '../styles/AllContactsStyle';
import {Icon} from 'react-native-elements';
import isContain from '../functions/isConaint';
import useInterval from '../functions/useInterval';
import APIURL from '../components/APIURL';
const AllContactsScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(APIURL.URL + ':8081/api/users/' + User.Id + '/friends')
      .then(response => response.json())
      .then(responseJson => {
        for (const key in responseJson) {
          if (!isContain(responseJson[key], users)) {
            setUsers(users => [...users, responseJson[key]]);
          }
        }
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch(APIURL.URL + ':8089/api/chats?email=' + User.Email)
      .then(response => response.json())
      .then(responseJson => {
        for (const key in responseJson) {
          for (const keyUsers in users) {
            if (
              responseJson[key].user_one == users[keyUsers].Id ||
              responseJson[key].user_two == users[keyUsers].Id
            ) {
              // console.log(responseJson[key].chat_id);
              users[keyUsers].chat_id = responseJson[key].chat_id;
            }
          }
        }
      });
  });

  const renderRow = ({item}) => {
    return <Person name={item.Name} navigation={navigation} item={item} />;
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

export default AllContactsScreen;
AllContactsScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('SearchFriends')}>
        <Icon name="search" type="material" color={COLORS.black} size={40} />
      </TouchableOpacity>
    ),
  };
};
