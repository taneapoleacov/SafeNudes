import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import styles from '../styles/LoginScreenStyle';
import COLORS from '../assets/COLORS';
import {Icon} from 'react-native-elements';
import User from '../components/User';
import base64 from 'react-native-base64';
import APIURL from '../components/APIURL';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _handlePress = () => {
    User.Email = email;
    User.Id = password;
    navigation.navigate('AllContacts');

    fetch(APIURL.URL + ':8082/api/login', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        credentials: base64.encode(email + ':' + password),
      },
    })
      .then(response => {
        if (response.status === 200) {
          navigation.navigate('EnterCode');
        } else {
          alert('Wrong Email OR Password');
        }
        response.json();
      })
      .then(responseJson => {});
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.blackgroundColor}
      />

      <Text style={styles.applicationTitle}>Safe Transfer </Text>

      <View style={styles.loginForm}>
        <Text style={styles.text}>Email</Text>
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
            placeholder="example@gmail.com"
            placeholderTextColor={COLORS.gray}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <Text style={styles.text}>Password</Text>
        <View style={styles.iconPossition}>
          <Icon
            name="lock"
            type="material"
            color={COLORS.accentColor}
            style={styles.icon}
            top={styles.icon.top}
            left={styles.icon.left}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="password"
            placeholderTextColor={COLORS.gray}
            secureTextEntry
            onChangeText={text => setPassword(text)}
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

      <View style={styles.createAccountView}>
        <Text style={styles.doNotHaveAccountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.createAccountText}> Create Account </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
