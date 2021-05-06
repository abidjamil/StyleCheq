import React, { Component, Fragment } from 'react'
import { Text, ActivityIndicator, View, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import Video from 'react-native-video'
const { width, height } = Dimensions.get('window')
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay'

export default class BackgroundVideo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
  }
  onLoadStart = () => {
    console.log("onLoadStart")
    this.setState({ isLoading: true });
  }

  onLoad = () => {
    console.log("onLoad")
    this.setState({ isLoading: false });
  }

  onBuffer = ({ isBuffering }) => {
    console.log("Buffering")
    this.setState({ isLoading: isBuffering ? true : false });
  }
  render() {
    return (
      <View>
        <Video
          source={{ uri: this.props.uri, type: 'mp4' }}
          style={styles.backgroundVideo}
          muted={true}
          repeat={true}
          onBuffer={this.onBuffer}
          onLoadStart={this.onLoadStart}
          onLoad={this.onLoad}
          filterEnabled={true}
          playWhenInactive={true}
          posterResizeMode="cover"
          onError={(e) => console.log('error video', e)}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />
        {this.state.isLoading ?
          <ActivityIndicator
            animating
            size="large"
            color="ff0000"
            style={[styles.activityIndicator, { opacity: 1 }]}
          /> : null}

        <Wrapper>{this.props.children}</Wrapper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: height - 60,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
  activityIndicator: {
    position: 'absolute',
    top: '50%',
    bottom: '50%',
    left: '50%',
    right: '50%',
    height: 50,
  }
})

// styled-component

export const Wrapper = styled.View`
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  width:100%;
`







