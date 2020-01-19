import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/PersonComponentStyle';
import COLORS from '../assets/COLORS';
import {Avatar} from 'react-native-elements';
import User from './User';

const AddFriend = ({item}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          fetch('http://192.168.1.106:8081/api/users/' + item.Id + '/friends', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              friendId: User.Id,
            }),
          });
        }}
        style={styles.container}>
        <Avatar size="medium" rounded title="MD" />
        <Text style={styles.nameText}>{item.Name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddFriend;
