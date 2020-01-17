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
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import dadada from '../../App';
import COLORS from '../assets/COLORS';
import styles from '../styles/ChatScreenStyle';
import User from '../components/User';
import Message from '../components/Message';
const ChatScreen = ({navigation}) => {
  const [textMessage, setTextMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const [person, setPerson] = useState({
    name: navigation.getParam('name'),
  });

  const sendMessage = async () => {
    // if (textMessage.length > 0) {
    //   let msgId = firebase
    //     .database()
    //     .ref('message')
    //     .child(User.name)
    //     .child(person.name)
    //     .push().key;
    //   let updates = {};
    //   let message = {
    //     message: textMessage,
    //     time: firebase.database.ServerValue.TIMESTAMP,
    //     from: User.name,
    //   };
    //   updates[
    //     'messages/' + User.name + '/' + person.name + '/' + msgId
    //   ] = message;
    //   updates[
    //     'messages/' + person.name + '/' + User.name + '/' + msgId
    //   ] = message;
    //   firebase
    //     .database()
    //     .ref()
    //     .update(updates);
    //   setTextMessage('');
    // }
  };

  // const handleChange = ({name}) => {
  //   setPerson({name: name});
  // };

  useEffect(() => {
    ChatScreen.navigationOptions = {
      title: navigation.getParam('Name'),
    };
    //   firebase
    //     .database()
    //     .ref('messages')
    //     .child(User.name)
    //     .child(person.name)
    //     .on('child_added', value => {
    //       setMessageList(messageList => [...messageList, value.val()]);
    //     });
  }, []);

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
