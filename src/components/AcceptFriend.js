import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/PersonComponentStyle';
import COLORS from '../assets/COLORS';
import {Avatar} from 'react-native-elements';
import User from './User';
import APIURL from '../components/APIURL';

const AceeptFriend = ({item}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          fetch(
            APIURL.URL + ':8081/api/users/' + User.Id + '/friends/' + item.Id,
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

          fetch(APIURL.URL + ':8089/api/chats?email=' + User.Email, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_two: secondUser,
            }),
          }).then(response => {
            if (response.status === 200) {
              console.log('chat created');
            } else {
              console.log('chat exists');
            }
          });
        }}
        style={styles.container}>
        <Avatar size="medium" rounded title="MD" />
        <Text style={styles.nameText}>{item.Name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AceeptFriend;
