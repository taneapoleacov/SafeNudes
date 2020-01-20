import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/PersonComponentStyle';
import COLORS from '../assets/COLORS';
import {Avatar} from 'react-native-elements';
import User from './User';

const AceeptFriend = ({item}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          fetch(
            'http://192.168.103.103:8081/api/users/' +
              User.Id +
              '/friends/' +
              item.Id,
            {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                status: 2,
              }),
            },
          );
        }}
        style={styles.container}>
        <Avatar size="medium" rounded title="MD" />
        <Text style={styles.nameText}>{item.Name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AceeptFriend;
