import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import styles from '../styles/LoginScreenStyle';
import COLORS from '../assets/COLORS';
import {Icon} from 'react-native-elements';
import User from '../components/User';
import APIURL from '../components/APIURL';

const RegistrationScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const _handlePress = () => {
    User.Email = email;
    User.Password = password;
    User.Name = name;

    if (password !== confirmPassword) {
      alert('These passwords dont match');
    } else {
      fetch(APIURL.URL + ':8082/api/registration', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
          Avatar: 'img_here',
          Name: name,
        }),
      })
        .then(response => {
          if (response.status === 201) {
            navigation.navigate('EnterCode');
          } else {
            alert('This email is already taken by another account');
          }
          response.json();
        })
        .then(responseJson => {
          console.log(responseJson);
        });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.blackgroundColor}
      />

      <Text style={styles.applicationTitle}>Safe Transfer</Text>

      <View style={styles.loginForm}>
        <Text style={styles.text}>Name</Text>
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
            placeholder="name"
            placeholderTextColor={COLORS.gray}
            onChangeText={text => setName(text)}
          />
        </View>

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

        <Text style={styles.text}>Confirm Password</Text>
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
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>

        <View style={styles.buttonWiew}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => _handlePress()}>
            <Text style={styles.textLogin}> Create Account </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegistrationScreen;
