import React from 'react'
import { Alert, Platform, TouchableOpacity, Text, View, Dimensions, Image, ScrollView, FlatList, ImageBackground, SafeAreaView } from 'react-native'
import Style from './ProfileImageStyle'
import { connect } from 'react-redux'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import Message from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/Entypo';
import Dot from 'react-native-vector-icons/Entypo';
import Verified from 'react-native-vector-icons/MaterialIcons';
import Star from 'react-native-vector-icons/AntDesign';
import NavigationService from 'App/Services/NavigationService'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import StarRating from 'react-native-star-rating';
import BottomIcons from '../../Components/BottomIcons'
import BACK from 'react-native-vector-icons/AntDesign';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height / 1.056;
import { NetworkActions } from '../../NetworkActions'
import Modal from "react-native-modal";
import { Rating, AirbnbRating } from 'react-native-elements';

var that;
class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      modalVisible: false,
      pageNumber: 1,
      rowsPerPage: 50,
      userData: props.navigation.state.params,
      userPosts: [],
      starCount: 3.5
    }
    that = this;
  }
  UNSAFE_componentWillMount() {
    this.getProfile();
  }

  getProfile() {
    var Request = null
    that.setState({ isLoading: true })
    if (this.state.userData.userId) {
      Request = {
        userId: this.state.userData.userId
      }
    }
    else {
      Request = {
        username: this.state.userData.substring(1)
      }
    }
    console.log(this.state.userData.username)
    NetworkActions.GetProfile(Request, that.props.auth.data.token).then
      (function (response) {
        if (response.status === 200) {
          console.log(response.data[0])
          that.setState({
            userProfile: response.data[0]
          })
          if (response?.data[0].isFollowedByYou > 0) {
            const request = {
              rowsPerPage: that.state.rowsPerPage,
              pageNumber: that.state.pageNumber,
              userId: response?.data[0].UserId
            }
            NetworkActions.GetUserPosts(request, that.props.auth.data.token).then
              (function (response) {
                that.setState({ isLoading: false })
                if (response.status === 200) {
                  that.setState({
                    userPosts: response.data
                  })
                }
              })
              .catch(function (error) {
                alert(error)
                that.setState({ isLoading: false })
              })
          }
          else {
            that.setState({ isLoading: false })
          }
        }
      })
      .catch(function (error) {
        alert(error)
        that.setState({ isLoading: false })
      })
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }
  ReportProfile() {
    Alert.alert(
      'Confirmation',
      'Are you sure to report profile?',
      [
        {
          text: 'Yes',
          onPress: () => {
            this.setState({ modalVisible: false })
          }

        },
        {
          text: 'No',
          onPress: () => {
            this.setState({ modalVisible: false })
          }

        }
      ],
      { cancelable: false }
    );
  }
  followPeople(id) {
    const request = {
      followTo: id,
    }
    NetworkActions.FollowUser(request, that.props.auth.data.token).then
      (function (response) {
        if (response.status === 200) {
          that.setState({
            userProfile: {
              isFollowedByYou: 1
            }
          })
          const request = {
            rowsPerPage: that.state.rowsPerPage,
            pageNumber: that.state.pageNumber,
            userId: id
          }
          NetworkActions.GetUserPosts(request, that.props.auth.data.token).then
            (function (response) {
              that.setState({ isLoading: false })
              if (response.status === 200) {
                that.setState({
                  userPosts: response.data
                })
              }
            })
            .catch(function (error) {
              alert(error)
              that.setState({ isLoading: false })
            })
        }
      })
      .catch(function (error) {
        alert(JSON.stringify(error))
      })
    this.setState({
      refresh: !this.state.refresh
    })
  }

  BlockProfile() {
    Alert.alert(
      'Confirmation',
      'Are you sure to block profile?',
      [
        {
          text: 'Yes',
          onPress: () => {
            this.setState({ modalVisible: false })
          }

        },
        {
          text: 'No',
          onPress: () => {
            this.setState({ modalVisible: false })
          }

        }
      ],
      { cancelable: false }
    );
  }
  render() {
    return (
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{ flexGrow: 1 }}>

        <View>
          <Modal
            ref={(ref) => { this.Modal = ref }}
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => { console.log("Modal has been closed.") }}>

            <View style={Style.ModelView}>
              <View style={{ alignSelf: 'flex-start', paddingHorizontal: 20, paddingTop: 20, }}>
                <TouchableOpacity
                  onPress={() => this.ReportProfile()}>
                  <Text style={Style.modelText}>Report...</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.BlockProfile()}>
                  <Text style={Style.modelText}>Block</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>
        </View>


        <View style={{ height: windowHeight, top: Platform.OS === 'ios' ? 40 : 10 }}>
          <View style={Style.firstBox, { paddingHorizontal: 20 }}>
            <View style={Style.fieldsLine}>

              <TouchableOpacity
                onPress={() => NavigationService.goBack()}
                style={{ flexDirection: 'row' }}>
                <BACK name="left" size={23}></BACK>
                <Text style={Style.privacyBtn}>back</Text>
              </TouchableOpacity>


            </View>
          </View>

          <ImageBackground
            style={{ height: Platform.OS === 'ios' ? windowHeight - 40 : windowHeight - 10 }}
            source={Images.background}>
            <OrientationLoadingOverlay
              visible={this.state.isLoading}
              color={Colors.black}
              indicatorSize="large"
              messageFontSize={12}
              message=""
            />

            <View style={{ marginLeft: 10 }}>
              <Text style={Style.trisaStyle}>TRISA SNOW</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={Style.trisaemail}>@{this.state.userProfile?.username}</Text>
              <View style={{ flexDirection: 'row', marginEnd: 20 }}>
                {this.state.userProfile?.isFollowedByYou == 0 ?
                  <TouchableOpacity
                    onPress={() => this.followPeople(this.state.userProfile?.UserId)}>
                    <Text style={Style.rowStatusFollow}>
                      Follow
                    </Text>
                  </TouchableOpacity> :
                  <Text style={Style.rowStatusFollowing}>
                    Following
                    </Text>
                }
                <TouchableOpacity
                  onPress={() => this.toggleModal()}>
                  <Dot name="dots-three-vertical" size={25} color='#fff' />
                </TouchableOpacity>


              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View style={Style.textView}>
                <Text style={Style.postText}>POSTS</Text>
                <Text style={Style.postText}>FOLLOWERS</Text>
              </View>

              <View style={Style.textView1}>
                <Text style={Style.postText}>{this.state.userProfile?.totalPost}</Text>
                <Text style={Style.postText}>{this.state.userProfile?.NoOfFollowBy}</Text>
              </View>

              <View style={Style.textView1}>
                <Text style={Style.postText}>FOLLOWING</Text>
                <Text style={Style.postText}>RATING</Text>
              </View>

              <View style={Style.textView1}>
                <Text style={Style.postText}>{this.state.userProfile?.NoOfFollowTo}</Text>
                <View style={{ ...Style.postText, flexDirection: 'row' }}>
                  <Star name="star" size={20} color='#FFC00B' style={{ marginTop: 5 }} />
                  <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>3.8</Text>
                </View>
              </View>



            </View>

            <View style={Style.lastView}>
              <Text style={{ color: '#fff', opacity: 0.6, fontFamily: 'Poppins-Bold', fontSize: 40 }}>BIO</Text>
              <Text style={Style.lastViewText}>{this.state.userProfile?.bio}</Text>
            </View>
            {/* <View style={{ backgroundColor: '#f5f5f5', width: '100%', position: 'absolute', bottom: 0, paddingBottom: Platform.OS === 'ios' ? 20 : '10%' }}>
              <BottomIcons />
            </View> */}

          </ImageBackground>
        </View>
        <Modal
          onSwipeComplete={() => this.setState({ postRatingModal: false })}
          swipeDirection="left"
          animationIn="zoomIn"
          animationOut="zoomOut"
          onBackdropPress={() => this.setState({ postRatingModal: false })}
          onBackButtonPress={() => this.setState({ postRatingModal: false })}
          isVisible={this.state.postRatingModal}>
          <View style={{ width: '100%', height: 200, opacity: 0.7, alignContent: 'center', alignItems: 'center', }}>
            <View style={{ backgroundColor: 'black', borderRadius: 10, flex: 1, width: '100%', alignContent: 'center', alignItems: 'center', paddingTop: 20 }}>
              <Image
                resizeMode="center"
                style={{ height: 100, width: 100, resizeMode: 'center' }}
                source={{ uri: this.state.selectedPostForRating?.picture }} />

              <AirbnbRating
                showRating={false}
                count={5}
                defaultRating={0}
                size={30}
                onFinishRating={(value) => {
                  that.setState({
                    isLoading: true
                  })
                  const request = {
                    postId: this.state.selectedPostForRating.postId,
                    rating: value
                  }
                  NetworkActions.RatePost(request, that.props.auth.data.token).then
                    (function (response) {
                      console.log(JSON.stringify(response))
                      that.setState({ postRatingModal: false })
                      that.setState({
                        isLoading: false
                      })
                    })
                    .catch(function (error) {
                      that.setState({
                        isLoading: false
                      })
                      alert(error)
                    })

                }}
              />

            </View>
          </View>
        </Modal>
        <SafeAreaView style={{ marginTop: 50 }}>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingVertical: 10, }}
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={this.state.userPosts}
            columnWrapperStyle={{ marginHorizontal: 5, marginVertical: 5, }}
            renderItem={({ item }) => {
              return (
                <View style={{ padding: 10, flex: 1 }}>
                  <TouchableOpacity style={{ alignSelf: 'flex-end', marginEnd: 10 }}
                    onPress={() => this.setState({ postRatingModal: true, selectedPostForRating: item })}>
                    <Star name="star" size={20} color='#FFC00B' />
                    <Text style={Style.ratingText}>{item.rating}</Text>
                  </TouchableOpacity>
                  <Image
                    style={{ marginTop: -55, zIndex: -1, height: 250, width: '100%', borderRadius: 20 }}
                    source={{ uri: item.picture }} />
                </View>

              );
            }

            }

          />


        </SafeAreaView>


      </ScrollView>
    )
  }


}
const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  auth: state.authTypeReducer.authType,
})

const mapDispatchToProps = (dispatch) => ({

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)