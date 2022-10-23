import { 
  StyleSheet, 
  ImageBackground, 
  View, Dimensions,   
  Image, 
  TouchableOpacity 
} from 'react-native';
import * as Progress from 'react-native-progress';

const progressSize = Dimensions.get("window").width * 0.75;
const WIDTH = Dimensions.get("window").width;

export default function ProgressCoffee({
  progress, 
  setShowTomato, 
  showTomato, 
  mode,
  coffeeBreak
}) {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/images/grey_circle.png')} 
        style={styles.background}
      >
        <Progress.Circle
          endAngle={10}
          direction="counter-clockwise"
          strokeCap="round"
          showsText={true}
          progress={progress}
          size={progressSize}
          style={{ borderRadius: progressSize / 2 }}
          // unfilledColor='#b7081a'
          color={mode ? '#06504B' : '#D6E900'}
          thickness={WIDTH * 0.015}
          borderWidth={0}
          formatText = {() =>  
            <View style={styles.tomatoView}>
              <TouchableOpacity onPress={() => {
                setShowTomato(!showTomato)
              }}>
                <Image 
                  style={{
                    height: WIDTH * 0.41, 
                    width: WIDTH * 0.50
                  }}
                  source={
                    progress < 0.19 ? require('../assets/images/mugs/one.png')
                    : progress < 0.38 ? require('../assets/images/mugs/two.png')
                    : progress < 0.57 ? require('../assets/images/mugs/three.png')
                    : progress < 0.86 ? require('../assets/images/mugs/four.png')
                    : progress < 0.95 ? require('../assets/images/mugs/five.png')
                    : require('../assets/images/mugs/six.png')
                    
                  } 
                />
              </TouchableOpacity>
            </View>
          } 
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  tomatoView : {
    height: progressSize - WIDTH * 0.1, 
    width: progressSize - WIDTH * 0.1, 
    borderRadius: (progressSize - WIDTH * 0.1) / 2,
    justifyContent: "center",
    alignItems: "center"
  },
  tomato : {
    height: WIDTH * 0.49, 
    width: WIDTH * 0.50
  },
  background : {
    justifyContent:"center",
    alignItems:"center",
    height: progressSize + WIDTH * .15, 
    width: progressSize + WIDTH * .15 , 
  }
});
