import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../assets/COLORS';
const {width: WIDTH} = Dimensions.get('window');

const MessageStyle = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    width: '60%',
  },
  text: {
    color: COLORS.white,
  },
});
export default MessageStyle;
