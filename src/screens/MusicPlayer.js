import {StyleSheet, Image,TouchableOpacity, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import Style, { colors } from '../css';
import Slider from '@react-native-community/slider';



const MusicPlayer = () => {
  return (
    <SafeAreaView style={styles.bg} >
        <Text style={[Style.h4, { textAlign : 'center' }]} >Music title goes here</Text>
        <Image source={require('../assert/p3.jpg')} style={[styles.cover, Style.mtS]} />

        {/* TITLE */}
        {/* TIMELINE */}
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
              
        {/* BUTTON OPTIONS */}
        <View style={[Style.row, {justifyContent : 'space-evenly' , alignItems : 'center', gap : 35} ]} >
          <TouchableOpacity style={styles.btn} >
            <Image style={Style.iconL} source={require('../assert/icons/shuffle.png')} />
          </TouchableOpacity>
          <TouchableOpacity  >
            <Image style={Style.iconS} source={require('../assert/icons/step-backward.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundBtn} >
            <Image style={Style.iconL} source={require('../assert/icons/play.png')} />
          </TouchableOpacity>
          <TouchableOpacity  >
            <Image style={Style.iconS} source={require('../assert/icons/step-forward.png')} />
          </TouchableOpacity>
          <TouchableOpacity  >
            <Image style={Style.iconL} source={require('../assert/icons/loop.png')} />
          </TouchableOpacity>
        </View>


    </SafeAreaView>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  bg:{
    backgroundColor : colors.primary, 
    flex : 1,
    padding : 10,
    alignItems : "center",
    gap : 10
  },
  cover : {
    width : 300,
    height : 300,
    borderRadius : 10,
    marginHorizontal : 'auto'
  },
  btn:{

  },
  roundBtn:{
    backgroundColor : colors.secondry,
    padding : 20,
    borderRadius : 100
  }

});


