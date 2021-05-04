import React from 'react'
import { Platform, ScrollView, TouchableOpacity, Text, View, Button, Image, FlatList, TextInput, Dimensions, ImageBackground } from 'react-native'
import Style from './ExploreTrendingStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import NavigationService from 'App/Services/NavigationService'
import SCAN from 'react-native-vector-icons/AntDesign';
import Search from 'react-native-vector-icons/EvilIcons';
import { NetworkActions } from '../../NetworkActions';
import { connect } from 'react-redux'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import Modal from 'react-native-modal'
import { Avatar, Accessory, Icon, Input } from 'react-native-elements'
import moment from 'moment'
import ParsedText from 'react-native-parsed-text';
var that;
class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: [],
      data2: [],
      data3: [],
      value: "",
      resultError: "",
      refresh: false,
      usersData: [],
      postModal: false,
      selectedPost: null
    }
    that = this
  }
  UNSAFE_componentWillMount() {
    this.getTrending()
  }
  getTrending() {
    that.setState({ isLoading: true })
    NetworkActions.GetTrending(that.props.authData.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        if (response != null) {
          if (response.status == 200) {
            that.setState({
              data: response.data
            })
            const req = {
              value: response.data[0].hashTagName
            }
            NetworkActions.GetTrendingWithHash(req, that.props.authData.data.token).then
              (function (response) {
                that.setState({ isLoading: false })
                if (response != null) {
                  if (response.status == 200) {
                    that.setState({
                      data1: response.data
                    })
                    console.log(that.state.data)
                  }
                }
              })
              .catch(function (error) {
                alert(JSON.stringify(error))
                that.setState({ isLoading: false })
              })

            const req1 = {
              value: response.data[1].hashTagName
            }
            NetworkActions.GetTrendingWithHash(req1, that.props.authData.data.token).then
              (function (response) {
                that.setState({ isLoading: false })
                if (response != null) {
                  if (response.status == 200) {
                    that.setState({
                      data2: response.data
                    })
                    console.log(that.state.data)
                  }
                }
              })
              .catch(function (error) {
                alert(JSON.stringify(error))
                that.setState({ isLoading: false })
              })


            const req2 = {
              value: response.data[2].hashTagName
            }
            NetworkActions.GetTrendingWithHash(req2, that.props.authData.data.token).then
              (function (response) {
                that.setState({ isLoading: false })
                if (response != null) {
                  if (response.status == 200) {
                    that.setState({
                      data3: response.data
                    })
                    console.log(that.state.data3)
                  }
                }
              })
              .catch(function (error) {
                alert(JSON.stringify(error))
                that.setState({ isLoading: false })
              })
          }
        }
      })
      .catch(function (error) {
        alert(JSON.stringify(error))
        that.setState({ isLoading: false })
      })
  }
  handleSearch(text) {
    this.setState({
      value: text
    })
  }

  onPostClick(item) {
    console.log(item)
    this.setState({
      selectedPost: item,
      postModal: true
    })
  }
  handleNamePress(name) {
    NavigationService.navigate('ProfileImage', '@' + name)
  }
  onSearch() {
    if (this.state.value.length > 0) {
      if (this.state.value.charAt(0) == '#') {
        const req = {
          value: this.state.value
        }
        that.setState({ isLoading: true })
        NetworkActions.GetTrendingWithHash(req, that.props.authData.data.token).then
          (function (response) {
            that.setState({ isLoading: false })
            if (response != null) {
              if (response.status == 200) {
                if (response.data.length == 0) {
                  that.setState({
                    resultError: "No record found"
                  })
                }
                else {
                  that.setState({
                    resultError: ""
                  })
                }
                that.setState({
                  data1: response.data,
                  data2: null,
                  data3: null,
                  data: [],
                  usersData: []
                })

              }
            }
          })
          .catch(function (error) {
            alert(JSON.stringify(error))
            that.setState({ isLoading: false })
          })
      }
      else {
        const request = {
          query: this.state.value
        }
        console.log(request)
        that.setState({ isLoading: true })
        NetworkActions.GetPeopleToFollowSearch(request, that.props.authData.data.token).then
          (function (response) {
            that.setState({ isLoading: false })
            if (response.status === 200) {
              console.log(response.data)
              if (response.data.length == 0) {
                that.setState({
                  resultError: "No record found"
                })
              }
              else {
                that.setState({
                  resultError: ""
                })
              }
              that.setState({
                usersData: response.data,
                data1: null,
                data2: null,
                data3: null,
                data: []
              })
            }
          })
          .catch(function (error) {
            that.setState({ isLoading: false })
            alert(JSON.stringify(error))
          })
      }

    }
    else {
      this.getTrending()
    }
  }

  followPeople(item) {
    that.setState({ isLoading: true })
    const request = {
      followTo: item.id,
    }
    this.setState({
      refresh: !this.state.refresh
    })
    NetworkActions.FollowUser(request, that.props.authData.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        if (response.status === 200) {
          console.log(response)
          item.isFollowedByYou = 1
          console.log(item)
        }
        that.setState({
          refresh: !that.state.refresh
        })
      })
      .catch(function (error) {
        that.setState({ isLoading: true })
        alert(JSON.stringify(error))
      })
    this.setState({
      refresh: !this.state.refresh
    })
  }
  handleNamePress(name) {
    NavigationService.navigate('ProfileImage', name)
  }

  render() {
    return (
      <View style={{ top: Platform.OS === 'ios' ? 50 : 15 }}>
        <OrientationLoadingOverlay
          visible={this.state.isLoading}
          color={Colors.black}
          indicatorSize="large"
          messageFontSize={12}
          message=""
        />
        <Modal
          onSwipeComplete={() => this.setState({ postModal: false })}
          swipeDirection="left"
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
            }}
          >
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
                source={{ uri: this.state.selectedPost?.Picture }}
              >
                <View style={{ flex: 1, zIndex: 2, alignSelf: 'flex-start', marginTop: 10, marginStart: 10, flexDirection: 'row', padding: 10 }}>
                  <TouchableOpacity
                    onPress={() =>
                      NavigationService.navigate(
                        item.isMinePost == 0 ? 'ProfileImage' : 'ProfileImageSelf',
                        item
                      )
                    }
                  >
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
                    <Text style={Style.rowUsername}>{this.state.selectedPost?.username}</Text>

                    <Text style={Style.rowTime}>
                      {moment(this.state.selectedPost?.postCreatedAt).fromNow()}
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
                  {this.state.selectedPost?.username || "asdf" + ' : ' + this.state.selectedPost?.description || "#hello"}
                </ParsedText>
              </ImageBackground>
            </View>
          </View>
        </Modal>
        <ScrollView
          nestedScrollEnabled>
          <View>
            <View style={Style.firstBox, { paddingHorizontal: 20 }}>
              <View style={Style.fieldsLine}>
                <TouchableOpacity
                  onPress={() => NavigationService.goBack()}
                  style={{ flexDirection: 'row' }}>
                  <BACK name="left" size={23}></BACK>
                  <Text style={Style.privacyBtn}>back</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={Style.privacyBtn}>Explore</Text>
                </View>
              </View>
            </View>

            <View>
              <Image style={Style.headerImage}
                resizeMode="cover"
                source={Images.two} />
            </View>

            <View style={Style.searchStyle}>
              <Search name="search" size={30} color='gray' style={{}} />
              <TextInput
                onChangeText={(value) => this.handleSearch(value)}
                value={this.state.value}
                style={Style.searchInput}
                placeholder='Search' placeholderTextColor='gray'
              />
              <TouchableOpacity onPress={() => this.onSearch()}>
                <SCAN name="scan1" size={25} color='gray' />
              </TouchableOpacity>
            </View>
            {
              this.state.resultError.length > 0 ?
                <View style={{ marginTop: 45, marginStart: 10, marginEnd: 10 }}>
                  <Text style={{ alignSelf: 'center', fontFamily: 'Poppins-Bold', color: 'black' }}>{this.state.resultError}</Text>
                </View> : <View></View>
            }
            {this.state.usersData.length > 0 ?
              <View style={{ marginTop: 45, marginStart: 10, marginEnd: 10 }}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  extraData={this.state.refresh}
                  keyExtractor={(item) => item.id}
                  data={this.state.usersData}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => this.handleNamePress(item.username)}>
                        <Image style={{ ...Style.imageStylee, margin: 15 }}
                          source={{ uri: item.profilePicture }} />

                        <Text style={{ alignSelf: 'center', fontFamily: 'Poppins-Bold', color: 'black' }}>@{item.username}</Text>
                        <TouchableOpacity
                          onPress={() => this.followPeople(item)}>
                          <Text style={item.isFollowedByYou > 0 ? Style.rowStatusFollowing : Style.rowStatusFollow}>
                            {item.isFollowedByYou > 0 ? "Following" : "Follow"}
                          </Text>
                        </TouchableOpacity>
                      </TouchableOpacity>

                    );
                  }

                  }

                />
              </View> :


              <View>
                {this.state.data1?.length > 0 ?
                  <View style={Style.trendingView}>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>{this.state.data[0]?.hashTagName || this.state.value}</Text>
                    <Text style={Style.textStyle}>{this.state.data1.length}</Text>
                  </View>
                  :
                  <View></View>
                }



                <View style={{ marginTop: 5, marginStart: 10, marginEnd: 10 }}>
                  <FlatList
                    horizontal={true}
                    contentContainerStyle={{ paddingVertical: 5, }}
                    keyExtractor={(item) => item.Id}
                    data={this.state.data1}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => this.onPostClick(item)}
                          style={{ flexDirection: 'row', paddingBottom: 5 }}>
                          <Image style={Style.imageStylee}
                            source={{ uri: item.Picture }} />
                        </TouchableOpacity>
                      );
                    }} />





                  {
                    this.state.data2?.length > 0 ?
                      <View style={Style.trendingView1}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>{this.state.data[1]?.hashTagName}</Text>
                        <Text style={Style.textStyle}>{this.state.data2?.length}</Text>
                      </View>
                      : <View></View>
                  }
                  <View style={{ marginTop: 5, marginStart: 10, marginEnd: 10 }}>
                    <FlatList
                      horizontal={true}
                      keyExtractor={(item) => item.Id}
                      data={this.state.data2?.length > 1 ? this.state.data2 : null}
                      renderItem={({ item }) => {

                        return (
                          <TouchableOpacity
                            onPress={() => this.onPostClick(item)}
                            style={{ flexDirection: 'row', paddingBottom: 5 }}>
                            <Image style={Style.imageStylee}
                              source={{ uri: item.Picture }} />


                          </TouchableOpacity>




                        );
                      }

                      }

                    />

                  </View>
                </View>


                {
                  this.state.data3?.length > 0 ?
                    <View style={{ ...Style.trendingView1 }}>
                      <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>{this.state.data[2]?.hashTagName}</Text>
                      <Text style={Style.textStyle}>{this.state.data3?.length}</Text>
                    </View>
                    : <View></View>
                }


                <View style={{ marginTop: 5, marginStart: 10, marginEnd: 10 }}>
                  <FlatList
                    horizontal={true}
                    keyExtractor={(item) => item.Id}
                    data={this.state.data3}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => this.onPostClick(item)}
                          style={{ flexDirection: 'row', paddingBottom: 50 }}>
                          <Image style={Style.imageStylee}
                            source={{ uri: item.Picture }} />

                        </TouchableOpacity>


                      );
                    }

                    }

                  />
                </View></View>
            }

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
