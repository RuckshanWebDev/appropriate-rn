import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={style.container}>
      <View style={style.container}>
        <Text style={style.title}>Appropriate World</Text>
        <ScrollView
          scrollEnabled={true}
          scrollToOverflowEnabled={true}
          horizontal={true}>
          <View style={style.grid}>
            <View style={style.box}></View>
            <View style={style.box}></View>
            <View style={style.box}></View>
            <View style={style.box}></View>
          </View>
        </ScrollView>
      </View>
      <View style={style.box2}></View>
      <View style={style.box2}></View>
      <View style={style.box2}></View>
      <View style={style.box2}></View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0939',
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
});
