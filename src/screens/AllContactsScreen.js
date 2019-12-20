import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import COLORS from '../assets/COLORS';
import Person from '../components/Person';
import User from '../components/User';
import firebase from 'firebase';

const AllContactsScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let dbRef = firebase.database().ref('users');
    dbRef.on('child_added', val => {
      let person = val.val();
      person.name = val.key;
      setUsers([...users, person]);
      console.log(person.name);
    });
  }, []);

  const renderRow = ({item}) => {
    return <Person name={item.name} navigation={navigation} />;
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.orangeOpac} />

      <FlatList
        data={users}
        renderItem={renderRow}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default AllContactsScreen;
