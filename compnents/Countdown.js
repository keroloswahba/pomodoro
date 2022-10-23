import react, {useRef, useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Audios from './Audio';
import ProgressTomato from './ProgressTomato';

const WIDTH = Dimensions.get("window").width

const minutesToMillis = (min) => min * 60 * 1000 
const minute = (millis) => Math.floor(millis / 1000 / 60) 
const second = (millis) => (millis / 1000 % 60) 

const Countdown = ({
  minutes, 
  isStarted, 
  progress,
  setProgress, 
  setShowTomato, 
  showTomato, 
  newSession, 
  mode,
  rounds,
  setrounds,
  setCoffeeBreak,
  coffeeBreak,
  setIsStarted

}) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes))
  const [prog, setProg] = useState(0)
  const interval = useRef()

  const countdown = () => {
    setMillis(millis - 1000)
    setProgress(1 - (millis / minutesToMillis(minutes)))
  }

  useEffect(() => {
    setMillis(minutesToMillis(minutes))
    setProgress(0)
  }, [minutes, newSession])

  useEffect(() => {
    if(millis > 0 && isStarted) {
      interval.current = setInterval(countdown, 1000)
    } else if(millis > 0 && !isStarted) {
      return;
    } else if(millis == 0) {
      setProgress(1);
      if(!coffeeBreak) {
        setrounds(rounds + 1)
      }
      setCoffeeBreak(!coffeeBreak)
    }
    return () => clearInterval(interval.current)
  }, [millis, isStarted])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        setShowTomato(!showTomato)
      }}>
        <Text style={{...styles.text, color: mode ? '#06504B' : "#ddd"}}>
          {minute(millis) < 10 ? `0${minute(millis)}` : minute(millis)}:
          {second(millis) < 10 ? `0${second(millis)}` : second(millis)}
        </Text>
      </TouchableOpacity>
      <Audios millis={millis} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: WIDTH / 4,
    fontWeight:"bold",
    // fontFamily:"Comic Sans MS"
  }
});

export default Countdown
