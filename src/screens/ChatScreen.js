import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {createAppContainer} from 'react-navigation';

import COLORS from '../assets/COLORS';
import styles from '../styles/ChatScreenStyle';
import User from '../components/User';

const ChatScreen = ({navigation}) => {
  const [textMessage, setTextMessage] = useState('');

  // const [person, setPerson] = useState({
  //   name: User
  // });
  // const sendMessage = async (){
  //   if(textMessage.length > 0){
  //     let msgId = firebase.database().ref('message').child(User.name).child()()
  //   }
  // }

  useEffect(() => {
    console.log(navigation);
    navigation.setParams({title: 'dada'});
    console.log(navigation);
  }, []);

  return (
    <SafeAreaView style={styles.containter}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setTextMessage(text)}
        />
        <TouchableOpacity>
          <Text style={styles.button}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
