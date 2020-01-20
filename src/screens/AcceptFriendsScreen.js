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
import AcceptFriend from '../components/AcceptFriend';
import User from '../components/User';
import {Icon} from 'react-native-elements';

const AcceptFriendsScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://192.168.103.103:8081/api/users/' + User.Id + '/requests')
      .then(response => response.json())
      .then(responseJson => {
        for (const i in responseJson) {
          if (responseJson[i].Name !== User.Name) {
            setUsers(users => [...users, responseJson[i]]);
          }
        }
      })
      .catch(error => console.log(error));
  }, []);

  const renderRow = ({item}) => {
    return <AcceptFriend item={item} />;
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

export default AcceptFriendsScreen;
AcceptFriendsScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Icon name="android" color={COLORS.blasck} size={40} />
      </TouchableOpacity>
    ),
  };
};
