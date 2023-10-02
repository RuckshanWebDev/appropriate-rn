import {SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import Style, { colors } from '../css';
import Post from '../components/Post';

const ActivityScreen = () => {
  return (
    <SafeAreaView style={[styles.bg, Style.pbM]}>
      <ScrollView>
        <View style={[styles.row, Style.pbM]} >
          <Image style={Style.avatarProfileS} source={require('../assert/p1.jpg')} />
          <TextInput style={styles.input} placeholder="What's on your mind..." placeholderTextColor='#fff' />
          <TouchableOpacity><Image style={styles.uploadIcon} source={require('../assert/icons/gallery.png')} /></TouchableOpacity>
        </View>
        <Post text={'text'} />
        <Post text={'text'} image={'image'} />
        <Post  image={'image'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  bg : {
    backgroundColor : colors.primary,
    flex : 1,
  },
  row: {
    padding : 10,
    flex : 1,
    flexDirection : 'row',
    gap : 6,
    // height : 70,
    alignItems :'center',
    borderBottomColor : "#e5e5e5",
    borderWidth : 1

  },
  input:{
    paddingHorizontal : 15,
    color : "#fff",
    borderWidth: 2,
    padding : 10,
    borderRadius : 50,
    fontSize: 18,
    backgroundColor : colors.secondry,
    flexGrow :1,
    height : 50
  },
  uploadIcon : {
    width : 40,
    height : 40
  }
})
