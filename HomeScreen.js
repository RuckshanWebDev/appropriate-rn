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
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  title: {
    color: '#f6f4fb',
    fontSize: 22,
    fontWeight: '500',
  },
  header: {
    flex: 1,
    height: 400,
    width: '100%',
  },
  headerText: {
    position: 'absolute',
    zIndex: 10,
    color: '#f6f4fb',
    fontSize: 42,
    fontWeight: '500',
    bottom: 10,
    left: 10,
  },
  link: {
    color: '#c0afdf',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  box: {
    backgroundColor: '#651064',
    width: 190,
    height: 240,
    borderRadius: 15,
    overflow: 'hidden',
  },
  box2: {
    backgroundColor: '#651064',
    width: '48%',
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
  },
  grid: {
    padding: 15,
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },
  grid2: {
    padding: 15,
    marginTop: 10,
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  mtS: {marginTop: 10},
  mtM: {marginTop: 25},
  mtL: {marginTop: 50},
  mbS: {marginBottom: 10},
  mbM: {marginBottom: 25},
  mbL: {marginBottom: 50},
  ptS: {paddingTop: 10},
  ptM: {paddingTop: 25},
  ptL: {paddingTop: 50},
  pbS: {paddingBottom: 10},
  pbM: {paddingBottom: 25},
  pbL: {paddingBottom: 80},
});
