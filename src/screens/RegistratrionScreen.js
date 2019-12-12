import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import styles from '../styles/LoginScreenStyle';
import COLORS from '../assets/COLORS';
import {Icon} from 'react-native-elements';
const RegistrationScreen = ({navigation}) => {
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
            onChangeText={text => this.setState({email: text})}
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
            onChangeText={text => this.setState({password: text})}
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
            onChangeText={text => this.setState({password: text})}
          />
        </View>

        <View style={styles.buttonWiew}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._handlePress()}>
            <Text style={styles.textLogin}> Create Account </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegistrationScreen;
