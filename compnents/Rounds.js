import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';
import react from 'react';
import { WIDTH } from '../styles/Styles';

const Rounds = ({rounds, progress, coffeeBreak}) => {
  const [newProgress, SetNewProgress] = React.useState(rounds + progress)

  React.useEffect(() => {
    if(!coffeeBreak) {
      // if(newProgress === 0) {
      //   SetNewProgress(1)
      // } 
      // else if(newProgress === 1) {
      //   SetNewProgress(2)
      // }
      // else if(newProgress === 2) {
      //   SetNewProgress(3)
      // }
      // else if(newProgress === 3) {
      //   SetNewProgress(4)
      // }
      // if(newProgress < 1) {
      //   SetNewProgress(1)
      // } else if (newProgress > 1 && newProgress < 2) {
      //   SetNewProgress(2)
      // } else if (newProgress > 2 && newProgress < 3) {
      //   SetNewProgress(3)
      // } else if (newProgress > 3 && newProgress < 4) {
      //   SetNewProgress(4)
      // }
    } else {
      if(progress === 1) {
        SetNewProgress(rounds)
      } else {
        SetNewProgress(rounds + progress)
      }
    }
  }, [progress, coffeeBreak])


  const Img = ({souce}) => {
    return (
      <ImageBackground 
        source={require('../assets/images/grey_circle.png')} 
        style={styles.background}
      >
        <Image 
          style={{
            height: WIDTH * 0.10, 
            width: WIDTH * 0.10
          }}
          source={souce} 
        />
      </ImageBackground>
    )
  }


  return( 
  <View style={styles.container}>
    <Img 
      souce={
        newProgress < 1 ? require('../assets/images/tomato08.png')
        : newProgress === 1 ? require('../assets/images/tomato00.png')
        : require('../assets/images/tomato00.png')
      }
    />
    <Img 
      souce={
        newProgress < 2 ? require('../assets/images/tomato08.png')
        : newProgress === 2 ? require('../assets/images/tomato00.png')
        : require('../assets/images/tomato00.png')
      }
    />
    <Img 
      souce={
        newProgress < 3 ? require('../assets/images/tomato08.png')
        : newProgress === 3 ? require('../assets/images/tomato00.png')
        : require('../assets/images/tomato00.png')
      }
    />
    <Img 
      souce={
        newProgress < 4 ? require('../assets/images/tomato08.png')
        : newProgress === 4 ? require('../assets/images/tomato00.png')
        : require('../assets/images/tomato00.png')
      }
    />
  
    {/* <View style={{...styles.round, backgroundColor: rounds >= 1 ? "#32cd32" : "#ff2f2e"}} />
    <View style={{...styles.round, backgroundColor: rounds >= 2 ? "#32cd32" : "#ff2f2e"}} />
    <View style={{...styles.round, backgroundColor: rounds >= 3 ? "#32cd32" : "#ff2f2e"}} />
    <View style={{...styles.round, backgroundColor: rounds >= 4 ? "#32cd32" : "#ff2f2e"}} /> */}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    width: WIDTH * 0.8,
    justifyContent:"space-around",
    marginTop:40
  },
  round: {
    width: WIDTH * 0.12,
    height: WIDTH * 0.12,
    borderRadius: WIDTH * 0.06,
    backgroundColor:"#ff2f2e"
  },
  background : {
    justifyContent:"center",
    alignItems:"center",
    height:  WIDTH * .20, 
    width: WIDTH * .20 , 
  }
})

export default Rounds