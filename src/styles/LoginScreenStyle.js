import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../assets/COLORS';
const {width: WIDTH} = Dimensions.get('window');

const LoginScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blackgroundColor,
    alignItems: 'center',
  },
  inputBox: {
    marginBottom: 20,
    width: WIDTH - 100,
    height: 40,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    marginHorizontal: 30,
    color: COLORS.white,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    left: '4%',
  },
  buttonWiew: {
    top: '10%',
  },
  loginForm: {
    top: '30%',
  },
  textLogin: {
    fontSize: 20,
    color: COLORS.white,
    alignSelf: 'center',
  },
  button: {
    borderRadius: 5,
    width: WIDTH / 2.2,
    height: 45,
    backgroundColor: COLORS.accentColor,
    justifyContent: 'center',
    color: COLORS.white,
    alignSelf: 'center',
  },
  createAccountView: {
    flexDirection: 'row',
    top: '110%',
  },
  createAccountText: {
    color: COLORS.accentColor,
    fontSize: 18,
  },
  doNotHaveAccountText: {
    color: COLORS.white,
    fontSize: 18,
  },
  applicationTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 40,
    top: '10%',
    color: COLORS.white,
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: '15%',
    left: '80%',
  },
  iconPossition: {
    flexDirection: 'row',
  },
});

export default LoginScreenStyle;
