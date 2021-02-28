import React from 'react'
import { Platform, Dimensions, Text, Image, View, FlatList, Button, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'
import Style from './NewsFeedStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import NavigationService from 'App/Services/NavigationService'
import { Avatar, Accessory, Icon, Input } from 'react-native-elements';
import { Searchbar, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context'
import { BottomSheet } from 'react-native-btr';
import BottomIcons from '../../Components/BottomIcons'
import Message from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/Entypo';
import ParsedText from 'react-native-parsed-text';

var that;

class NewsFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      error: '',
      commentsVisible: false,
      refresh: true,
      isLoading: false,
      data: props.timelineData,
      commentsData: [
        {
          id: '1',
          name: 'Abid Jamil',
          username: '@Abid',
          picture: 'https://www.w3schools.com/howto/img_avatar.png',
          time: '2 sec ago',
          message: 'Nice Picture Dear'
        },
        {
          id: '2',
          name: 'Kashif Asif',
          username: '@Kashif668',
          picture: 'https://i.pinimg.com/originals/64/57/c1/6457c16c1691edc5041e437cda422d98.jpg',
          status: 'Follow',
          time: '15 sec ago',
          message: 'Bawa g Sailkot'
        },
        {
          id: '3',
          name: 'Atif Mehmood',
          username: '@atiff',
          picture: 'https://i.imgur.com/I80W1Q0.png',
          status: 'Follow',
          time: '1 mint ago',
          message: 'I am developer'
        },
        {
          id: '4',
          name: 'Azka Ramzan',
          username: '@azkaRamzan',
          picture: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
          status: 'Follow',
          time: '2 mint ago',
          message: 'Hahahhahh, Nice one '
        },
        {
          id: '5',
          name: 'Basit Gill',
          username: '@basit123',
          picture: 'https://www.w3schools.com/howto/img_avatar.png',
          status: 'Follow',
          time: '4 Mint ago',
          message: 'Nice Picture Dear'
        },

      ]
    }

    that = this;
  }

  UNSAFE_componentWillMount() {
    this.GetTimelineData()
  }
  handleLetsExploreAction() {

  }


  GetTimelineData() {
    const Request = {
      pageNumber: 1,
      rowsPerPage: 10
    }
    NetworkActions.GetTimeline(Request, that.props.auth.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        that.setState({
          data: response
        })
        that.props.timeline()
      })
      .catch(function (error) {
        alert(error)
        that.setState({ isLoading: false })
      })
  }
  toggleComments() {
    this.setState({ commentsVisible: !this.state.commentsVisible })
  }

  getDataFromServer = () => {
    NetworkActions.GetPeopleToFollow(that.props.auth.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        console.log(that.state.isLoading)
        if (response != null) {
          if (response.status == 200) {
            that.setState({ data: response.data })
          }
          else if (response.status == 406) {
            that.setState({ error: response.message })
          }
          else {
            alert(response.message)
          }
        }

      })
      .catch(function (error) {
        alert(error)
        that.setState({ isLoading: false })
      })
  }


  handleSearch(text) {
    this.setState({ searchQuery: text })
  }

  followPeople(item) {
    this.setState({
      refresh: !this.state.refresh
    })
    console.log(item)
    item.followStatus = "Following"
  }
  handleComment = (text) => {
    that.setState({ comment: text })
  }
  addComment = () => {
    this.setState({
      refresh: !this.state.refresh
    })

    GetTimeline

    const comment = {
      id: this.state.commentsData.length + 1,
      name: 'Abid Jamil',
      username: '@Abid',
      picture: 'https://www.w3schools.com/howto/img_avatar.png',
      status: 'Follow',
      time: '2 sec ago',
      message: this.state.comment
    }
    this.setState((state) => {
      // Create new array to prevent passing reference to make it pure
      const newAnswer = [...state.commentsData]
      // Chage value of new array
      newAnswer.splice(0, 0, comment);

      return { commentsData: newAnswer }
    }
    )
    this.textInput.clear()
  }

  renderText(matchingString, matches) {
    // matches => ["[@michel:5455345]", "@michel", "5455345"]
    let pattern = /\[(@[^:]+):([^\]]+)\]/i;
    let match = matchingString.match(pattern);
    return `${match[1]}`;
  }

  handleNamePress(name, matchIndex /*: number*/) {
    alert(name)
  }

  render() {

    const windowHeight = Dimensions.get('window').height;
    const windowHeightFull = Dimensions.get('window').height;
    return (
      <SafeAreaView
        style={{
          height: windowHeight,
          flexDirection: 'column',
          width: '100%',
          top: 0
        }}>


        {/* Loader */}
        <OrientationLoadingOverlay
          visible={that.state.isLoading}
          color={Colors.primaryColorLogin}
          indicatorSize="large"
          messageFontSize={12}
          message=""
        />

        {/* Comments Section */}
        <BottomSheet
          visible={this.state.commentsVisible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={() => this.toggleComments()}
          //Toggling the visibility state
          onBackdropPress={() => this.toggleComments()}
        //Toggling the visibility state
        >
          {/*Bottom Sheet inner View*/}
          <View style={Style.bottomNavigationView}>
            <View
              style={{
                marginStart: 10,
                marginEnd: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 20,

              }}>
              <View style={{ maxHeight: 600, borderTopLeftRadius: 5, borderTopRightRadius: 5, backgroundColor: 'white', width: '100%' }}>
                <Text style={Style.commentsHeader}>
                  {this.state.commentsData.length} comments
                </Text>

                <FlatList
                  showsVerticalScrollIndicator={false}
                  style={{ marginTop: 0 }}
                  data={this.state.commentsData}
                  extraData={this.state.refresh}
                  keyExtractor={(item) => item.id}
                  //ListFooterComponent={this.renderFooter.bind(this)}
                  // onEndReachedThreshold={0.1}
                  // onEndReached={this.handleLoadMore.bind(this)}
                  renderItem={({ item }) => (
                    < View style={{ flex: 1, backgroundColor: 'white', marginStart: '5%', marginEnd: '5%' }}>
                      <View style={{ flexDirection: 'row', margin: 5, height: 50 }}>

                        <View style={{ marginLeft: 5, flex: 1 }}>
                          <Avatar
                            size="medium"
                            rounded
                            title={this.state.data.name}
                            source={{ uri: item.picture || "https://i.pinimg.com/originals/64/57/c1/6457c16c1691edc5041e437cda422d98.jpg" }}

                          />
                        </View>
                        <View style={{ flex: 5 }}>
                          <Text style={Style.rowName}>
                            {item.name || "Missing Name"}
                          </Text>

                          <Text style={Style.rowUsername}>
                            {item.message}  {item.time}
                          </Text>
                        </View>




                      </View>


                    </View>
                  )
                  }
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <TextInput
                    ref={input => { this.textInput = input }}
                    style={Style.inputField}
                    onChangeText={this.handleComment}
                    placeholder="Add comment" />

                  <TouchableOpacity
                    onPress={() => this.addComment()}>
                    <Image
                      resizeMode="center"
                      style={{ height: 15, width: 15, flex: 1, marginEnd: 20 }}
                      source={Images.searchIcon} />
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
        </BottomSheet>


        <View style={{ paddingBottom: Platform.OS === 'ios' ? 80 : '27%' }}>

          {/* Posts Section */}

          <View style={{ ...Style.fieldsLine, alignItems: 'center', paddingStart: 20, paddingRight: 20 }}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('UploadPost')}>
              <Image
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
                source={Images.cameraIcon} />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Light', }}>Timeline</Text>

            <TouchableOpacity
              onPress={() => NavigationService.navigate('ProfileImageSelf')}>
              <Image
                resizeMode="contain"
                style={{ width: 25, height: 30 }}
                source={Images.profileIcon} />
            </TouchableOpacity>

          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 0 }}
            data={this.state.data?.data}
            extraData={this.state.refresh}
            pagingEnabled={true}
            snapToInterval={windowHeight - 80} // Adjust to your content width
            decelerationRate={"fast"}
            snapToAlignment={"start"}
            keyExtractor={(item) => item.postId}
            //ListFooterComponent={this.renderFooter.bind(this)}
            // onEndReachedThreshold={0.1}
            // onEndReached={this.handleLoadMore.bind(this)}
            renderItem={({ item }) => (
              < View style={{ width: '100%', height: windowHeight - 80, justifyContent: 'center', alignItems: 'stretch' }}>

                <View>
                  <ImageBackground
                    resizeMode="cover"
                    style={{ width: '100%', justifyContent: 'space-around', overflow: 'hidden', height: '100%' }}
                    source={{ uri: item.postPicture }}>
                    <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>

                      <TouchableOpacity
                        onPress={() => NavigationService.navigate(item.isMinePost == 0 ? 'ProfileImage' : 'ProfileImageSelf', item)}>
                        <Avatar
                          size="medium"
                          rounded
                          source={{ uri: item.profilePicture || "https://i.pinimg.com/originals/64/57/c1/6457c16c1691edc5041e437cda422d98.jpg" }} />
                      </TouchableOpacity>

                      <View>


                        <Text style={Style.rowUsername}>
                          {item.username}
                        </Text>

                        <Text style={Style.rowUsername}>
                          {item.time}
                        </Text>

                      </View>

                      <View
                        style={Style.leftSide}>

                        <View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                              resizeMode="contain"
                              style={{ height: 20, width: 10 }}
                              source={Images.small_star} />
                            <Text style={Style.ratingText}>4.5</Text>
                          </View>


                          <Image
                            resizeMode="contain"
                            style={{ height: 30, width: 30 }}
                            source={Images.jeweleryIcon} />
                        </View>

                        <View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                              resizeMode="contain"
                              style={{ height: 20, width: 10 }}
                              source={Images.small_star} />
                            <Text style={Style.ratingText}>4.5</Text>
                          </View>


                          <Image
                            resizeMode="contain"
                            style={{ height: 30, width: 30 }}
                            source={Images.pentIcon} />
                        </View>



                        <View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                              resizeMode="center"
                              style={{ height: 20, width: 10 }}
                              source={Images.small_star} />
                            <Text style={Style.ratingText}>4.5</Text>
                          </View>


                          <Image
                            resizeMode="contain"
                            style={{ height: 30, width: 30 }}
                            source={Images.makeupIcon} />
                        </View>

                        <View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                              resizeMode="contain"
                              style={{ height: 20, width: 10 }}
                              source={Images.small_star} />
                            <Text style={Style.ratingText}>4.5</Text>
                          </View>


                          <Image
                            resizeMode="contain"
                            style={{ height: 30, width: 30 }}
                            source={Images.bodyIcon} />
                        </View>


                        <View>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                              resizeMode="contain"
                              style={{ height: 20, width: 10 }}
                              source={Images.small_star} />
                            <Text style={Style.ratingText}>4.5</Text>
                          </View>


                          <Image
                            resizeMode="contain"
                            style={{ height: 30, width: 30 }}
                            source={Images.makeupIcon} />
                        </View>

                      </View>
                    </View>


                    <View style={Style.rightSide}>

                      <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                        <Text style={Style.ratingText}>{item.overallRating} </Text>
                        <Image
                          resizeMode="contain"
                          style={{ height: 35, width: 35 }}
                          source={Images.big_star} />
                        <Text style={Style.ratingText}>Rate {item.totalRating} +</Text>
                      </View>

                      <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                        <TouchableOpacity
                          onPress={() => this.toggleComments()}>
                          <Image
                            resizeMode="contain"
                            style={{ height: 30, width: 30 }}
                            source={Images.commentIcon} />
                          <Text style={Style.ratingText}>{item.totalComments} +</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                        <Image
                          resizeMode="contain"
                          style={{ height: 30, width: 30 }}
                          source={Images.shareIcon} />
                        <Text style={Style.ratingText}>Share</Text>
                      </View>

                      <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                        <TouchableOpacity
                          style={{ justifyContent: 'center', alignItems: 'center' }}
                          onPress={() => NavigationService.navigate('ChatScreen', item)}>
                          <Image
                            resizeMode="contain"
                            style={{ height: 30, width: 30 }}
                            source={Images.messageIcon} />
                          <Text style={Style.ratingText}>Message</Text>
                        </TouchableOpacity>
                      </View>


                    </View>

                    <View
                      style={Style.topRightSide}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                          resizeMode="contain"
                          style={{ height: 20, width: 10 }}
                          source={Images.three_dots} />
                        <Image
                          resizeMode="contain"
                          style={{ height: 30, width: 30 }}
                          source={Images.handIcon} />
                      </View>
                    </View>

                    <ParsedText

                      style={Style.description}
                      parse={
                        [
                          { pattern: RegExp(item.username), style: Style.name, onPress: this.handleNamePress },
                          { pattern: /\[(@[^:]+):([^\]]+)\]/i, style: Style.username, onPress: this.handleNamePress, renderText: this.renderText },
                          { pattern: /#(\w+)/, style: Style.hashtag },
                        ]
                      }
                      childrenProps={{ allowFontScaling: true }}>
                      {item.username + ' : ' + item.description}
                    </ParsedText>
                  </ImageBackground>


                </View>


              </View>
            )
            }
          />


          <BottomIcons />

        </View >


      </SafeAreaView >
    )
  }

}

const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  auth: state.authTypeReducer.authType,
  timelineData: state.timelineReducer.timeline
})

const mapDispatchToProps = (dispatch) => ({
  timeline: () => dispatch({ type: 'Timeline', payload: that.state.data }),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed)
