import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/PersonComponentStyle';
import COLORS from '../assets/COLORS';
import {Avatar} from 'react-native-elements';

const Person = ({name}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Avatar size="medium" rounded title="MD" />
        <Text style={styles.nameText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Person;
