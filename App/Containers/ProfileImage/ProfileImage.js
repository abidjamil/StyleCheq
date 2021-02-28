import React from 'react'
import { Alert, Modal, Platform, TouchableOpacity, Text, View, Dimensions, Image, ScrollView, FlatList, ImageBackground, SafeAreaView } from 'react-native'
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

var that;
class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      modalVisible: false,
      userData: props.navigation.state.params,
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
    this.getProfile();
  }

  getProfile() {
    const Request = {
      userId: this.state.userData.userId
    }

    console.log(this.state.userData.username)
    NetworkActions.GetProfile(Request, that.props.auth.data.token).then
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
                  onPress={() => this.toggleModal()}>
                  <Dot name="dots-three-vertical" size={25} color='#fff' />
                </TouchableOpacity>


              </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <View style={Style.textView}>
                <Text style={Style.postText}>POSTS</Text>
                <Text style={Style.postText}>FOLLOWERS</Text>
              </View>

              <View style={Style.textView1}>
                <Text style={Style.postText}>512</Text>
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


            {/* <View style={{ backgroundColor: '#f5f5f5', width: '100%', position: 'absolute', bottom: 0, paddingBottom: Platform.OS === 'ios' ? 20 : '10%' }}>
              <BottomIcons />
            </View> */}

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
})

const mapDispatchToProps = (dispatch) => ({

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)