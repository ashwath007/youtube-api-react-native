import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import YouTube from 'react-native-youtube';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  
  useColorScheme,
  View,
} from 'react-native';



const App = () => {
  

  return (
    <SafeAreaView>
     <View>
     <View style={{}}>
      <YouTube
  videoId="SFPQlKcePu8" // The YouTube video ID
  apiKey='AIzaSyAU9LNmUYtbQerajINV1suVBblsYdEn6dI'
  play // control playback of video with true/false
  // fullscreen // control whether the video should play in fullscreen or inline
  // onFullScreenEnter={() => Orientation.unlockAllOrientations()}
  onFullScreenEnter={() => Orientation.lockToPortrait()}
  
  onFullScreenExit={() => Orientation.lockToPortrait()}
  loop // control whether the video should loop when ended
  // onReady={e => this.setState({ isReady: true })}
  // onChangeState={e => this.setState({ status: e.state })}
  // onChangeQuality={e => this.setState({ quality: e.quality })}
  // onError={e => this.setState({ error: e.error })}
  style={{  height: 250 }}
/>
<View>
  <Text>
  This document is intended for developers who want to write applications that interact with YouTube. It explains basic concepts of YouTube and of the API itself. It also provides an overview of the different functions that the API supports.

Before you start
You need a Google Account to access the Google API Console, request an API key, and register your application.

Create a project in the Google Developers Console and obtain authorization credentials so your application can submit API requests.

After creating your project, make sure the YouTube Data API is one of the services that your application is registered to use:

Go to the API Console and select the project that you just registered.
  </Text>
</View>
      </View>
     <Container>

        <Content>
          <Card>
          
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
     
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
