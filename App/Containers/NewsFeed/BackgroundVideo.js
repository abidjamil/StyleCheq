import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import Video from 'react-native-video'
const { width, height } = Dimensions.get('window')
export default class BackgroundVideo extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
console.log('dfihdhf', this.props.children)
    return (
      <View>
        <Video
          source={{ uri: this.props.uri }}
          style={styles.backgroundVideo}
          muted={true}
          repeat={true}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />

        <Wrapper>{this.props.children}</Wrapper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
})

// styled-component

export const Wrapper = styled.View`
  justify-content: space-around;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
`







