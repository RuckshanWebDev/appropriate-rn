import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Style, {colors} from '../css';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View
          style={[
            style.profileBg,
            Style.column,
            Style.ptM,
            {alignItems: 'center'},
          ]}>
          <Image
            style={[Style.avatarProfile, Style.mbS]}
            source={require('../assert/pp.jpg')}
          />
          <Text style={Style.h1}>Shan Ruckshan</Text>
          <Text style={Style.h3}>Developer</Text>
          <Text style={Style.p}>
            Ready for the Future 😴🥱😫, As Always.....
          </Text>
        </View>

        <View style={[Style.mtM, {padding: 10}]}>
          <Text
            style={[
              Style.h3,
              {borderBottomColor: '#ffffff', borderBottomWidth: 1},
            ]}>
            About
          </Text>

          <View
            style={[
              Style.row,
              Style.mtM,
              {gap: 20, alignItems: 'center', paddingHorizontal: 20},
            ]}>
            <Image style={style.icon} source={require('../assert/icons/name.png')} />
            <Text style={Style.h5}>Ruckshan</Text>
          </View>
          <View
            style={[
              Style.row,
              Style.mtS,
              {gap: 20, alignItems: 'center', paddingHorizontal: 20},
            ]}>
            <Image style={style.icon} source={require('../assert/icons/dob.png')} />
            <Text style={Style.h5}>12.03.2001</Text>
          </View>
          <View
            style={[
              Style.row,
              Style.mtS,
              {gap: 20, alignItems: 'center', paddingHorizontal: 20},
            ]}>
            <Image
              style={style.icon}
              source={require('../assert/icons/creator.png')}
            />
            <Text style={Style.h5}>Developer</Text>
          </View>
          <View
            style={[
              Style.row,
              Style.mtS,
              {gap: 20, alignItems: 'center', paddingHorizontal: 20},
            ]}>
            <Image
              style={style.icon}
              source={require('../assert/icons/location.png')}
            />
            <Text style={Style.h5}>Canada</Text>
          </View>
          <View
            style={[
              Style.row,
              Style.mtS,
              {gap: 20, alignItems: 'center', paddingHorizontal: 20},
            ]}>
            <Image
              style={style.icon}
              source={require('../assert/icons/interest.png')}
            />
            <Text style={Style.h5}>Sports, Games</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  profileBg: {
    backgroundColor: colors.secondry ,
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomEndRadius: 15,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
