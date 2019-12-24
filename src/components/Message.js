import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/MessageStyle';
import COLORS from '../assets/COLORS';

const Message = ({item}) => {
  return (
    <View>
      <Text style={styles.text}>{item.time}</Text>
      <Text style={styles.text}>{item.message}</Text>
    </View>
  );
};

export default Message;
