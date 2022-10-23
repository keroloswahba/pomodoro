import react, {useState, useEffect} from 'react';
import { StyleSheet, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import ProgressTomato from '../compnents/ProgressTomato';
import Countdown from '../compnents/Countdown';
import RoundedButton from '../compnents/RoundedButton';
import Rounds from '../compnents/Rounds';
import ProgressCoffee from '../compnents/ProgressCoffee';
import CoffeeButton from '../compnents/CoffeeButton';
import { WIDTH } from '../styles/Styles';


const Tomato01 = (props) => {
  const [mode, setMode] = useState(false)
  const [minutes, setMinutes] = useState(0.5)
  const [shortBreakMinutes, setShortBreakMinutes] = useState(0.3)
  const [rounds, setrounds] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [showTomato, setShowTomato] = useState(true)
  const [newSession, setNewSeission] = useState(true)
  const [coffeeBreak, setCoffeeBreak] = useState(false)


  return (
    <View style={styles.container}>
      <ImageBackground 
        source={mode ? null : require('../assets/images/sky_background.png')}
        style={styles.background} 
      >
        <View style={{marginTop:50, marginLeft:20}}>
          <TouchableOpacity onPress={() => {
              setIsStarted(false);
              setProgress(0)
              setNewSeission(!newSession)
            }}>
            <Image
              source={
                mode ? require('../assets/images/Arrow_back2.png')
                : require('../assets/images/Arrow_back.png')
              } 
            />
          </TouchableOpacity>
        </View>
        <View style={styles.contentView}>
          <Rounds rounds={rounds} progress={progress} coffeeBreak={coffeeBreak} />
          
          <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <View style={{display: showTomato ? "flex" : "none"}}>
              {
                coffeeBreak ?
                <ProgressCoffee 
                  mode={mode}
                  progress={progress} 
                  setShowTomato={setShowTomato}
                  showTomato ={showTomato}
                  coffeeBreak={coffeeBreak}
                />
                :
                <ProgressTomato 
                mode={mode}
                progress={progress} 
                setShowTomato={setShowTomato}
                showTomato ={showTomato}
                coffeeBreak={coffeeBreak}
              />
              }
              
            </View>

            <View style={{display: !showTomato ? "flex" : "none"}}>
              <Countdown 
                mode={mode}
                minutes={coffeeBreak ? shortBreakMinutes : minutes} 
                isStarted={isStarted} 
                setIsStarted={setIsStarted}
                progress={progress}
                setProgress={setProgress} 
                setShowTomato={setShowTomato} 
                showTomato ={showTomato}
                newSession={newSession}
                rounds={rounds}
                setrounds={setrounds}
                setCoffeeBreak={setCoffeeBreak}
                coffeeBreak={coffeeBreak} 
              />
            </View>
          </View>

          <View style={styles.buttons}>
            {/* <CoffeeButton
              mode={mode}
              size={60} 
              text="start" 
              onPress={setCoffeeBreak}
              coffeeBreak={coffeeBreak} 
              rounds={rounds}
              setrounds={setrounds}
            /> */}
            <RoundedButton
              mode={mode}
              size={60} 
              text="start" 
              onPress={setIsStarted} 
              isStarted={isStarted} 
            />
            {/* <CoffeeButton
              mode={mode}
              size={60} 
              text="start" 
              onPress={setCoffeeBreak}
              coffeeBreak={coffeeBreak} 
              rounds={rounds}
              setrounds={setrounds} */}
            {/* /> */}
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
    backgroundColor:"#EDF4F4"
  },
  background: {
    flex: 1, 
    height: '100%', 
    width: '100%'
  },
  contentView: {
    marginBottom: 20,
    flex:1, 
    justifyContent:"center", 
    alignItems:"center"
  },
  buttons: {
    width: WIDTH * 0.9,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  }
});

export default Tomato01
