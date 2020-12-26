import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'
import Style from './ForgotPasswordStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import NavigationService from 'App/Services/NavigationService'

var that;
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
    NavigationService.navigate("LoginScreen")
  }
  handleUserName = (text) => {
    this.setState({ username: text })
    this.setState({ error: '' })
  }

  handleNextAction() {
    if (this.state.username && this.state.username.length >= 4) {
      that.setState({ isLoading: true })
      NetworkActions.ForgotStep1(this.state.username).then
        (function (response) {
          that.setState({ isLoading: false })
          if (response != null) {
            if (response.status == 200) {
              const _response = {
                username: that.state.username
              }
              that.setState({ data: _response })
              that.props.signup()
              NavigationService.navigate("VerifyCode")
            }
            else if (response.status == 404) {
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
                  Reset Password
            </Text>
              </View>
            </View>

            <Text style={Style.fieldsLabel}>
              Enter your email address
                </Text>

            <TextInput
              style={Style.inputField}
              onChangeText={(text) => this.handleUserName(text)}
              placeholder="@outlook.com" />

            <Text style={Style.fieldsError}>
              {this.state.error}
            </Text>
            <View
              style={[
                Helpers.rowCenter,
              ]}>
              <TouchableOpacity
                onPress={() => this.handleNextAction()}>
                <Text style={Style.almostDoneBtn}>
                  Next
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
  signup: () => dispatch({ type: 'SignUp', payload: that.state.data }),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordScreen)
