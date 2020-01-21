import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import styles from '../styles/LoginScreenStyle';
import COLORS from '../assets/COLORS';
import {Icon} from 'react-native-elements';
import User from '../components/User';
import APIURL from '../components/APIURL';
import jwt_decode from 'jwt-decode';

const EnterCodeScreen = ({navigation}) => {
  const [code, setCode] = useState('');

  const _handlePress = () => {
    fetch(
      APIURL.URL + ':8082/api/check/code?email=' + User.Email + '&code=' + code,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    ).then(response => {
      console.log(response);
      console.log(User.Email);
      console.log(code);
      if (response.status === 200) {
        response.json().then(responseJson => {
          Object.keys(responseJson).forEach(function(key) {
            var value = responseJson[key];
            var decoded = jwt_decode(value);
            User.Id = decoded.id;
            User.Name = decoded.sub;
          });
          navigation.navigate('AllContacts');
        });
      } else {
        alert('Wrong Code');
      }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.blackgroundColor}
      />

      <Text style={styles.applicationTitle}>Safe Transfer </Text>

      <View style={styles.loginForm}>
        <Text style={styles.text}>Enter Code</Text>
        <View style={styles.iconPossition}>
          <Icon
            name="email"
            type="material"
            color={COLORS.accentColor}
            style={styles.icon}
            top={styles.icon.top}
            left={styles.icon.left}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="code from email"
            placeholderTextColor={COLORS.gray}
            onChangeText={text => setCode(text)}
          />
        </View>

        <View style={styles.buttonWiew}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => _handlePress()}>
            <Text style={styles.textLogin}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EnterCodeScreen;
