import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import StylishButton from './StylishButton';
import CheckBox from './CheckBox';
import ImageLoader from './ImageLoader';

export default function GAME() {
  const [q1, setq1] = useState(true);
  const [q2, setq2] = useState(false);
  const [q3, setq3] = useState(false);
  const [q4, setq4] = useState(false);
  const [checkbox1, setcheckbox1] = useState(false);
  const [checkbox2, setcheckbox2] = useState(false);
  const [checkbox3, setcheckbox3] = useState(false);
  const [congo, setcongo] = useState(false);
  const [option, setoption] = useState(false);
  const [pasword, setpasword] = useState('');
  const [paswordchck, setpaswordchck] = useState(false);
  const [result, setresult] = useState(false);
  const styling = StyleSheet.create({
    question: {
      backgroundColor: 'rgba(200, 200, 200,0.35)',
      color: 'black',
      width: '40vh',
      marginBottom: 15,
      padding: 5,
      textAlign: 'center',
      height: 70,
    },
    okbutton: {
      backgroundColor: 'rgba(0,0,0,.8)',
      borderBottomEndRadius: 30,
      borderBottomStartRadius: 30,
      position: 'fixed',
      bottom: 70,
      width: 250,
      textAlign: 'center',
    },
    checkbutton: {
      borderWidth: 4,
      borderRadius: 20,
      width: 30,
      height: 30,
      marginLeft: 0,
      marginRight: 10,
      marginVertical: 10,
      paddingLeft: 5,
      paddingBottom: 5,
      borderColor: 'rgba(200,200,200,0.8)',
      backgroundColor: 'black',
      shadowColor: 'black',
      shadowRadius: '7px',
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      margin: 8,
    },
    content: {
      fontWeight: 'none',
      margin: 5,
      marginTop: 12,
      fontSize: 16,
      color: 'white',
    },
    congo: {
      width: 150,
      height: 150,
      backgroundColor: 'white',
      padding: 10,
      paddingTop: 50,
      textAlign: 'center',
      borderRadius: 30,
      position: 'absolute',
      top: 100,
      zIndex: 1,
      left: 30,
    },
    cross: {
      marginTop: -45,
      marginBottom: 35,
      width: 20,
      backgroundColor: 'rgba(0,0,0,0.65)',
      borderRadius: 20,
    },

    namefeild: {
      marginTop: 50,
      marginLeft: 20,
      backgroundColor: 'rgba(1,1,1,0.6)',
      color: 'white',
      padding: 10,
      borderColor: '#2D5175',
      borderWidth: 2,
      width: 200,
    },
    lastq: {
      backgroundColor: 'rgba(200, 200, 200,0.9)',
      color: 'black',
      width: '36vh',
      marginBottom: 15,
      padding: 5,
      textAlign: 'center',
      height: 180,
    },
    result:{
      backgroundColor: 'rgba(200, 200, 200,0.9)',
      color: 'black',
      width: '36vh',
      marginBottom: 15,
      padding: 5,
      textAlign: 'center',
      height: 350,
      
    }
  });

  return (
    <View>
      {q1 ? (
        <View>
          <View style={styling.question}>
            <ScrollView>
              <Text>
                Two cats are sitting on a windowsill, a big cat and a little
                cat. The little cat is the son of the big cat, but the big cat
                is not the father of the little cat. How is this possible?
              </Text>
            </ScrollView>
          </View>

          <View>
            <ScrollView>
              <View style={styling.container}>
                <TouchableOpacity
                  style={styling.checkbutton}
                  onPress={() => {
                    if (checkbox2 == false) {
                      setcheckbox1(true),
                        setcheckbox2(false),
                        setcheckbox3(false);
                    } else {
                      setcheckbox2(false),
                        setcheckbox1(false),
                        setcheckbox3(false);
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
                <Text style={styling.content}> The big cat is a monster. </Text>
              </View>
              <View style={styling.container}>
                <TouchableOpacity
                  style={styling.checkbutton}
                  onPress={() => {
                    if (checkbox2 == false) {
                      setcheckbox2(true),
                        setcheckbox1(false),
                        setcheckbox3(false);
                    } else {
                      setcheckbox2(false),
                        setcheckbox3(false),
                        setcheckbox1(false);
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
                <Text style={styling.content}>
                  {' '}
                  The big cat is just a imagination.{' '}
                </Text>
              </View>
              <View style={styling.container}>
                <TouchableOpacity
                  style={styling.checkbutton}
                  onPress={() => {
                    if (checkbox3 == false) {
                      setcheckbox3(true),
                        setcheckbox2(false),
                        setcheckbox1(false),
                        setoption(true);
                    } else {
                      setcheckbox2(false),
                        setcheckbox3(false),
                        setcheckbox1(false);
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
                <Text style={styling.content}> The big cat is mother. </Text>
              </View>
            </ScrollView>
          </View>
          <View>
            <TouchableOpacity
              style={styling.okbutton}
              onPress={() => {
                setcongo(true);
              }}>
              <Text style={{ fontSize: 30, color: 'white' }}>CONFIRM</Text>
            </TouchableOpacity>
          </View>
          {congo == true && option == true ? (
            <View style={styling.congo}>
              <TouchableOpacity
                style={styling.cross}
                onPress={() => {
                  setcongo(false), setq1(false), setq2(true), setoption(false);
                }}>
                <Text>❌</Text>
              </TouchableOpacity>
              <Text>Well Done.. 😻</Text>
              <Text
                style={{ color: 'green', fontSize: 18, fontWeight: 'bold' }}>
                A Success.. ✔
              </Text>
            </View>
          ) : congo == true ? (
            <View style={styling.congo}>
              <TouchableOpacity
                style={styling.cross}
                onPress={() => {
                  setcongo(false), setoption(false);
                }}>
                <Text>❌</Text>
              </TouchableOpacity>
              <Text>Sorry.. 😿</Text>
              <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>
                Try Again.. ❌
              </Text>
            </View>
          ) : null}
        </View>
      ) : null}

      {q2 ? (
        <View>
          <View style={styling.question}>
            <ScrollView>
              <Text>
                My first is in chocolate but not in ham, my second's in cake and
                also in jam, my third at tea-time is easily found, my whole is a
                friend who's often around. What am I?
              </Text>
            </ScrollView>
          </View>
          <View>
            <ScrollView>
              <View style={styling.container}>
                <TouchableOpacity
                  style={styling.checkbutton}
                  onPress={() => {
                    if (checkbox2 == false) {
                      setcheckbox1(true),
                        setcheckbox2(false),
                        setcheckbox3(false);
                    } else {
                      setcheckbox2(false),
                        setcheckbox1(false),
                        setcheckbox3(false);
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
                <Text style={styling.content}> A Bear. </Text>
              </View>
              <View style={styling.container}>
                <TouchableOpacity
                  style={styling.checkbutton}
                  onPress={() => {
                    if (checkbox2 == false) {
                      setcheckbox2(true),
                        setcheckbox1(false),
                        setcheckbox3(false);
                    } else {
                      setcheckbox2(false),
                        setcheckbox3(false),
                        setcheckbox1(false);
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
                <Text style={styling.content}> Agent. </Text>
              </View>
              <View style={styling.container}>
                <TouchableOpacity
                  style={styling.checkbutton}
                  onPress={() => {
                    if (checkbox3 == false) {
                      setcheckbox3(true),
                        setcheckbox2(false),
                        setcheckbox1(false),
                        setoption(true);
                    } else {
                      setcheckbox2(false),
                        setcheckbox3(false),
                        setcheckbox1(false);
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
                <Text style={styling.content}> Cat. </Text>
              </View>
            </ScrollView>
          </View>
          <View>
            <TouchableOpacity
              style={styling.okbutton}
              onPress={() => {
                setcongo(true);
              }}>
              <Text style={{ fontSize: 30, color: 'white' }}>CONFIRM</Text>
            </TouchableOpacity>
          </View>
          {congo == true && option == true ? (
            <View style={styling.congo}>
              <TouchableOpacity
                style={styling.cross}
                onPress={() => {
                  setq2(false), setq3(true), setcongo(false), setoption(false);
                }}>
                <Text>❌</Text>
              </TouchableOpacity>
              <Text>Well Done.. 😻</Text>
              <Text
                style={{ color: 'green', fontSize: 18, fontWeight: 'bold' }}>
                A Success.. ✔
              </Text>
            </View>
          ) : congo == true ? (
            <View style={styling.congo}>
              <TouchableOpacity
                style={styling.cross}
                onPress={() => {
                  setcongo(false), setoption(false);
                }}>
                <Text>❌</Text>
              </TouchableOpacity>
              <Text>Sorry.. 😿</Text>
              <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>
                Try Again.. ❌
              </Text>
            </View>
          ) : null}
        </View>
      ) : null}

      {q3 ? (
        <View>
          <View style={styling.question}>
            <ScrollView>
              <Text>What side of a cat has the most fur?</Text>
            </ScrollView>
          </View>
          <View>
            <ScrollView>
              <View style={styling.container}>
                <TouchableOpacity
                  style={styling.checkbutton}
                  onPress={() => {
                    if (checkbox2 == false) {
                      setcheckbox1(true),
                        setcheckbox2(false),
                        setcheckbox3(false),
                        setoption(true);
                    } else {
                      setcheckbox2(false),
                        setcheckbox1(false),
                        setcheckbox3(false);
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
                <Text style={styling.content}> Outside. </Text>
              </View>
              <View style={styling.container}>
                <TouchableOpacity
                  style={styling.checkbutton}
                  onPress={() => {
                    if (checkbox2 == false) {
                      setcheckbox2(true),
                        setcheckbox1(false),
                        setcheckbox3(false);
                    } else {
                      setcheckbox2(false),
                        setcheckbox3(false),
                        setcheckbox1(false);
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
                <Text style={styling.content}> Head. </Text>
              </View>
              <View style={styling.container}>
                <TouchableOpacity
                  style={styling.checkbutton}
                  onPress={() => {
                    if (checkbox3 == false) {
                      setcheckbox3(true),
                        setcheckbox2(false),
                        setcheckbox1(false);
                    } else {
                      setcheckbox2(false),
                        setcheckbox3(false),
                        setcheckbox1(false);
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
                <Text style={styling.content}>Tail. </Text>
              </View>
            </ScrollView>
          </View>
          <View>
            <TouchableOpacity
              style={styling.okbutton}
              onPress={() => {
                setcongo(true);
              }}>
              <Text style={{ fontSize: 30, color: 'white' }}>CONFIRM</Text>
            </TouchableOpacity>
          </View>
          {congo == true && option == true ? (
            <View style={styling.congo}>
              <TouchableOpacity
                style={styling.cross}
                onPress={() => {
                  setq3(false), setq4(true), setcongo(false), setoption(false);
                }}>
                <Text>❌</Text>
              </TouchableOpacity>
              <Text>Well Done.. 😻</Text>
              <Text
                style={{ color: 'green', fontSize: 18, fontWeight: 'bold' }}>
                A Success.. ✔
              </Text>
            </View>
          ) : congo == true ? (
            <View style={styling.congo}>
              <TouchableOpacity
                style={styling.cross}
                onPress={() => {
                  setcongo(false), setoption(false);
                }}>
                <Text>❌</Text>
              </TouchableOpacity>
              <Text>Sorry.. 😿</Text>
              <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>
                Try Again.. ❌
              </Text>
            </View>
          ) : null}
        </View>
      ) : null}

      {q4 ? (
        <View>
          <View style={styling.lastq}>
            <ScrollView>
              <Text
                style={{ color: 'rgba(36, 114, 196, 1)', fontWeight: 'bold' }}>
                Hello, my name is MrJumpY 🐺..
              </Text>
              <Text>
                Weird name right.. I am Glad you make so far .. So, I got a
                problem with song.. Never gonna give you up.. but thats not the
                issue I forgot my password of my socail account.. I contact CAT
                Purgrammer ..but he tells me he is busy but got me this .. I
                think you look cool.. Hack my password please.
              </Text>
            </ScrollView>
          </View>
          <View>
            <TextInput
              placeholder="Guess Password"
              onChangeText={(catchpassword) => {
                setpasword(catchpassword);
              }}
              style={styling.namefeild}
              secureTextEntry="true"
            />
            <TouchableOpacity
              style={{
                fontSize: 20,
                position: 'absolute',
                top: 57,
                width: 30,
                backgroundColor: 'white',
                height: 30,
                right: 35,
                borderRadius: 50,
                overflow: 'hidden',
              }}
              onPress={() => {
                if (
                  pasword == 'RickAstley' ||
                  pasword == 'Rickastley' ||
                  pasword == 'rickastley'
                )
                  setpaswordchck(true);
                else setpaswordchck(false);

                setcongo(true);
              }}>
              <Text style={{ fontSize: 35, marginTop: -10, marginLeft: -5 }}>
                ➡
              </Text>
            </TouchableOpacity>
          </View>
          {congo == true && paswordchck == true ? (
            <View style={styling.congo}>
              <TouchableOpacity
                style={styling.cross}
                onPress={() => {
                  setresult(true), setq4(false), setcongo(false);
                }}>
                <Text>❌</Text>
              </TouchableOpacity>
              <Text>Thank You mate you really are good</Text>
              <Text
                style={{ color: 'green', fontSize: 18, fontWeight: 'bold' }}>
                A Success.. ✔
              </Text>
            </View>
          ) : congo == true ? (
            <View style={styling.congo}>
              <TouchableOpacity
                style={styling.cross}
                onPress={() => {
                  setcongo(false);
                }}>
                <Text>❌</Text>
              </TouchableOpacity>
              <Text>Sorry.. 😿</Text>
              <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>
                Try Again.. ❌
              </Text>
            </View>
          ) : null}
        </View>
      ) : null}
      {result ? (
        <View style={styling.result}>
          <Text>WOW mate Amazing.. (MrJumpY 🐺..)</Text>
          <Text
            style={{
              color: 'rgba(36, 114, 196, 1)',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            He is really true about you you are a Purgrammer..
          </Text>
        </View>
      ) : null}
    </View>
  );
}
