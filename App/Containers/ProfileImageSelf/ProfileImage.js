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

var that;
class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: [
        {
          id: "1",
          picture: Images.two,
        },
        {
          id: "2",
          picture: Images.one,
        },
        {
          id: "3",
          picture: Images.three,
        },
        {
          id: "4",
          picture: Images.two,
        }],

      starCount: 3.5
    }
    that = this;
  }
  UNSAFE_componentWillMount() {
    this.getProfile()
  }

  getProfile() {
    NetworkActions.GetProfileSelf(that.props.auth.data.token).then
      (function (response) {
        console.log(response.data[0])
        that.setState({ isLoading: false })
        that.setState({
          userProfile: response.data[0]
        })
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
              <Message name="mail" size={25} />
              <Text style={{ fontSize: 16, fontFamily: 'Poppins-Light', }}>Profile</Text>

              <TouchableOpacity
                onPress={() => NavigationService.navigate('AccountSetting')}>
                <User name="user" size={25} />
              </TouchableOpacity>

            </View>
          </View>

          <ImageBackground
            style={{ height: Platform.OS === 'ios' ? windowHeight - 40 : windowHeight - 10 }}
            source={Images.background}>
            <OrientationLoadingOverlay
              visible={this.state.loading}
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
                <TouchableOpacity
                  style={{ flexDirection: 'row', backgroundColor: '#fff', }}
                  onPress={() => NavigationService.navigate('EditProfile')}>
                  <Text style={{ backgroundColor: '#fff', paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, color: 'blue' }}>Edit Profile</Text>
                  <Verified name="verified" color="green" size={18} style={{ paddingTop: 5, paddingRight: 7 }}></Verified>
                </TouchableOpacity>


              </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <View style={Style.textView}>
                <Text style={Style.postText}>POSTS</Text>
                <Text style={Style.postText}>FOLLOWERS</Text>
              </View>

              <View style={Style.textView1}>
                <Text style={Style.postText}>PostsNumber</Text>
                <Text style={Style.postText}>{this.state.userProfile?.NoOfFollowBy}</Text>
              </View>

              <View style={Style.textView1}>
                <Text style={Style.postText}>LOCATIONS</Text>
                <Text style={Style.postText}>FOLLOWING</Text>
              </View>

              <View style={Style.textView1}>
                <Text style={Style.postText}>LONDON</Text>
                <Text style={Style.postText}>{this.state.userProfile?.NoOfFollowTo}</Text>
              </View>

              <View style={{ marginTop: 20 }}>

                <Text style={{ alignSelf: 'flex-end', paddingHorizontal: 30, fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>RATING</Text>
                <View style={{ alignSelf: 'flex-end', paddingHorizontal: 30, flexDirection: 'row', marginLeft: 10 }}>

                  <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular', marginLeft: 5 }}>5000</Text>
                  <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>(</Text>
                  <Star name="star" size={20} color='#FFC00B' />
                  <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>3.8</Text>
                  <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>)</Text>
                </View>
              </View>
              <View style={Style.lastView}>
                <Text style={Style.lastViewText}>MODEL,ACTRESS,INFLUENCERS YOU CAN HAVE ANYTHING IN LIFE IF YOU DRESS FOR IT. </Text>
              </View>
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
            keyExtractor={(item) => item.id}
            data={this.state.data}
            columnWrapperStyle={{ marginHorizontal: 5, marginVertical: 5, }}
            renderItem={({ item }) => {
              var displayRating = false;
              return (
                <View style={{ padding: 10, flex: 1 }}>
                  <Image
                    style={{ height: 250, width: '100%', borderRadius: 20 }}
                    source={item.picture} />
                  <Star name="star" size={20} color='#FFC00B' />
                  {displayRating == true ?
                    <StarRating

                      containerStyle={{ width: 50, marginLeft: 20 }}
                      disabled={false}
                      maxStars={5}
                      visible={displayRating}
                      fullStarColor='#FFC00B'
                      emptyStarColor='#fff'
                      starSize={30}
                      rating={this.state.starCount}
                      selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                    : <View>

                    </View>

                  }
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