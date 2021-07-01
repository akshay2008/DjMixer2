import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
   playIntro1 = async () => {
  await Audio.Sound.createAsync(
    {
      uri:"http://soundbible.com/grab.php?id=2041&type=mp3"
    },
  {shouldPlay: true}
  )
  }

  render() {
    return (
      <TouchableOpacity style = {{
        backgroundColor: "blue" , 
        marginLeft: 35,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "CENTER",
        width: 250,
        height: 150,
        borderRadius: 50,
        justifyContent: "CENTER",


      }} 
      onPress={this.playIntro1}
      >

      <Text style = {{
       backgroundColor: "gold",
       fontSize:20,
       fontWeight: "bold",

      }}>1)  NEWS INTRO SOUND (NORTH EAST WEST SOUTH)</Text>
      </TouchableOpacity>
    );
  }
}

class Sound2Button extends React.Component {
   playIntro2 = async () => {
  await Audio.Sound.createAsync(
    {
      uri:"http://soundbible.com/grab.php?id=1676&type=mp3"
    },
  {shouldPlay: true}
  )
  }

  render() {
    return (
      <TouchableOpacity style = {{
        backgroundColor: "red" , 
        marginLeft: 35,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "CENTER",
        width: 250,
        height: 150,
        borderRadius: 50,
        justifyContent: "CENTER",


      }} 
      onPress={this.playIntro2}
      >

      <Text style = {{
       backgroundColor: "gold",
       fontSize:20,
       fontWeight: "bold",

      }}>2)  ACTION MOVIES INTRO SOUND</Text>
      </TouchableOpacity>
    );
  }
}

class Sound3Button extends React.Component {
   playIntro3 = async () => {
  await Audio.Sound.createAsync(
    {
      uri:"http://soundbible.com/grab.php?id=1563&type=mp3"
    },
  {shouldPlay: true}
  )
  }

  render() {
    return (
      <TouchableOpacity style = {{
        backgroundColor: "orange" , 
        marginLeft: 35,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "CENTER",
        width: 250,
        height: 150,
        borderRadius: 50,
        justifyContent: "CENTER",


      }} 
      onPress={this.playIntro3}
      >

      <Text style = {{
       backgroundColor: "gold",
       fontSize:20,
       fontWeight: "bold",

      }}>3) PACMAN INTRO SOUND</Text>
      </TouchableOpacity>
    );
  }
}

class Sound4Button extends React.Component {
   playIntro3 = async () => {
  await Audio.Sound.createAsync(
    {
      uri:"http://soundbible.com/grab.php?id=474&type=mp3"
    },
  {shouldPlay: true}
  )
  }

  render() {
    return (
      <TouchableOpacity style = {{
        backgroundColor: "violet" , 
        marginLeft: 35,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        alignItems: "CENTER",
        width: 250,
        height: 150,
        borderRadius: 50,
        justifyContent: "CENTER",


      }} 
      onPress={this.playIntro3}
      >

      <Text style = {{
       backgroundColor: "gold",
       fontSize:20,
       fontWeight: "bold",

      }}>3) MAGIC WAND INTRO SOUND</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View>
      <View style={{marginTop:10}}>
        <SoundButton />
      </View>
       <View style={{marginTop:50}}>
        <Sound2Button />
      </View>
      <View style={{marginTop:50}}>
        <Sound3Button />
      </View>
       <View style={{marginTop:50}}>
        <Sound4Button />
      </View>
      </View>
    );
  }
}