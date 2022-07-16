import react, {useState} from 'react';
import { StyleSheet, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import ProgressTomato from '../compnents/ProgressTomato';
import Countdown from '../compnents/Countdown';
import RoundedButton from '../compnents/RoundedButton';


const Tomato01 = (props) => {
  const [minutes, setMinutes] = useState(1)
  const [progress, setProgress] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [showTomato, setShowTomato] = useState(true)
  const [newSession, setNewSeission] = useState(true)

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={props.mode ? null : require('../assets/images/sky_background.png')} 
        style={styles.background} 
      >
        <View style={{marginTop:50, marginLeft:30}}>
          <TouchableOpacity onPress={() => {
              setIsStarted(false);
              setProgress(0)
              setNewSeission(!newSession)
            }}>
            <Image
              source={
                props.mode ? require('../assets/images/Arrow_back2.png')
                : require('../assets/images/Arrow_back.png')
              } 
            />
          </TouchableOpacity>
        </View>
        <View style={styles.contentView}>
          
          <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <View style={{display: showTomato ? "flex" : "none"}}>
              <ProgressTomato 
                mode={props.mode}
                progress={progress} 
                setShowTomato={setShowTomato} 
                showTomato ={showTomato}
              />
            </View>

            <View style={{display: !showTomato ? "flex" : "none"}}>
              <Countdown 
                mode={props.mode}
                minutes={minutes} 
                isStarted={isStarted} 
                setProgress={setProgress} 
                setShowTomato={setShowTomato} 
                showTomato ={showTomato}
                newSession={newSession}
              />
            </View>
          </View>

          <View>
            <RoundedButton
              mode={props.mode}
              size={60} 
              text="start" 
              onPress={setIsStarted} 
              isStarted={isStarted} 
            />
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#F5F5F5"
  },
  background: {
    flex: 1, 
    height: '100%', 
    width: '100%'
  },
  contentView: {
    marginBottom: 50,
    flex:1, 
    justifyContent:"center", 
    alignItems:"center"
  }
});

export default Tomato01
