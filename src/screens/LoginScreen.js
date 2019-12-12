import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import styles from '../styles/LoginScreenStyle';
import COLORS from '../assets/COLORS';
import {Icon} from 'react-native-elements';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _handlePress = () => {
    console.log(email);
    console.log(password);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.blackgroundColor}
      />

      <Text style={styles.applicationTitle}>Safe Transfer</Text>

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
