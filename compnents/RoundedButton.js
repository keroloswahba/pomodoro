import react from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';



const RoundedButton = ({text, onPress, size, ...props}) => {

  return (
    <TouchableOpacity 
      style={styles(size).button}
      onPress={() => onPress(!props.isStarted)}
    >
      <Image source={props.isStarted && props.mode
        ? require('../assets/images/pause_Button2.png')
        : props.isStarted && !props.mode
        ? require('../assets/images/pause_Button.png')
        : !props.isStarted && props.mode
        ? require('../assets/images/start_Button2.png')
        : require('../assets/images/start_Button.png')
        } 
        />
    </TouchableOpacity>
  );
}

const styles = (size) => StyleSheet.create({
  button: {
    marginVertical:25,
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent:"center",
    alignItems:"center"
  },
  text: {

  }
});

export default RoundedButton
