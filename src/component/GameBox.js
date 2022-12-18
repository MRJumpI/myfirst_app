import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import StylishButton from './StylishButton';
import GAME from './Game';
import ImageLoader from './ImageLoader';

export default function GameBox(props) {
  const [display, setdisplay] = useState(false);
  const [show, setshow] = useState(props.show);
  const [q1, setq1] = useState(true);
  const [q2, setq2] = useState(false);
  const [q3, setq3] = useState(false);
  const [q4, setq4] = useState(false);
  const [intro, setintro] = useState(false);
  const [rules, setrules] = useState([
    { key: 1, rule: 'Four Qusetion Will be asked answer all.' },
    { key: 2, rule: 'Each question cary points accourding to your answer.' },
    { key: 3, rule: 'No Question should left empty.' },
  ]);

  return (
    <View>
      {show == 'true' ? (
        <TouchableOpacity
          style={styling.gamebtn}
          onPress={() => {
            if (display == false) setdisplay(true);
            else setdisplay(false);
          }}>
          <Text style={{ fontSize: 20 }}>{props.content}</Text>
        </TouchableOpacity>
      ) : null}
      {display ? (
        <View style={styling.container}>
          <View style={styling.card}>
            <Text style={styling.heading}>
              GAME
              <TouchableOpacity
                style={styling.btn}
                onPress={() => {
                  setintro(true);
                }}>
                <Text style={{ marginLeft: 15 }}>!</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View>
            <ImageLoader
              imgurl="https://c4.wallpaperflare.com/wallpaper/576/865/240/apofiss-cat-on-clouds-hd-black-cat-animation-wallpaper-thumb.jpg"
              imgwidth="100%"
              imgheight="60vh"
              blur="2"
            />
            <View style={styling.covercontainer}></View>
          </View>

         <GAME />

          {intro ? (
            <View style={{position:'absolute',top:80}}>
              <View style={styling.infobox1}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(190,190,190,0.5)',
                    marginTop: -20,
                    width: 250,
                    marginLeft: -20,
                    letterSpacing: 25,
                  }}
                  onPress={() => {
                    setintro(false);
                  }}>
                  <Text style={{ color: 'white' }}>CLOSE🔼</Text>
                </TouchableOpacity>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  {' '}
                  (Meow...) Hello, Cat Purgrammer here to help..🐱
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
                  ❕ Welcome to mini game 🐱. Rules are :
                  {rules.map((data) => (
                    <View key={data.key}>
                      <Text style={{ fontWeight: 'bold', color: 'black' }}>
                        {data.key}
                      </Text>
                      <Text>{data.rule}</Text>
                    </View>
                  ))}
                </Text>

                <Text style={{ color: 'black' }}> Have Fun.🐈</Text>
              </View>
            </View>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

const styling = StyleSheet.create({
  gamebtn: {
    width: 25,
    marginLeft: 5,
    backgroundColor: 'transparent',
    borderRadius: 50,
  },
  container: {
    width: 250,
    height: 420,
    backgroundColor: 'rgba(200,200,200,1)',
    marginTop: -480,
    marginLeft: -140,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 50,
    shadowOpacity: 2,
    overflow: 'hidden',
    borderTopColor: 'black',
    borderTopWidth: 3,
  },
  card: {
    width: 260,
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.66)',
    shadowColor: 'black',
    shadowRadius: 30,
    color: 'white',
    textAlign: 'center',
    overflow: 'hidden',
  },
  heading: {
    color: 'white',
    marginTop: 30,
    letterSpacing: 25,
    fontWeight: 'bold',
    fontSize: 28,
  },
  
  covercontainer: {
    width: '100%',
    height: '55%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    position: 'fixed',
  },
  btn: {
    backgroundColor: 'rgba(36, 114, 196, 0.55)',
    width: 40,
    height: 40,
    borderRadius: 50,
  },
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
  
});
