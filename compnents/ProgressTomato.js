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

export default function ProgressTomato({progress, setShowTomato, showTomato, mode}) {
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
                  style={styles.tomato}
                  source={
                    progress < 0.12 ? require('../assets/images/tomato08.png')
                    : progress < 0.24 ? require('../assets/images/tomato07.png')
                    : progress < 0.36 ? require('../assets/images/tomato06.png')
                    : progress < 0.48 ? require('../assets/images/tomato05.png')
                    : progress < 0.60 ? require('../assets/images/tomato04.png')
                    : progress < 0.72 ? require('../assets/images/tomato03.png')
                    : progress < 0.84 ? require('../assets/images/tomato02.png')
                    : progress < 0.96 ? require('../assets/images/tomato01.png')
                    : require('../assets/images/tomato00.png')
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
    marginTop:50, 
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
