import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../assets/COLORS';
const {HEIGHT, WIDTH} = Dimensions.get('window');

const ChatScreenStyle = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: COLORS.blackgroundColor,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    padding: 10,
    width: '80%',
    borderWidth: 1,
    marginBottom: 5,
    marginRight: '5%',
    borderColor: COLORS.accentColor,
    color: COLORS.white,
  },
  button: {
    color: COLORS.white,
    fontSize: 18,
  },
});
export default ChatScreenStyle;
