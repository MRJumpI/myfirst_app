import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import StylishButton from './StylishButton'

export default function LoveList() {
  const [catLoveArray, setData] = useState([
    { attribute: 'Food', name: '- fish' },
    { attribute: 'Site', name: '- windows' },
    { attribute: 'Attitude', name: '- shy' },
    { attribute: 'Abilities', name: ['- Athletic', '- JumpHigh ', '- HateSwiming '] },
  ]);
  const [showlovelist, setshowlovelist] = useState(false);

  return (
    <View>
      <TouchableOpacity 
      onPress={()=>{
                setshowlovelist(true)         
      }}
      >
        <StylishButton 
        color="rgba(22, 21, 20, 0.43)"
        textcolor="white"
        toplayercolor='rgba(251, 2, 131, 0.6)'
        toplayertextcolor='black'
        bottomlayercolor='none'
        bottomlayertextcolor='white'
        topLayercontent='The Thing I Love ❤️ '
        bottomLayercontent='☝🏻PRESS ME'
        
        margininline='0'
        />
    
      </TouchableOpacity>
        {  
        showlovelist ?(
          console.log('hello'),
          <ScrollView style={styling.hiddenbox}>
            <Text 
              style={styling.crossbutton}
              onPress={()=>{
                setshowlovelist(false),
                console.log('false')
              }}
            >
            ✖️
            </Text>
           <Text style={{color:'black',
           textTransform:'uppercase',
           fontWeight:'bold',
           fontSize:20
           }}>   Things I Love </Text>
            
            {catLoveArray.map((item) => (
              <View key={item.attribute}>
               > {item.attribute}
                <Text style={{ color: 'white'}}>  
                {item.name} </Text>
              </View>
            ))}
        </ScrollView>)
         :null
        }    
      
    </View>
  );
}

const styling = StyleSheet.create({
hiddenbox: {
    backgroundColor: 'rgba(251, 2, 131, 0.8)',
    padding: 10,
    width: '70%',
    marginLeft: 60,
    marginTop:-150,
    shadowColor: 'rgba(251, 2, 131, 1)',
    shadowRadius: 999999,
    shadowOpacity: 50,
    shadowOffset: 0,
    // position: 'relative',
  },
crossbutton: {
    position:'absolute',
    top:0,
    right:0,
    backgroundColor:'black',
    color:'white',
    width:25,
    textAlign:'center',
    zIndex:1,
    borderRadius:50,
  },
});
