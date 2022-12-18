import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function InfoBox() {
  const styling = StyleSheet.create({
    infobox1: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      color: 'white',
      textAlign: 'center',
      padding: 20,
      width: 250,
      borderBottomColor: 'white',
      borderBottomWidth: 2,
    },
    infobox2: {
      backgroundColor: 'rgba(36, 114, 196, 1)',
      color: 'white',
      textAlign: 'center',
      padding: 20,
      width: 250,
    },
    cross: {
      position: 'absolute',
      top: 0,
      marginLeft: 0,
      backgroundColor: 'black',
      color: 'white',
      width: 250,
      textAlign: 'center',
      zIndex: 1,
    },
  });

  return (
    <View>
      <View></View>
      <View style={{ marginTop: -500, marginLeft: -80 }}>
        <View>
          <TouchableOpacity style={styling.cross}></TouchableOpacity>
        </View>

        <View style={styling.infobox1}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            {' '}
            (Meow...) Welcome to Cat Purgrammer App..🐱
          </Text>
        </View>
        <View style={styling.infobox2}>
          <Text
            style={{
              color: 'white',
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              marginVertical: 15,
            }}>
            {' '}
            ❕ This App is just created for fun.My First App based on My First
            Web Project about cats. I Start doing Project from sketch and learn
            a lot of new things. Actually this is based on my skills.
          </Text>

          <Text style={{ color: 'black' }}>
            {' '}
            ❔ In this app you intaract with a cat. If you want you can tell her
            you name .. There is chat room where you can talk with cat and at
            the end it will judge you character .. also there is a mini game to
            play with cat .. You can also see the thing this cat loves to do.🐈
          </Text>
        </View>
      </View>
    </View>
  );
}
