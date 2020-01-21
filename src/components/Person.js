import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/PersonComponentStyle';
import COLORS from '../assets/COLORS';
import {Avatar} from 'react-native-elements';
const Person = ({navigation, item}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Chat', item);
        }}
        style={styles.container}>
        <Avatar size="medium" rounded title="MD" />
        <Text style={styles.nameText}>{item.Name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Person;
