import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../assets/COLORS';
const {HEIGHT, WIDTH} = Dimensions.get('window');

const AllContactsStyle = StyleSheet.create({
  button: {
    color: COLORS.white,
    position: 'absolute',
    bottom: 0,
  },
});
export default AllContactsStyle;
