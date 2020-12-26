import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'
import Style from './VerifyCodeStyle'
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
    NavigationService.navigate("ForgotScreen")
  }
  handleCode = (text) => {
    this.setState({ code: text })
    this.setState({ error: '' })
  }

  handleVerifyAction() {
    if (this.state.code && this.state.code.length >= 6) {
      that.setState({ isLoading: true })
      const request = {
        username: that.props.user.username,
        forgotPinCode: that.state.code
      }
      NetworkActions.ForgotStep2(request).then
        (function (response) {
          that.setState({ isLoading: false })
          if (response != null) {
            console.log(JSON.stringify(response))
            if (response.status == 200) {
              const _response = {
                username: that.props.user.username,
                forgotPinCode: that.state.code
              }
              that.setState({ data: _response })
              that.props.signup()
              NavigationService.navigate("SetPasswordScreen")
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
          alert(JSON.stringify(error))
          that.setState({ isLoading: false })
        })
    }
    else {
      this.setState({ error: 'Pincode must contain atleast 6 letters' })
    }
  }
  render() {
    console.log("Username", that.props.user.username)
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
                  Verify Code
            </Text>
              </View>
            </View>


            <View style={Helpers.row} >
              <Text style={Style.fieldsLabel}>
                Check your email for
                </Text>
              <Text style={Style.fieldsLabelBold}>
                Verification Code
                </Text>
            </View>
            <TextInput
              style={Style.inputField}
              onChangeText={(text) => this.handleCode(text)}
              placeholder="123-213-123" />

            <Text style={Style.fieldsError}>
              {this.state.error}
            </Text>
            <View
              style={[
                Helpers.rowCenter,
              ]}>
              <TouchableOpacity
                onPress={() => this.handleVerifyAction()}>
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
