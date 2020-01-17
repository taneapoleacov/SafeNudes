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
const AllContactsScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    AllContactsScreen.navigationOptions = {
      headerRight: (
        <Button
          title="About"
          onPress={() => navigation.navigate('SearchFriends')}
        />
      ),
    };

    fetch('http://192.168.1.106:8081/api/users')
      .then(response => response.json())
      .then(responseJson => {
        for (const i in responseJson) {
          let person = responseJson[i];
          if (person.name === User.name) {
            console.log('bla');
          } else {
            setUsers(users => [...users, responseJson[i]]);
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
        keyExtractor={item => item.Name}
      />
    </SafeAreaView>
  );
};

export default AllContactsScreen;
