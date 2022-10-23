import react from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';



const CoffeeButton = ({
  text, 
  onPress, 
  size, 
  setrounds, 
  rounds, 
  coffeeBreak, 
  ...props
}) => {

  return (
    <TouchableOpacity 
      style={styles(size).button}
      onPress={() =>{
         onPress(!coffeeBreak);
         if(!coffeeBreak) {
          setrounds(rounds + 1)
         }
        }}
    >
      { coffeeBreak ?
        <Image source={require('../assets/images/tomato08.png')} 
          style={{
            height: 50,
            width:50
          }}
        />
        :
        <Image source={require('../assets/images/mug.png')} 
          style={{
            height: 45,
            width:55
          }}
        />
      }
      
    </TouchableOpacity>
  );
}

const styles = (size) => StyleSheet.create({
  button: {
    marginVertical:25,
    height: 30,
    width: 30,
    // borderRadius: size / 2,
    justifyContent:"center",
    alignItems:"center"
  },
  img: {
    height: 50,
    width:50
  }
});

export default CoffeeButton
