import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../css'
import { useNavigation } from '@react-navigation/native';


const FloatButton = ({type, action = null, redirect = null}) => {

  const navigation = useNavigation();


  const FloatButtonHandler = ()=>{
    if(redirect){
      navigation.navigate(redirect)
    }
  }

  return (
    <TouchableOpacity style={styles.addContainer} onPress={FloatButtonHandler} >
      <Image source={require('../assert/icons/plus.png')}  style={styles.icon}  />
    </TouchableOpacity>
  )
}

export default FloatButton

const styles = StyleSheet.create({
    addContainer: {
        position : 'absolute',
        bottom : 70,
        right : 20,
        backgroundColor : colors.secondry,
        zIndex : 5,
        borderRadius : 50,
        padding : 10,
        color : '#fff',
        // width : 25,
        // height : 30
    },
    icon : {
        width : 25,
        height : 25
    }
})