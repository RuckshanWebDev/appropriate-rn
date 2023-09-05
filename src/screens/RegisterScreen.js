import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import Style from '../css';

const RegisterScreen = () => {
  return (
    <View style={Style.bg}>
      <Image
        resizeMode="cover"
        style={style.logo}
        source={require('../assert/logo.gif')}
      />
      <TextInput
        style={Style.input}
        underlineColorAndroid="#f000"
        placeholder="Email"
        placeholderTextColor="#8b9cb5"
        autoCapitalize="sentences"
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <TextInput
        style={Style.input}
        underlineColorAndroid="#f000"
        placeholder="Password"
        placeholderTextColor="#8b9cb5"
        autoCapitalize="sentences"
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <Button color={'#5d2ad1'} style={Style.btn} title="Click" />
    </View>
  );
};

export default RegisterScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0939',
    color: '#fff',
  },
  title: {
    color: '#f6f4fb',
    fontSize: 30,
    fontWeight: '500',
    paddingTop: 10,
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#651064',
    width: 300,
    height: 170,
    borderRadius: 15,
  },
  box2: {
    backgroundColor: '#651064',
    width: 300,
    height: 170,
    borderRadius: 15,
    marginLeft: 10,
    marginVertical: 30,
  },
  grid: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 10,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 30,
    marginHorizontal: 'auto',
    alignSelf: 'center',
  },
});
