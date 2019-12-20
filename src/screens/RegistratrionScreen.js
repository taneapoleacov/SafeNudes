import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import styles from '../styles/LoginScreenStyle';
import COLORS from '../assets/COLORS';
import {Icon} from 'react-native-elements';
import User from '../components/User';
import firebase from 'firebase';
const RegistrationScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const _handlePress = () => {
    User.email = email;
    User.password = password;
    User.name = name;
    navigation.navigate('AllContacts');
    firebase
      .database()
      .ref('users/' + User.name)
      .set({name: User.name});
    // console.log(email);
    // console.log(password);
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
