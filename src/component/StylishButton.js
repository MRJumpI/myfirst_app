

import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function StylishButton(props) {
  const [colortouch, setcolortouch] = useState(props.bottomlayertextcolor);
  const [touch,settouch]=useState(false)
  useEffect(() => {
    if (touch == true) {
      setcolortouch(props.toplayercolor);
      alert('press above button now..')
    } else setcolortouch(props.bottomlayertextcolor);
  }, [touch]);

  const styling = StyleSheet.create({
    bigButton: {
      width: '60%',
      color: props.textcolor,
      padding: 15,
      backgroundColor: props.color,
      flex: 1,
      borderRadius: 20,
      marginLeft: 20,
      overflow: 'hidden',
      shadowColor: 'black',
      shadowRadius: 10,
      alignSelf: 'center',
      textTransform:'uppercase',
      letterSpacing:5,
      marginVertical:props.margininline,
    },

    bigButton_t: {
      width: '120%',
      color: props.toplayertextcolor,
      fontFamily: 'monospace',
      fontSize: 15,
      padding: 15,
      backgroundColor: props.toplayercolor,
      marginTop: -15,
      marginLeft: -15,
      fontWeight: 'bold',
    },
    bigButton_b: {
      width: '100%',
      color: colortouch,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily:'system-ui',
      backgroundColor:props.bottomlayercolor
    },

  });

  return (
    <View style={{fontFamily:'monospace'}}>
      
        <View style={styling.bigButton}>
          <Text style={styling.bigButton_t}>
          {props.topLayercontent}
          </Text>
          <TouchableOpacity
          onPress={()=>{settouch(true), setTimeout(()=>{
            settouch(false)
          },5000)}
         } 
         >
            <Text style={styling.bigButton_b}> {props.bottomLayercontent}
         </Text>
          </TouchableOpacity>
        </View>

          </View>
  );
}
