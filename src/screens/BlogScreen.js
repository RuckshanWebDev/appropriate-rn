import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Style from '../css';
import {BlurView} from '@react-native-community/blur';
import {colors} from '../css';

const BlogScreen = () => {
  return (
    <SafeAreaView style={style.bg}>
      <ScrollView>
        <View style={style.blog}>
          <Image style={style.blogCover} source={require('../assert/p1.jpg')} />
          <Text style={Style.h3}> Hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogScreen;

const style = StyleSheet.create({
  bg: {
    backgroundColor: colors.primary,
    padding: 10,
    flex: 1,
  },
  blog: {
    alignSelf: 'stretch',
    backgroundColor: '#f6f4fb',
    width: '100%',
    height: 300,
    borderRadius: 10,
    padding: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  blogCover: {
    width: '100%',
    objectFit: 'cover',
    height: '80%',
    borderRadius: 10,
  },
});
