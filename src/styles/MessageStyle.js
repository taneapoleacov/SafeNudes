import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../assets/COLORS';
const {width: WIDTH} = Dimensions.get('window');

const MessageStyle = StyleSheet.create({
  text: {
    color: COLORS.white,
    fontSize: 20,
  },
  time: {
    color: COLORS.white,
    fontSize: 14,
  },
});
export default MessageStyle;
