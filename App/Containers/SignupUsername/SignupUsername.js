import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'
import Style from './SignupUsernameStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import NavigationService from 'App/Services/NavigationService'

var that;
class SignupUserScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      error: '',
      isLoading: false
    }
    that = this;
  }

  handleUserName = (text) => {
    this.setState({ username: text, error: '' })
  }
  handleFirstName = (text) => {
    this.setState({ firstname: text })
  }
  handleLastName = (text) => {
    this.setState({ lastname: text })
  }

  handleSignupAction() {
    if (this.state.username && this.state.username.length >= 4) {
      if (this.state.firstname.length > 0 && this.state.lastname.length > 0) {
        const request = {
          id: this.props.user.data.id,
          username: this.state.username,
          firstName: this.state.firstname,
          lastName: this.state.lastname
        }
        that.setState({ isLoading: true })
        NetworkActions.SignupStep2(request).then
          (function (response) {
            that.setState({ isLoading: false })
            if (response != null) {
              if (response.status == 200) {
                console.log("Username Response", response)
                that.setState({ signupResponse: response })
                that.props.signup()
                NavigationService.navigate("PictureSelectionScreen")
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
      else {
        alert('First Name and Last Name is also mandatory')
      }

    }
    else {
      this.setState({ error: 'Username must contain atleast 4 letters' })
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

            <Text style={Style.loginHeaderText}>
              Create Username
                </Text>

            <Text style={Style.fieldsLabel}>
              Choose a Username for your new account (Mandatory)
                </Text>

            <TextInput
              style={Style.inputField}
              onChangeText={(text) => this.handleUserName(text)}
              placeholder="@username" />

            <Text style={Style.fieldsError}>
              {this.state.error}
            </Text>

            <Text style={{ ...Style.fieldsLabel, marginTop: 5 }}>
              First Name
                </Text>

            <TextInput
              style={Style.inputField}
              onChangeText={(text) => this.handleFirstName(text)}
              placeholder="First Name" />

            <Text style={{ ...Style.fieldsLabel, marginTop: 5 }}>
              Last Name
                </Text>
            <TextInput
              style={Style.inputField}
              onChangeText={(text) => this.handleLastName(text)}
              placeholder="Last Name" />
            <View
              style={[
                Helpers.rowCenter,
              ]}>
              <TouchableOpacity
                onPress={() => this.handleSignupAction()}>
                <Text style={Style.almostDoneBtn}>
                  Almost done
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
)(SignupUserScreen)
