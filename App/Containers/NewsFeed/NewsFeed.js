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
      data: [
        {
          id: '1',
          name: 'Abid Jamil',
          username: '@Abid',
          picture: Images.two,
          avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
          status: 'Follow',
          time: '22secs',
          overallRating: 4.5,
          totalRating: 107,
          totalMessages: 400,
          totalComments: 300,
          tags: [
            {
              type: 1,
              rating: 5,
              link: "",
            },
            {
              type: 5,
              rating: 4,
              link: "",
            },
            {
              type: 4,
              rating: 2.6,
              link: "",
            },
            {
              type: 3,
              rating: 3,
              link: "",
            },
          ]
        },
        {
          id: '2',
          name: 'Kashif Asif',
          username: '@Kashif668',
          picture: Images.one,
          avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
          status: 'Follow',
          time: '25secs',
          overallRating: 3.5,
          totalRating: 127,
          totalMessages: 330,
          totalComments: 260,
          tags: [
            {
              type: 3,
              rating: 5,
              link: "",
            },
            {
              type: 2,
              rating: 4,
              link: "",
            },
            {
              type: 1,
              rating: 2.6,
              link: "",
            },
            {
              type: 7,
              rating: 3,
              link: "",
            },
          ]
        },
        {
          id: '3',
          name: 'Atif Mehmood',
          username: '@atiff',
          picture: Images.three,
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          status: 'Follow',
          time: '2 mint',
          overallRating: 3.7,
          totalRating: 427,
          totalMessages: 310,
          totalComments: 160,
          tags: [
            {
              type: 2,
              rating: 5,
              link: "",
            },
            {
              type: 6,
              rating: 4,
              link: "",
            },
            {
              type: 5,
              rating: 2.6,
              link: "",
            },
            {
              type: 2,
              rating: 3,
              link: "",
            },
          ]
        },
        {
          id: '4',
          name: 'Azka Ramzan',
          username: '@azkaRamzan',
          picture: Images.four,
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          status: 'Follow',
          time: '8 mint',
          tags: [
            {
              type: 1,
              rating: 5,
              link: "",
            },
            {
              type: 3,
              rating: 4,
              link: "",
            },
            {
              type: 2,
              rating: 2.6,
              link: "",
            },
            {
              type: 10,
              rating: 3,
              link: "",
            },
          ]
        },
        {
          id: '5',
          name: 'Basit Gill',
          username: '@basit123',
          picture: Images.one,
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          status: 'Follow',
          time: '4 hours',
          overallRating: 3.5,
          totalRating: 127,
          totalMessages: 330,
          totalComments: 260,
          tags: [
            {
              type: 1,
              rating: 5,
              link: "",
            },
            {
              type: 3,
              rating: 4,
              link: "",
            },
            {
              type: 4,
              rating: 2.6,
              link: "",
            },
            {
              type: 2,
              rating: 3,
              link: "",
            },
          ]
        },
        {
          id: '6',
          name: 'Anees Ahmad',
          username: '@aneess',
          picture: Images.four,
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          status: 'Follow',
          time: '5 hours',
          overallRating: 5.0,
          totalRating: 127,
          totalMessages: 600,
          totalComments: 340,
          tags: [
            {
              type: 1,
              rating: 5,
              link: "",
            },
            {
              type: 5,
              rating: 4,
              link: "",
            },
            {
              type: 3,
              rating: 2.6,
              link: "",
            },
            {
              type: 3,
              rating: 3,
              link: "",
            },
          ]
        },
        {
          id: '7',
          name: 'Anees Ahmad',
          username: '@aneess',
          picture: Images.two,
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          status: 'Follow',
          time: '2 days',
          overallRating: 3.7,
          totalRating: 427,
          totalMessages: 310,
          totalComments: 160,
          tags: [
            {
              type: 3,
              rating: 5,
              link: "",
            },
            {
              type: 5,
              rating: 4,
              link: "",
            },
            {
              type: 8,
              rating: 2.6,
              link: "",
            },
            {
              type: 3,
              rating: 3,
              link: "",
            },
          ]
        },
        {
          id: '8',
          name: 'Anees Ahmad',
          username: '@aneess',
          picture: Images.one,
          avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
          status: 'Follow',
          time: '4 days',
          overallRating: 4.5,
          totalRating: 107,
          totalMessages: 400,
          totalComments: 300,
          tags: [
            {
              type: 2,
              rating: 4,
              link: "",
            },
            {
              type: 5,
              rating: 4,
              link: "",
            },
            {
              type: 3,
              rating: 3.6,
              link: "",
            },
            {
              type: 3,
              rating: 2,
              link: "",
            },
          ]
        },
        {
          id: '9',
          name: 'Anees Ahmad',
          username: '@aneess',
          picture: Images.three,
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          status: 'Follow',
          time: '4 days',
          overallRating: 3.5,
          totalRating: 127,
          totalMessages: 330,
          totalComments: 260,
          tags: [
            {
              type: 1,
              rating: 5,
              link: "",
            },
            {
              type: 5,
              rating: 4,
              link: "",
            },
            {
              type: 7,
              rating: 4.6,
              link: "",
            },
            {
              type: 9,
              rating: 3,
              link: "",
            },
          ]
        },
        {
          id: '10',
          name: 'Anees Ahmad',
          username: '@aneess',
          picture: Images.two,
          avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
          status: 'Follow',
          time: '4 days',
          overallRating: 4.5,
          totalRating: 107,
          totalMessages: 400,
          totalComments: 300,
          tags: [
            {
              type: 1,
              rating: 5,
              link: "",
            },
            {
              type: 5,
              rating: 4,
              link: "",
            },
            {
              type: 4,
              rating: 2.6,
              link: "",
            },
            {
              type: 3,
              rating: 3,
              link: "",
            },
          ]
        },
        {
          id: '11',
          name: 'Anees Ahmad',
          username: '@aneess',
          picture: Images.two,
          avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
          status: 'Follow',
          time: '4 days',
          overallRating: 4.5,
          totalRating: 107,
          totalMessages: 400,
          totalComments: 300,
          tags: [
            {
              type: 1,
              rating: 2,
              link: "",
            },
            {
              type: 5,
              rating: 2.5,
              link: "",
            },
            {
              type: 2,
              rating: 3.6,
              link: "",
            },
            {
              type: 6,
              rating: 4,
              link: "",
            },
          ]
        },
      ],
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

  }
  handleLetsExploreAction() {

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

  render() {

    const windowHeight = Dimensions.get('window').height;
    const windowHeightFull = Dimensions.get('window').height;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
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


        <View style={{ flex: 1 }}>

          {/* Footer Section */}
          <View
          >

            {/* <Image
              style={{ height: 30, width: 30 }}
              source={Images.searchIcon} />

            <Image
              style={{ height: 30, width: 30 }}
              source={Images.bellIcon} />


            <Image
              style={{ height: 30, width: 30 }}
              source={Images.addIcon} />

            <Image
              style={{ height: 30, width: 40 }}
              source={Images.cameraIcon} />

            <Image
              style={{ height: 30, width: 30 }}
              source={Images.homeIcon} /> */}

          </View>


          {/* Posts Section */}
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 0 }}
            contentContainerStyle={{ marginTop: 0, marginBottom: 70 }}
            data={this.state.data}
            extraData={this.state.refresh}
            pagingEnabled={true}
            snapToInterval={windowHeight} // Adjust to your content width
            decelerationRate={"fast"}
            snapToAlignment={"end"}
            keyExtractor={(item) => item.id}
            //ListFooterComponent={this.renderFooter.bind(this)}
            // onEndReachedThreshold={0.1}
            // onEndReached={this.handleLoadMore.bind(this)}
            renderItem={({ item }) => (
              < View style={{ backgroundColor: 'white' }}>

                <View>
                  <ImageBackground
                    resizeMode="cover"
                    style={{ justifyContent: 'center', overflow: 'hidden', height: windowHeight }}
                    source={item.picture}>
                    <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>

                      <Avatar
                        size="medium"
                        rounded
                        title={this.state.data.name}
                        source={{ uri: item.avatar || "https://i.pinimg.com/originals/64/57/c1/6457c16c1691edc5041e437cda422d98.jpg" }} />

                      <View>

                        <Text style={Style.rowName}>
                          {item.name}
                        </Text>

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
                              resizeMode="center"
                              style={{ height: 20, width: 10 }}
                              source={Images.small_star} />
                            <Text style={Style.ratingText}>4.5</Text>
                          </View>


                          <Image
                            resizeMode="center"
                            style={{ height: 30, width: 30 }}
                            source={Images.jeweleryIcon} />
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
                            resizeMode="center"
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
                            resizeMode="center"
                            style={{ height: 30, width: 30 }}
                            source={Images.makeupIcon} />
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
                            resizeMode="center"
                            style={{ height: 30, width: 30 }}
                            source={Images.bodyIcon} />
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
                            resizeMode="center"
                            style={{ height: 30, width: 30 }}
                            source={Images.makeupIcon} />
                        </View>

                      </View>
                    </View>


                    <View
                      style={Style.rightSide}>

                      <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                        <Text style={Style.ratingText}>{item.overallRating} </Text>
                        <Image
                          resizeMode="center"
                          style={{ height: 35, width: 35 }}
                          source={Images.big_star} />
                        <Text style={Style.ratingText}>Rate {item.totalRating} +</Text>
                      </View>

                      <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                        <TouchableOpacity
                          onPress={() => this.toggleComments()}>
                          <Image
                            resizeMode="center"
                            style={{ height: 30, width: 30 }}
                            source={Images.commentIcon} />
                          <Text style={Style.ratingText}>{item.totalComments} +</Text>
                        </TouchableOpacity>
                      </View>


                      <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                        <Image
                          resizeMode="center"
                          style={{ height: 30, width: 30 }}
                          source={Images.shareIcon} />
                        <Text style={Style.ratingText}>Share</Text>
                      </View>


                      <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                        <Image
                          resizeMode="center"
                          style={{ height: 30, width: 30 }}
                          source={Images.messageIcon} />
                        <Text style={Style.ratingText}>Message</Text>
                      </View>


                    </View>

                    <View
                      style={Style.topRightSide}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                          resizeMode="center"
                          style={{ height: 20, width: 10 }}
                          source={Images.three_dots} />
                        <Image
                          resizeMode="center"
                          style={{ height: 30, width: 30 }}
                          source={Images.handIcon} />
                      </View>
                    </View>


                  </ImageBackground>


                </View>


              </View>
            )
            }
          />



        </View>
        <BottomIcons />
      </SafeAreaView >
    )
  }

}

const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  auth: state.authTypeReducer.authType
})

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch({ type: 'SignUp', payload: that.state.signupResponse }),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed)
