
import React from 'react';
import YouTube from 'react-native-youtube';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const App = () => {
  

  return (
    <SafeAreaView>
     <View>

      <Text>
        I am good
      </Text>
      <View>
      <YouTube
  videoId="SFPQlKcePu8" // The YouTube video ID
  apiKey='AIzaSyAU9LNmUYtbQerajINV1suVBblsYdEn6dI'
  play // control playback of video with true/false
  fullscreen // control whether the video should play in fullscreen or inline
  onFullScreenEnter={() => Orientation.unlockAllOrientations()}
  onFullScreenExit={() => Orientation.lockToPortrait()}
  loop // control whether the video should loop when ended
  // onReady={e => this.setState({ isReady: true })}
  // onChangeState={e => this.setState({ status: e.state })}
  // onChangeQuality={e => this.setState({ quality: e.quality })}
  // onError={e => this.setState({ error: e.error })}
  style={{  height: 300 }}
/>
      </View>
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
