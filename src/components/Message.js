import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/MessageStyle';
import COLORS from '../assets/COLORS';
import User from './User';

const Message = ({item}) => {
  return (
    <View
      style={{
        height: 80,
        width: '60%',
        marginBottom: 4,
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: item.from_user == User.Id ? 'flex-end' : 'flex-start',
        backgroundColor:
          item.from_user == User.Id ? COLORS.accentColor : COLORS.orangeOpac,
      }}>
      <View style={{alignSelf: 'flex-end', marginRight: 10}}>
        <Text style={styles.time}>{item.inclusion_date}</Text>
      </View>
      <View
        style={{
          alignSelf: 'flex-start',
          marginLeft: 10,
        }}>
        <Text style={styles.text}>{item.message}</Text>
      </View>
    </View>
  );
};

export default Message;
