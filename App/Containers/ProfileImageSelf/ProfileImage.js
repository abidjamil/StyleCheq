import React from 'react'
import { Platform, TouchableOpacity, Text, View, Dimensions, Image, ScrollView, FlatList, ImageBackground, SafeAreaView } from 'react-native'
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
import { NetworkActions } from '../../NetworkActions'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height / 1.056;
import Modal from "react-native-modal";
import { Rating, AirbnbRating } from 'react-native-elements';

var that;
class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      postRatingModal: false,
      pageNumber: 1,
      rowsPerPage: 50,
      userPosts: [],
    }
    that = this;
  }
  UNSAFE_componentWillMount() {
    this.getProfile()
  }

  getProfile() {
    that.setState({ isLoading: true })
    NetworkActions.GetProfileSelf(that.props.auth.data.token).then
      (function (response) {
        console.log(response)
        if (response.status === 200) {
          that.setState({
            userProfile: response?.data[0]
          })
          const request = {
            rowsPerPage: that.state.rowsPerPage,
            pageNumber: that.state.pageNumber
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
        alert(error)
        that.setState({ isLoading: false })
      })
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  toggleRating() {

  }
  render() {
    return (
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ height: windowHeight, top: Platform.OS === 'ios' ? 40 : 10 }}>
          <View style={Style.firstBox, { paddingHorizontal: 20 }}>
            <View style={Style.fieldsLine}>
              <TouchableOpacity
                onPress={() => NavigationService.navigate('ChatHistory')}>
                <Message name="mail" size={25} />
              </TouchableOpacity>
              <Text style={{ fontSize: 16, fontFamily: 'Poppins-Light', }}>Profile</Text>

              <TouchableOpacity
                onPress={() => NavigationService.navigate('AccountSetting')}>
                <User name="user" size={25} />
              </TouchableOpacity>

            </View>
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
          <OrientationLoadingOverlay
            visible={this.state.isLoading}
            color={Colors.black}
            indicatorSize="large"
            messageFontSize={12}
            message=""
          />
          <ImageBackground
            style={{ height: Platform.OS === 'ios' ? windowHeight - 40 : windowHeight - 10 }}
            source={{ uri: this.state.userProfile?.profilePicture }}>
            <View style={{ marginLeft: 10 }}>
              <Text style={Style.trisaStyle}>{this.state.userProfile?.firstName} {this.state.userProfile?.lastName}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={Style.trisaemail}>@{this.state.userProfile?.username}</Text>
              <View style={{ flexDirection: 'row', marginEnd: 20, borderWidth: 1, borderColor: '#ddd' }}>
                <TouchableOpacity
                  style={{ flexDirection: 'row', backgroundColor: '#fff', }}
                  onPress={() => NavigationService.navigate('EditProfile')}>
                  <Text style={{ backgroundColor: '#fff', paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, color: 'blue' }}>Edit Profile</Text>
                  <Verified name="verified" color="green" size={18} style={{ paddingTop: 5, paddingRight: 7 }} />
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
                  <Text style={{ ...Style.ratingText, fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>{this.state.userProfile?.totalProfileRating.toFixed(2)}</Text>
                </View>
              </View>



            </View>

            <View style={Style.lastView}>
              <Text style={{
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10, color: '#fff', opacity: 0.9, fontFamily: 'Poppins-Bold', fontSize: 40
              }}>BIO</Text>
              <Text style={Style.lastViewText}>{this.state.userProfile?.bio}</Text>
            </View>
            <View style={{ backgroundColor: '#f5f5f5', width: '100%', position: 'absolute', bottom: 0, paddingBottom: Platform.OS === 'ios' ? 20 : '5%' }}>
              <BottomIcons />
            </View>

          </ImageBackground>
        </View>

        <SafeAreaView style={{ marginTop: 50 }}>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingVertical: 10, }}
            numColumns={2}
            keyExtractor={(item) => item.postId}
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
  timelineData: state.timelineReducer.timeline
})

const mapDispatchToProps = (dispatch) => ({
  timeline: () => dispatch({ type: 'Timeline', payload: that.state.data }),

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)