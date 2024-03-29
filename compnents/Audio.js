import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import react from 'react';

export default function Audios({millis}) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/audio/ring.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  react.useEffect(() => {
    if(millis <= 0) {
      playSound()
    }
  }, [millis])

  return <View></View>;
}

const styles = StyleSheet.create({
  container: {

  },
  video: {
    height:0,
    width:0
  },
  buttons: {

  }
})