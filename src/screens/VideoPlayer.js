import { SafeAreaView, StyleSheet, ScrollView, TouchableHighlight, Text, View, FlatList, Image } from 'react-native'
import React, { useRef } from 'react'
import Style, { colors } from '../css'
import Video from 'react-native-video';
import VideoDataSet from '../utils/VideoDataSet';


const VideoPlayers = () => {

  const videoOnBuffer = ()=>{
    console.log('Buffering');
  }
  const videoOnError = ()=>{
    console.log('Error');
  }

  const ref = useRef()

  const arr = VideoDataSet['APPROPRIATE CULTURE SEASON 2'].links;


  return (
    <SafeAreaView style={styles.bg} >
        <View style={{ flex :1 }} >
            <Video 
                
                // source={require('../assert/video/1.mp4')}   // Can be a URL or a local file.
                source={{ uri : 'https://res.cloudinary.com/dts5uxlug/video/upload/v1675722991/WEBSITE%20ASSETS/APPROPRIATE%20CULTURE%20S2/Appropriate_Culture___S2_EP1___EX-TRAVAGANZA_copy_r1fkhi.mp4'}}   // Can be a URL or a local file.
                ref={ref}                             // Store reference
                onBuffer={videoOnBuffer}                // Callback when remote video is buffering
                onError={videoOnError}               // Callback when video cannot be loaded
                style={styles.backgroundVideo} 
                hideShutterView={true}
                controls
            />

            {/* Video Content */ }
            <ScrollView style={{ padding : 5, marginBottom  :50, width : '100%', flex: 1, gap:10}} >
              <View style={{ flex :0, gap : 0 }} >
                <Text style={[Style.h5, { fontWeight : "500" }]} >VideoPlayer Title goes here!</Text>
                <Text style={[Style.p, { fontWeight : "400" }]} >By Julian</Text>
              </View>

              <View style={{ flex :0, flexDirection :'row', alignItems:'center',  gap : 10, marginTop : 30 }} >
                <Text style={[Style.p, { fontWeight : "400" , flexBasis : '30%' }]} >Author:</Text>
                <Text style={[Style.p, { fontWeight : "400" }]} >Julian</Text>
              </View>
              <View style={{ flex :0, flexDirection :'row', alignItems:'center',  gap : 10 }} >
                <Text style={[Style.p, { fontWeight : "400", flexBasis : '30%' }]} >Duration:</Text>
                <Text style={[Style.p, { fontWeight : "400" }]} >10.20</Text>
              </View>
              <View style={{ flex :0, flexDirection :'row', alignItems:'center',  gap : 10 }} >
                <Text style={[Style.p, { fontWeight : "400", flexBasis : '30%' }]} >About:</Text>
                <Text style={[Style.p, { fontWeight : "400" }]} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
              </View>
              <View style={{ flex :0, flexDirection :'row', alignItems:'center',  gap : 10 }} >
                <Text style={[Style.p, { fontWeight : "400", flexBasis : '30%' }]} >Copyrights</Text>
                <Text style={[Style.p, { fontWeight : "400" }]} >@2023 Appropriate World</Text>
              </View>

              {/* Related Video */}
              <Text style={[Style.h5, { fontWeight : "500", marginTop: 20 }]} >Episodes</Text>
              <ScrollView horizontal={true} >
              <View style={styles.grid} >
              { arr.map((item)=>{
                
                return(
                  <View style={styles.box3} key={item['playlist-id']} >
                    <Image style={styles.image}  source={{uri : item.img}} />
                    <Text key={item.name} style={[Style.h5, styles.text, { fontWeight : 800 }]} >{item.name}</Text>
                  </View>
                )
              }) }
              </View>
              </ScrollView>
              {/* <FlatList 
                style={{ flex :0, flexDirection :'row', alignItems:'center',  gap : 10 }}
                data={arr}
                renderItem={(item)=>{
                //   <View style={styles.box3} >
                //   <Image source={} />
                // </View>
                <Text key={item.name} style={Style.h1} >{item.name}</Text>
                } }
                keyExtractor={(item) => item.id}
              /> */}
              {/* <ScrollView>
                <View style={styles.grid} >
                 
                </View>
              </ScrollView> */}

            </ScrollView>       

        </View>
    </SafeAreaView>
  )
}

export default VideoPlayers

const styles = StyleSheet.create({
  bg:{
    backgroundColor : colors.primary,    
    flex : 1,
    paddingBottom : 100,
    width: '100%'
  },
  backgroundVideo: {
    width : '100%',
    height:300
  },
  box3: {
    backgroundColor: '#651064',
    width: 280,
    height: 170,
    borderRadius: 15,
    overflow: 'hidden',
  },
  grid: {
    paddingVertical : 10,
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  text: {
    position : 'absolute',
    bottom : 5,
    left : 5
  }
   
})