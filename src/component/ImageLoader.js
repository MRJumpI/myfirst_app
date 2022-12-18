import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function ImageLoader(props) {
  const [src_img,setsource_img]=useState('https://w0.peakpx.com/wallpaper/212/65/HD-wallpaper-attractive-creature-animal-butterfly-glow-cat-cute-cute-cat-cute-cat-cute-kitten-fantasy-glowing-butterfly.jpg');
  useEffect(()=>{
    if(props.imgurl=='')
    {
      setsource_img('https://w0.peakpx.com/wallpaper/212/65/HD-wallpaper-attractive-creature-animal-butterfly-glow-cat-cute-cute-cat-cute-cat-cute-kitten-fantasy-glowing-butterfly.jpg')
    }
    else
    setsource_img(props.imgurl)
  },[])
  const styling = StyleSheet.create({
    container: {
      flex: 1,
      width: props.imgwidth,//'100%'
      height: props.imgheight,//'110vh'
      color: 'white',
    },
  });

  return (
    <View style={{ fontFamily: 'monospace' }}>
      <ImageBackground
        source={{
          uri:src_img ,
        }}
       
        style={styling.container}
        resizeMethod="cover"
         blurRadius={props.blur}>
      </ImageBackground>
    </View>
  );
}
