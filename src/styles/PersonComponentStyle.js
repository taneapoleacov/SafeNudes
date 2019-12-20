import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../assets/COLORS';
const {width: WIDTH} = Dimensions.get('window');

const PersonComponetStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    marginLeft: '2%',
    marginBottom: '2%',
  },
  nameText: {
    fontSize: 24,
    marginLeft: '5%',
  },
});
export default PersonComponetStyle;
