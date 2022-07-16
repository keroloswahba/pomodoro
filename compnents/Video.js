// import * as React from 'react';
// import { View, StyleSheet, Button } from 'react-native';
// import { Video, AVPlaybackStatus } from 'expo-av';

// export default function Videos() {
//   const video = React.useRef(null);
//   const [status, setStatus] = React.useState({});
//   return (
//     <View style={styles.container}>
//       <Video
//         ref={video}
//         style={styles.video}
//         source={require('')}
//         useNativeControls
//         resizeMode="contain"
//         isLooping
//         onPlaybackStatusUpdate={status => setStatus(() => status)}
//       />
//       <View style={styles.buttons}>
//         <Button
//           title={status.isPlaying ? 'Pause' : 'Play'}
//           onPress={() =>
//             status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
//           }
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {

//   },
//   video: {
//     height:0,
//     width:0
//   },
//   buttons: {

//   }
// })