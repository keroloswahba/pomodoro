import react, {useState} from 'react';
import { StyleSheet, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import Tomato01 from './screens/Tomato01';

export default function App() {
  const [mode, setMode] = useState(false)

  return (
    <View style={styles.container}>
      <Tomato01 mode={mode}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
