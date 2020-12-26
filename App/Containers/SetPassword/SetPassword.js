import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'
import Style from './SetPasswordStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import NavigationService from 'App/Services/NavigationService'
import passwordValidator from 'password-validator';
var that;
var schema = new passwordValidator();

// Add properties to it
schema
  .is().min(8)                                    // Minimum length 8
  .is().max(100)                                  // Maximum length 100
  .has().uppercase()                              // Must have uppercase letters
  .has().lowercase()                              // Must have lowercase letters
  .has().digits(1)                                // Must have at least 2 digits
  .has().not().spaces()                           // Should not have spaces
  .is().not().oneOf(['Passw0rd', 'Password123']);


class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      error: '',
      isLoading: false
    }
    that = this;
  }

  handleBack() {
    NavigationService.navigate("ForgotScreen")
  }
  handlePassword = (text) => {
    that.setState({ passwordError: 'At least 8 characters, number, lower and upper case' })
    that.setState({ color: Colors.instructionsText })
    that.setState({ password: text })
  }
  handleConfirmPassword = (text) => {
    that.setState({ passwordError: 'At least 8 characters, number, lower and upper case' })
    that.setState({ color: Colors.instructionsText })
    that.setState({ confirmPassword: text })
  }

  handleSaveAction() {
    console.log(that.props.user.forgotPinCode)
    if (this.state.password && this.state.confirmPassword) {
      this.setState({ error: '' })
      if (!schema.validate(this.state.password)) {
        that.setState({ color: Colors.error })
        that.setState({ passwordError: 'Weak Password' })

      }
      else if (this.state.password != this.state.confirmPassword) {
        that.setState({ color: Colors.error })
        that.setState({ passwordError: 'Both passwords are not matched' })

      }
      else {
        console.log(that.state.user)
        const request = {
          username: that.props.user.username,
          forgotPinCode: that.props.user.forgotPinCode,
          password: this.state.password
        }
        that.setState({ isLoading: true })
        NetworkActions.ForgotStep3(request).then
          (function (response) {
            that.setState({ isLoading: false })
            if (response != null) {
              if (response.status == 200) {
                const _response = response
                that.setState({ signupResponse: _response })
                that.props.signup()
                alert(response.message)
                NavigationService.navigateAndReset('LoginScreen')
              }
              else if (response.status == 406) {
                alert(response.message)
                that.setState({ error: response.message })
              }
              else {
                alert(response.message)
              }
            }
          })
          .catch(function (error) {
            alert(JSON.stringify(error))
            that.setState({ isLoading: false })
          })

      }
    }
    else {
      this.setState({ error: 'Passwords are required' })
    }
  }
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
            visible={that.state.isLoading}
            color={Colors.primaryColorLogin}
            indicatorSize="large"
            messageFontSize={12}
            message="Please Wait"
          />
          <View>

            <View
              style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => this.handleBack()}>
                <Image
                  style={Style.backArrow}
                  source={Images.backArrow} />

              </TouchableOpacity>

              <View
                style={{ flex: 4 }}>
                <Text style={Style.heading}>
                  Set Password
            </Text>
              </View>
            </View>

            <Text style={Style.fieldsLabel}>
              Enter Your Password
                </Text>

            <TextInput
              style={Style.inputField}
              onChangeText={this.handlePassword}
              secureTextEntry={true}
              placeholder="Enter your password" />
            <Text style={{ ...Style.fieldsInstruction, color: this.state.color }}>
              {that.state.passwordError}

            </Text>

            <Text style={Style.fieldsLabel}>
              Renter Your Password
                </Text>

            <TextInput
              style={Style.inputField}
              onChangeText={this.handleConfirmPassword}
              secureTextEntry={true}
              placeholder="Re-enter your password" />
            <Text style={{ ...Style.fieldsInstruction, color: this.state.color }}>
              {that.state.passwordError}
            </Text>


            <Text style={Style.fieldsError}>
              {this.state.error}
            </Text>
            <View
              style={[
                Helpers.rowCenter,
              ]}>
              <TouchableOpacity
                onPress={() => this.handleSaveAction()}>
                <Text style={Style.almostDoneBtn}>
                  Save
                   </Text>
              </TouchableOpacity>



            </View>






          </View>

        </ImageBackground>
      </View>
    )
  }


}


const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
})

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch({ type: 'SignUp', payload: that.state.signupResponse }),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordScreen)
