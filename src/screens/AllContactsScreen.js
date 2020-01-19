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

const AllContactsScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  useInterval(() => {
    AllContactsScreen.navigationOptions = {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('SearchFriends')}>
          <Icon name="search" type="material" color={COLORS.black} size={40} />
        </TouchableOpacity>
      ),
    };
  }, 500);

  useEffect(() => {
    fetch('http://192.168.1.106:8081/api/users/' + User.Id + '/friends')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        for (const key in responseJson) {
          if (!isContain(responseJson[key], users)) {
            setUsers(users => [...users, responseJson[key]]);
          }
        }
      })
      .catch(error => console.log(error));
  }, []);

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
