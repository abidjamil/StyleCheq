import React from 'react'
import { SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity, Text, View, Button, Image, FlatList, TextInput, Dimensions } from 'react-native'
import Style from './CollectionPostsStyle'
import Search from 'react-native-vector-icons/EvilIcons';
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import NavigationService from 'App/Services/NavigationService'
import SCAN from 'react-native-vector-icons/AntDesign';
import { NetworkActions } from '../../NetworkActions';
import { connect } from 'react-redux'
import Modal from "react-native-modal";
import { Avatar, Accessory, Icon, Input } from 'react-native-elements'
import moment from 'moment'
import ParsedText from 'react-native-parsed-text';
import BackgroundVideo from '../ExploreTrending/BackgroundVideo';
import Video from 'react-native-video'


import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

var that;
class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      resultError: "",
      refresh: false,
      collectionModal: false,
      usersData: [],
      collection: props.navigation.state.params
    }
    that = this
  }
  UNSAFE_componentWillMount() {
    this.getCollections()
  }
  getCollections() {
    const request = {
      id: this.state.collection.collectionId
    }
    NetworkActions.GetCollectionPosts(request, that.props.authData.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        if (response != null) {
          console.log(response)
          if (response.status == 200) {
            that.setState({
              data: response.data
            })
          }
          if (response.data.length == 0) {
            that.setState({
              resultError: "No Posts Found"
            })
          }
          else {
            that.setState({
              resultError: ""
            })
          }
        }

      })
      .catch(function (error) {
        alert(JSON.stringify(error))
        that.setState({ isLoading: false })
      })
  }



  render() {
    return (
      <View style={{ top: Platform.OS === 'ios' ? 50 : 15 }}>
        <View style={Style.firstBox, { paddingHorizontal: 20 }}>
          <View style={Style.fieldsLine}>
            <TouchableOpacity
              onPress={() => NavigationService.goBack()}
              style={{ flexDirection: 'row' }}>
              <BACK name="left" size={23}></BACK>
              <Text style={Style.privacyBtn}>back</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
              <Text style={Style.privacyBtn}>{this.state.collection.name}</Text>
            </View>
          </View>
        </View>
        <Modal
          onSwipeComplete={() => this.setState({ postModal: false })}
          swipeDirection="down"
          animationIn="zoomIn"
          animationOut="zoomOut"
          onBackdropPress={() => this.setState({ postModal: false })}
          onBackButtonPress={() => this.setState({ postModal: false })}
          isVisible={this.state.postModal || false}>
          <View
            style={{
              width: '100%',
              height: '100%',
              opacity: 1,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white'
            }}
          >
            {this.state.selectedPost?.picture.substring(this.state.selectedPost?.picture.lastIndexOf('.') + 1) == "mp4" ? (
              <View
                style={{
                  flex: 1,
                  width: '100%',
                }}
              >
                <BackgroundVideo
                  resizeMode="cover"
                  uri={this.state.selectedPost?.picture}
                  index={this.state.selectedPost?.id}
                  style={{
                    width: '100%',
                    overflow: 'hidden',
                    height: '100%',
                  }}
                  source={{
                    uri: this.state.selectedPost?.picture,
                  }}
                >
                  <View style={{ width: '100%', alignSelf: 'flex-end', marginTop: 10, marginEnd: 10, }}>
                    <TouchableOpacity
                      style={{ alignSelf: 'flex-end', marginTop: 10 }}
                      onPress={() => { this.setState({ postModal: false }) }}>
                      <Search name="close" size={30} color='black' style={{ alignSelf: 'flex-end', marginTop: 10, marginEnd: 10 }} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1, zIndex: 2, alignSelf: 'flex-start', marginTop: -15, marginStart: 5, flexDirection: 'row', padding: 10 }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ postModal: false })
                        NavigationService.navigate(
                          this.state.selectedPost?.isMinePost == 0 ? 'ProfileImage' : 'ProfileImageSelf',
                          this.state.selectedPost
                        )
                      }}>
                      <Avatar
                        size="medium"
                        rounded
                        source={{
                          uri: this.state.selectedPost?.profilePicture || 'https://i.pinimg.com/originals/64/57/c1/6457c16c1691edc5041e437cda422d98.jpg',
                        }}
                      />
                    </TouchableOpacity>
                    <View>
                      <Text style={Style.rowUsername}>{this.state.selectedPost?.firstName || "Missing"} {this.state.selectedPost?.lastName || "Name"}</Text>
                      <Text style={Style.rowTime}>@{this.state.selectedPost?.username}</Text>
                      <Text style={Style.rowTime}>
                        {moment(this.state.selectedPost?.createdAt).fromNow()}
                      </Text>
                    </View>


                  </View>

                  <ParsedText
                    style={Style.description}
                    parse={[
                      {
                        pattern: RegExp(this.state.selectedPost?.username || "hellp"),
                        style: Style.name,
                        onPress: this.handleNamePress,
                      },
                      {
                        pattern: /@(\w+)+([.\s]?[a-zA-Z0-9]\w+)/,
                        style: Style.username,
                        onPress: this.handleNamePress,
                      },
                      { pattern: /#(\w+)/, style: Style.hashtag },
                    ]}
                    childrenProps={{ allowFontScaling: true }}
                  >
                    {this.state.selectedPost?.username + ' : ' + this.state.selectedPost?.description}
                  </ParsedText>

                </BackgroundVideo>
              </View>
            ) : (
                <View
                  style={{
                    flex: 1,
                    width: '100%',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ImageBackground
                    resizeMode="cover"
                    style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
                    source={{ uri: this.state.selectedPost?.picture }}
                  >
                    <TouchableOpacity
                      onPress={() => { this.setState({ postModal: false }) }}>
                      <Search name="close" size={30} color='black' style={{ alignSelf: 'flex-end', marginTop: 10, marginEnd: 10 }} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, zIndex: 2, alignSelf: 'flex-start', marginTop: -15, marginStart: 10, flexDirection: 'row', padding: 10 }}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ postModal: false })
                          NavigationService.navigate(
                            this.state.selectedPost?.isMinePost == 0 ? 'ProfileImage' : 'ProfileImageSelf',
                            this.state.selectedPost
                          )
                        }}>
                        <Avatar
                          size="medium"
                          rounded
                          source={{
                            uri:
                              this.state.selectedPost?.profilePicture ||
                              'https://i.pinimg.com/originals/64/57/c1/6457c16c1691edc5041e437cda422d98.jpg',
                          }}
                        />
                      </TouchableOpacity>
                      <View>
                        <Text style={Style.rowUsername}>{this.state.selectedPost?.firstName} {this.state.selectedPost?.lastName}</Text>
                        <Text style={Style.rowTime}>@{this.state.selectedPost?.username}</Text>

                        <Text style={Style.rowTime}>
                          {moment(this.state.selectedPost?.createdAt).fromNow()}
                        </Text>
                      </View>


                    </View>
                    <ParsedText
                      style={Style.description}
                      parse={[
                        {
                          pattern: RegExp(this.state.selectedPost?.username || "hellp"),
                          style: Style.name,
                          onPress: this.handleNamePress,
                        },
                        {
                          pattern: /@(\w+)+([.\s]?[a-zA-Z0-9]\w+)/,
                          style: Style.username,
                          onPress: this.handleNamePress,
                        },
                        { pattern: /#(\w+)/, style: Style.hashtag },
                      ]}
                      childrenProps={{ allowFontScaling: true }}
                    >
                      {this.state.selectedPost?.username + ' : ' + this.state.selectedPost?.description}
                    </ParsedText>
                  </ImageBackground>
                </View>
              )}
          </View>
        </Modal>

        <ScrollView
          style={{ marginBottom: 40 }}
          nestedScrollEnabled>
          <View>

            {
              this.state.resultError.length > 0 ?
                <View style={{ marginTop: 45, marginStart: 10, marginEnd: 10 }}>
                  <Text style={{ alignSelf: 'center', fontFamily: 'Poppins-Bold', color: 'black' }}>{this.state.resultError}</Text>
                </View> : <View></View>
            }
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingVertical: 10, }}
              numColumns={2}
              keyExtractor={(item) => item.postId}
              data={this.state.data}
              columnWrapperStyle={{ marginHorizontal: 5, marginVertical: 5, }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => { this.setState({ postModal: true, selectedPost: item }) }}
                    style={{ padding: 10, flex: 1 }}>
                    {item.picture.substring(item.picture.lastIndexOf('.') + 1) == "mp4" ? (
                      <View style={{ backgroundColor: 'black', height: 250, width: '100%', borderRadius: 10 }}
                      >
                        <Video
                          source={{ uri: item.picture, type: 'mp4' }}
                          style={{ height: 250, width: '100%', borderRadius: 10 }}
                          muted={true}
                          repeat={true}
                          filterEnabled={true}
                          playWhenInactive={true}
                          posterResizeMode="cover"
                          onError={(e) => console.log('error video', e)}
                          resizeMode={'cover'}
                          rate={1.0}
                          ignoreSilentSwitch={'obey'}
                        />
                      </View>
                    ) : (
                        <Image
                          style={{ zIndex: -1, height: 250, width: '100%', borderRadius: 10 }}
                          source={{ uri: item.picture }} />
                      )
                    }
                  </TouchableOpacity>


                );
              }

              }

            />
          </View>

        </ScrollView>

      </View >

    )
  }


}
const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  authData: state.authTypeReducer.authType,
  timelineData: state.timelineReducer.timeline
})

const mapDispatchToProps = (dispatch) => ({
  timeline: () => dispatch({ type: 'Timeline', payload: that.state.data }),
  auth: (data) => dispatch({ type: 'AUTH_TYPE', payload: data }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending)
