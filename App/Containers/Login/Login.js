import React from 'react'
import { Platform, TouchableOpacity, Text, View, Button, ActivityIndicator, TextInput, ImageBackground, Alert } from 'react-native'
import { connect } from 'react-redux'
import Style from './LoginStyle'
import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import { NetworkActions } from '../../NetworkActions'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import { LoginManager } from "react-native-fbsdk";
import Toast from 'react-native-simple-toast';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
GoogleSignin.configure({
  webClientId: "97893421916-3ebvqvujeqive4qv9pqvc9cvec40pbd0.apps.googleusercontent.com" /* insert webClientId here present in google-services.json*/,
});
/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

var that;
class ExampleScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
    that = this
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }

  onlogin() {
    if (this.state.email != null && this.state.password != null && this.state.email != "" && this.state.password != "") {
      that.setState({ loading: true })
      const request = {
        username: this.state.email,
        password: this.state.password,
        fcmToken: global?.fcm
      }
      console.log(request)
      var wrongPass = false
      var message = ""
      NetworkActions.AuthAction(request).then
        (function (response) {
          that.setState({ loading: false })
          if (response != null) {
            if (response.status == 200) {
              that.setState({ AuthData: response })
              that.props.auth()
              that.setState({ isLoading: false })
              NavigationService.navigateAndReset('NewsFeedScreen')
            }
            else if (response.status == 428) {
              console.log(response.data.status)
              if (response.data.step == 2) {
                that.setState({ signupResponse: response })
                that.props.signup()
                NavigationService.navigateAndReset('TermsOfServiceScreen')
              }
              else if (response.data.step == 3) {
                that.setState({ signupResponse: response })
                that.props.signup()
                NavigationService.navigateAndReset('PictureSelectionScreen')
              }
            }
            else if (response.status == 401) {
              alert(response.message)
            }
            else {
              alert("Server Error, Please try again")
            }
          }
          else {
            console.log("Login Response", JSON.stringify(response))
          }

        })
        .catch(function (error) {
          that.setState({ loading: false })
          alert(error.message)
        })

    }
    else {
      alert('Email and Password are required')
    }

  }
  onFacebookLogin() {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function (result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
            result.grantedPermissions.toString()
          );
        }
      },
      function (error) {
        console.log("Login fail with error: " + error);
      }
    );
  }
  async googleLogin() {
    await GoogleSignin.signOut();
    console.log("Google")
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
      alert("Logged In by " + userInfo.user.name)
      // const googleCredential = auth.GoogleAut // Sign-in the user with the credential
      // auth().signInWithCredential(googleCredential)
      //   .then((response) => {
      //     alert(response)
      //   }
      //   ).catch((error) => {
      //     alert(error)
      //   })
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {

      }
    }
  };
  render() {
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
        ]}
      >
        <ImageBackground
          style={[Helpers.fullSize]}
          source={Images.background}>
          <OrientationLoadingOverlay
            visible={this.state.loading}
            color={Colors.black}
            indicatorSize="large"
            messageFontSize={12}
            message=""
          />
          <View>

            <Text style={Style.loginHeaderText}>
              Log in
                </Text>

            <Text style={Style.fieldsLabel}>
              Enter Username / Email
                </Text>

            <TextInput
              style={Style.inputField}
              onChangeText={(value) => this.handleEmail(value)}
              placeholder="example@stylecheq.com" />

            <Text style={Style.fieldsLabel}>
              Enter your password
                </Text>

            <TextInput
              style={Style.inputField}
              onChangeText={(value) => this.handlePassword(value)}
              secureTextEntry={true}
              placeholder="*********" />

            <View
              style={[
                Helpers.mainEnd,
                Helpers.row,
              ]}>
              <Text style={Style.forgotPasswordLabel}>
                Forget Password?
                </Text>

              <TouchableOpacity
                onPress={() => NavigationService.navigate('ForgotScreen')}>
                <Text style={Style.forgotPasswordLabelClickHere}>
                  Click here
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={[
                Helpers.rowCenter,
              ]}>
              <TouchableOpacity
                onPress={() => this.onlogin()}>
                <Text style={Style.loginBtn}>
                  Log in
                   </Text>
              </TouchableOpacity>

            </View>


            <View
              style={[
                Helpers.rowCenter,
              ]}>

              <Text style={Style.newToStyleLabel}>
                New to Style Cheq?
                   </Text>
              <Text style={Style.newToStyleLabelSecondary}>
                Sign up now!
                   </Text>

            </View>

            <View
              style={[
                Helpers.fullSize,
              ]}>
              <TouchableOpacity
                onPress={() => NavigationService.navigate('PeopleToFollow')}>
                <Text style={Style.signUpBtn}>
                  Sign Up
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.onFacebookLogin()}>
                <Text style={Style.fbSignUpBtn}>
                  Sign up with facebook
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.googleLogin()}
                disabled={this.state.loading}>
                <Text style={Style.googleSignUpBtn} >
                  Sign up with google
                    </Text>
              </TouchableOpacity>

              {Platform.OS === 'ios' ?
                <TouchableOpacity
                  onPress={() => this.googleLogin()}
                  disabled={this.state.loading}>
                  <Text style={Style.appleSignUpBtn} >
                    Sign up with Apple
                    </Text>
                </TouchableOpacity>

                : <View></View>}

            </View>

          </View>

        </ImageBackground>
      </View>
    )
  }

  _fetchUser() {
    this.props.fetchUser()
  }
}


const mapStateToProps = (state) => ({


})
const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch({ type: 'SignUp', payload: that.state.signupResponse }),
  auth: () => dispatch({ type: 'AUTH_TYPE', payload: that.state.AuthData }),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen)
