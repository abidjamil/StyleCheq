import React from 'react'
import { Platform, Text, View, Image, TouchableOpacity, TouchableHighlight, ActivityIndicator, TextInput, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'
import Style from './PictureSelectionStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import NavigationService from 'App/Services/NavigationService'
import ImagePicker from 'react-native-image-picker'
var that;
class PictureSelection extends React.Component {
  constructor(props) {
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
    console.log("Userid" + JSON.stringify(that.props.user.data.id))
    if (this.state.userImage) {
      var formData = new FormData();
      formData.append('id', that.props.user.data.id)
      formData.append('username', that.props.user.data.username)
      formData.append("profilePicture", {
        uri: Platform.OS === 'ios' ? this.state.userImage.uri : 'file://' + this.state.userImage.path,
        type: this.state.userImage.type,
        name: that.props.user.data.id,
      });

      that.setState({ isLoading: true })
      console.log(formData)
      NetworkActions.SignupStep3(formData).then
        (function (response) {
          that.setState({ isLoading: false })
          if (response != null) {
            if (response.status == 200) {
              const data = {
                image: that.state.userImage,
                username: that.props.user.username
              }
              that.setState({ signUpData: data })
              that.setState({ AuthData: response })
              that.props.signup()
              that.props.auth()
              NavigationService.navigateAndReset("WelcomeScreen")
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
    console.log(image)
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
        ]}
      >
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
            {this.state.userImage.data != null ?
              <TouchableOpacity
                onPress={() => this.chooseImage()}>
                <Image
                  style={Style.UserImage}
                  source={{ uri: image }}
                  resizeMode="center"
                />
              </TouchableOpacity> :
              <TouchableOpacity
                onPress={() => this.chooseImage()}>
                <Text style={Style.PlusSymbol}>
                  +
               </Text>
              </TouchableOpacity>
            }


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
})

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch({ type: 'SignUp', payload: that.state.signUpData }),
  auth: () => dispatch({ type: 'AUTH_TYPE', payload: that.state.AuthData }),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureSelection)
