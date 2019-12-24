import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/MessageStyle';
import COLORS from '../assets/COLORS';
import User from './User';

const Message = ({item}) => {
  const convertTime = time => {
    let d = new Date(time);
    let c = new Date();
    let result = (d.getHours() < 10 ? '0' : '') + d.getHours() + ':';
    result += (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    // if (c.getHours() != d.getDay()) {
    //   result = d.getDay() + ' ' + d.getMonth() + ' ' + result;
    // }
    return result;
  };

  return (
    <View
      style={{
        height: 60,
        width: '60%',
        marginBottom: 4,
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: item.from === User.name ? 'flex-end' : 'flex-start',
        backgroundColor:
          item.from === User.name ? COLORS.accentColor : COLORS.orangeOpac,
      }}>
      <View style={{alignSelf: 'flex-end', marginRight: 10}}>
        <Text style={styles.time}>{convertTime(item.time)}</Text>
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
