import {Image,SafeAreaView,ScrollView,StyleSheet,Text,View,TouchableOpacity } from 'react-native';
import Style from '../css';
import {BlurView} from '@react-native-community/blur';
import {colors} from '../css';
import FloatButton from '../components/FloatButton';

const BlogScreen = ({navigation}) => {

  const blogPressHandler = ()=>{
    navigation.navigate('SingleBlog');
  }

  return (
    <SafeAreaView style={[style.bg, Style.pbM]}>
      <FloatButton type={'add'} redirect={'AddBlog'} />
      <ScrollView>
        <TouchableOpacity key={3} style={[style.blog, Style.mbM]} onPress={blogPressHandler} >
          <Image style={[style.blogCover]} source={require('../assert/p1.jpg')} />
          <Text style={[Style.h4, Style.mtS]}>Hello World!, This is a blog title please click to read more...</Text>
        </TouchableOpacity >
        <View key={1} style={[style.blog, Style.mbM]}>
          <Image style={[style.blogCover]} source={require('../assert/p2.jpg')} />
          <Text style={[Style.h4, Style.mtS]}>Hello World!, This is a blog title please click to read more...</Text>
        </View>
        <View key={2} style={[style.blog, Style.mbM]}>
          <Image style={[style.blogCover]} source={require('../assert/p3.jpg')} />
          <Text style={[Style.h4, Style.mtS]}>Hello World!,dfgdg This is a blog title please click to read more...</Text>
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
    backgroundColor: colors.dark,
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    padding: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  blogCover: {
    width: '100%',
    objectFit: 'cover',
    height: 200,
    borderRadius: 10,
  },  
});
