import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
export default function CheckBox(props) {
  const [checkbox1, setcheckbox1] = useState(false);
  const [checkbox2, setcheckbox2] = useState(false);
  const [checkbox3, setcheckbox3] = useState(false);
  
  const [colorcheckbox, setcolorcheckbox] = useState('transparent');

  useEffect(() => {
    if (checkbox1 == true||checkbox2 == true||checkbox3 == true) {
      setcolorcheckbox(props.color);
    } else {
      setcolorcheckbox('transparent');
    }
  }, [checkbox1]);

  const style_radio = StyleSheet.create({
    checkbutton: {
      borderWidth: 4,
      borderRadius: 20,
      width:30,
      height: 30,
      marginLeft: 0,
      marginRight: 10,
      marginVertical: 10,
      paddingLeft: 5,
      paddingBottom: 5,
      borderColor: "rgba(200,200,200,0.8)",
      backgroundColor: colorcheckbox,
      shadowColor:"black",
      shadowRadius:"7px",
               },
    container: {
      flex: 1,
      flexDirection: 'row',
      margin: 8,
    },
    content: {
      fontWeight:'none',
      margin: 10,
      fontSize: 18,
      color: 'white',
    },
  });

  return (
    <View>
     <ScrollView>
      <View style={style_radio.container}>
        <TouchableOpacity
          style={style_radio.checkbutton}
          onPress={() => {
            if (checkbox2 == false) {
              setcheckbox1(true), setcheckbox2(false), setcheckbox3(false);
               
            } else {
              setcheckbox2(false), setcheckbox1(false), setcheckbox3(false);
            }
          }}>
          {checkbox1 ? (
            <Text
              style={{
                fontSize: 16,
                color: 'rgba(36, 114, 196, 1)',
              }}>
              ✔
            </Text>
          ) : null}
        </TouchableOpacity>
        <Text style={style_radio.content}> cat 1 </Text>
      </View>
      <View style={style_radio.container}>
        <TouchableOpacity
          style={style_radio.checkbutton}
          onPress={() => {
            if (checkbox2 == false) {
              setcheckbox2(true), setcheckbox1(false), setcheckbox3(false);
             
            } else {
              setcheckbox2(false), setcheckbox3(false), setcheckbox1(false);
            }
          }}>
          {checkbox2 ? (
            <Text
              style={{
               fontSize: 16,
                color: 'rgba(36, 114, 196, 1)',
              }}>
              ✔
            </Text>
          ) : null}
        </TouchableOpacity>
        <Text style={style_radio.content}> cat 2 </Text>
      </View>
      <View style={style_radio.container}>
        <TouchableOpacity
          style={style_radio.checkbutton}
          onPress={() => {
            if (checkbox3 == false) {
              setcheckbox3(true), setcheckbox2(false), setcheckbox1(false);
             
            } else {
              setcheckbox2(false), setcheckbox3(false), setcheckbox1(false);
            }
          }}>
          {checkbox3 ? (
            <Text
              style={{
               fontSize: 16,
                color: 'rgba(36, 114, 196, 1)',
              }}>
              ✔
            </Text>
          ) : null}
        </TouchableOpacity>
        <Text style={style_radio.content}> cat 3 </Text>
      </View>
    </ScrollView>
    </View>
  );
}
