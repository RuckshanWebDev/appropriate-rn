import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#1a0939',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  p: {
    color: '#f6f4fb',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'sans',
  },
  h1: {
    color: '#fff',
    fontSize: 42,
    fontWeight: '400',
    fontFamily: 'sans',
  },
  h3: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '400',
    fontFamily: 'sans',
  },
  input: {
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#dadae8',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#ff0000',
    borderWidth: 0,
    color: '#FFFFFF',
    width: 10,
    margin: 20,
  },
});

export default style;
