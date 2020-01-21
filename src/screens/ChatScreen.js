import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  AsyncStorage,
} from 'react-native';
import COLORS from '../assets/COLORS';
import styles from '../styles/ChatScreenStyle';
import User from '../components/User';
import Message from '../components/Message';
import APIURL from '../components/APIURL';
import isContain from '../functions/isConaintMessage';
import useInterval from '../functions/useInterval';

const ChatScreen = ({navigation}) => {
  const [textMessage, setTextMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const secondUser = navigation.getParam('Id');
  const chat_id = navigation.getParam('chat_id');

  useInterval(() => {
    fetch(APIURL.URL + ':8089/api/chats/' + chat_id + '/messages')
      .then(response => response.json())
      .then(responseJson => {
        for (const key in responseJson) {
          if (!isContain(responseJson[key], messageList)) {
            setMessageList(messageList => [...messageList, responseJson[key]]);
          }
        }
      })
      .catch(error => console.log(error));
  }, 500);

  const sendMessage = () => {
    fetch(APIURL.URL + ':8089/api/chats/' + chat_id + '/messages', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to_user: secondUser,
        from_user: User.Id,
        message: textMessage,
      }),
    });
  };

  const renderRow = ({item}) => {
    return <Message item={item} />;
  };

  return (
    <SafeAreaView style={styles.containter}>
      <FlatList
        data={messageList}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setTextMessage(text)}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Text style={styles.button}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

ChatScreen.navigationOptions = ({navigation}) => {
  return {
    title: navigation.getParam('Name'),
  };
};
