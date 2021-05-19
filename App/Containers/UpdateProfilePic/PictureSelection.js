import React from 'react'
import { Platform, Text, View, Image, TouchableOpacity, TouchableHighlight, ActivityIndicator, TextInput, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'
import Style from './PictureSelectionStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import NavigationService from 'App/Services/NavigationService'
import ImagePicker from 'react-native-image-picker'
import BACK from 'react-native-vector-icons/AntDesign';

var that;
class PictureSelection extends React.Component {
  constructor(props) {
    console.log(props.authData.data.user.profilePicture)
    super(props)
    this.state = {
      username: '',
      error: '',
      isLoading: false,
      userImage: null,
      userImage: {
        uri: "",
        type: "",
        data: null
      }
    }
    that = this;
  }
  chooseImage = () => {
    let options = {
      title: 'Select Picture',
      cameraType: 'front',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {

      }
      else if (response != null) {
        console.log("URI" + JSON.stringify(response))
        const source = { uri: response.path }
        const imagesource = source.uri
        const picture = {
          uri: response.uri,
          data: response.data,
          type: response.type,
          path: response.path
        }
        if (picture.uri != null) {
          this.setState({ userImage: picture })
        }

      }
    });

  }
  handleBack() {
    NavigationService.navigate("TermsOfServiceScreen")
  }
  handleSignupAction() {
    if (this.state.userImage.data != null) {
      var formData = new FormData();
      formData.append('id', that.props.authData?.data?.user.id)
      formData.append('username', that.props.authData?.data?.user.username)
      formData.append("profilePicture", {
        uri: Platform.OS === 'ios' ? this.state.userImage.uri : 'file://' + this.state.userImage.path,
        type: this.state.userImage.type,
        name: that.props.authData?.data?.user?.id,
      });

      that.setState({ isLoading: true })
      console.log(formData)
      NetworkActions.SignupStep3(formData).then
        (function (response) {
          that.setState({ isLoading: false })
          if (response != null) {
            if (response.status == 200) {
              that.setState({ AuthData: response })
              that.props.auth()
              NavigationService.goBack()
            }
            else if (response.status == 406) {
              that.setState({ error: response.message })
            }
            else {
              alert("response " + response.message)
            }
          }
        })
        .catch(function (error) {
          alert(JSON.stringify(error))
          that.setState({ isLoading: false })
        })
    }
    else {
      alert("Please select picture")
    }
  }
  render() {
    var image = Platform.OS === 'ios' ? this.state.userImage.uri : 'file://' + this.state.userImage.path
    console.log(this.state.userImage)
    return (
      <View style={{ height: '100%', top: Platform.OS === 'ios' ? 50 : 25 }}>
        <View style={Style.firstBox, { paddingHorizontal: 20 }}>
          <View style={Style.fieldsLine}>
            <TouchableOpacity
              onPress={() => NavigationService.goBack()}
              style={{ flexDirection: 'row' }}>
              <BACK name="left" size={23}></BACK>
              <Text style={Style.privacyBtn}>back</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
              <Text style={Style.privacyBtn}>Update Profile Picture</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          style={[Helpers.fullSize]}>
          <OrientationLoadingOverlay
            visible={that.state.isLoading}
            color={Colors.primaryColorLogin}
            indicatorSize="large"
            messageFontSize={12}
            message="Please Wait"
          />

          <View>
            <Text style={Style.heading}>
              Upload Profile Picture
            </Text>
          </View>

          <View style={Style.PictureSelectorView}
            onPress={() => console.log("Hello")}>

            <TouchableOpacity
              onPress={() => this.chooseImage()}>
              <Image
                style={Style.UserImage}
                source={{ uri: this.state.userImage?.data != null ? image : this.props.authData.data.user.profilePicture }}
                resizeMode="center"
              />
            </TouchableOpacity>




          </View>

          <View style={[
            Helpers.rowCenter,
          ]}>
            <TouchableOpacity
              onPress={() => this.handleSignupAction()}>
              <Text style={Style.almostDoneBtn}>
                Upload Picture
                   </Text>
            </TouchableOpacity>



          </View>



        </ImageBackground>
      </View >
    )
  }


}


const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  authData: state.authTypeReducer.authType,
})

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch({ type: 'SignUp', payload: that.state.signUpData }),
  auth: () => dispatch({ type: 'AUTH_TYPE', payload: that.state.AuthData }),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureSelection)
