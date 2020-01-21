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
import User from '../components/User';
import {Icon} from 'react-native-elements';
import useInterval from '../functions/useInterval';
import APIURL from '../components/APIURL';

const AcceptFriendsScreen = ({navigation}) => {
  const [profile, setProfile] = useState('');

  useEffect(() => {
    fetch(APIURL.URL + ':8081/api/users/' + User.Id)
      .then(response => response.json())
      .then(responseJson => {
        setProfile(responseJson);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    console.log(profile.Name);
    User.Email = profile.Email;
    User.Name = profile.Name;
    User.Avatar = profile.Avatar;
  });
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.orangeOpac} />
      <Text>{User.Name}</Text>
      <Text>{User.Email}</Text>
      <Text>{User.Name}</Text>
    </SafeAreaView>
  );
};

export default AcceptFriendsScreen;
