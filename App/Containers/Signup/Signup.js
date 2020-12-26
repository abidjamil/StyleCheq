import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, TextInput, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import Style from './SignupStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import * as EmailValidator from 'email-validator';
import { NetworkActions } from '../../NetworkActions'
import NavigationService from 'App/Services/NavigationService'
import passwordValidator from 'password-validator';
import Icon from 'react-native-vector-icons/FontAwesome5';


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

class SignupScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      showAlert: false,
      icon: 'eye-slash',
      hidePassword: true,
      IsLoading: false,
      emailError: '',
      passwordError: '',
      color: Colors.instructionsText
    }
    that = this

  }

  componentDidMount() {
    that.setState({ passwordError: 'At least 8 characters, number, lower and upper case' })
    that.setState({ color: Colors.instructionsText })

  }
  handleEmail = (text) => {
    that.setState({ email: text })
    that.setState({ color: Colors.instructionsText })
    that.setState({ emailError: '' })
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

  handleSignupAction() {
    if (this.state.email && this.state.password && this.state.confirmPassword) {
      if (!EmailValidator.validate(this.state.email)) {
        that.setState({ color: Colors.error })
        that.setState({ emailError: 'Invalid Email' })

      }
      else if (!schema.validate(this.state.password)) {
        that.setState({ color: Colors.error })
        that.setState({ passwordError: 'Weak Password' })

      }
      else if (this.state.password != this.state.confirmPassword) {
        that.setState({ color: Colors.error })
        that.setState({ passwordError: 'Both passwords are not matched' })

      }
      else {
        const request = {
          email: this.state.email,
          password: this.state.password,
        }
        that.setState({ isLoading: true })
        NetworkActions.SignupStep1(request).then
          (function (response) {
            that.setState({ isLoading: false })
            if (response != null) {
              if (response.status == 200) {
                that.setState({ signupResponse: response })
                that.props.signup()
                NavigationService.navigate('TermsOfServiceScreen')
              }
              else if (response.status == 406) {
                that.setState({ color: Colors.error })
                that.setState({ emailError: response.message })
              }
              else {
                alert(response.message)
              }

            }
            else {

              alert(response)
            }
          })
          .catch(function (error) {
            that.setState({ isLoading: false })
            alert(error)

          })
      }
    }
    else {
      alert("All fields are required")
    }
  }
  onChange = (password, score, { label, labelColor, activeBarColor }) => {
    console.log(password, score, { label, labelColor, activeBarColor });
  }
  render() {

    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
        ]}
      >
        <OrientationLoadingOverlay
          visible={that.state.isLoading}
          color={Colors.primaryColorLogin}
          indicatorSize="large"
          messageFontSize={12}
          message="Please Wait"
        />
        <ImageBackground
          style={[Helpers.fullSize]}
          source={Images.background}>

          <View>

            <Text style={Style.loginHeaderText}>
              Signup
                </Text>

            <Text style={Style.fieldsLabel}>
              Enter Your Email
                </Text>

            <TextInput
              style={Style.inputField}
              onChangeText={this.handleEmail}
              placeholder="example@123.com" />
            <Text style={{ ...Style.fieldsInstruction, color: this.state.color }}>
              {that.state.emailError}
            </Text>


            <Text style={Style.fieldsLabel}>
              Enter Your Password
                </Text>

            <TextInput
              style={Style.inputField}
              onChangeText={this.handlePassword}
              secureTextEntry={this.state.hidePassword}
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

            <View
              style={[
                Helpers.rowCenter,
              ]}>
              <TouchableOpacity
                onPress={() => this.handleSignupAction()}>
                <Text style={Style.SignUpBtn}>
                  Sign up
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

})

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch({ type: 'SignUp', payload: that.state.signupResponse }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreen)
