import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './EditBioStyle'
import BACK from 'react-native-vector-icons/AntDesign';
import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import { NetworkActions } from '../../NetworkActions'
import { connect } from 'react-redux'

var that;
class Bio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      bio: props.authData.data.user.bio || "",
      AuthData: props.authData.data
    }
    that = this
  }
  handleBio = (text) => {
    this.setState({ bio: text })
  }
  updateBio() {
    if (this.state.bio?.length == 0) {
      alert('Bio is required')
    }
    else {
      const request = {
        bio: this.state.bio,
      }
      console.log(this.state.AuthData)
      NetworkActions.UpdateBio(request, this.state.AuthData.token).then
        (function (response) {
          that.setState({ isLoading: false })
          if (response != null) {
            if (response.status == 200) {
              console.log(response)
              let _AuthData = that.props.authData
              _AuthData.data.user.bio = that.state.bio,
                that.props.auth(_AuthData)
              NavigationService.goBack()
            }
          }
        })
        .catch(function (error) {
          alert(error)
          that.setState({ isLoading: false })
        })
    }
  }
  render() {
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
              <Text style={Style.privacyBtn}>Edit Bio</Text>
            </View>
          </View>
        </View>

        <View style={Style.bioViewStyle}>
          <Text style={Style.editBioStyle}>Edit Bio</Text>
          <TextInput
            onChangeText={(value) => this.handleBio(value)}
            multiline={true}
            numberOfLines={15}
            value={this.state.bio}
            style={Style.inputTextStyle}
            placeholder='Write Your Bio here!'
            placeholderTextColor='grey'
          ></TextInput>


          <View
            style={[
              Helpers.rowCenter,
            ]}>
            <TouchableOpacity
              onPress={() => this.updateBio()}>
              <Text style={Style.loginBtn}>
                Done
                   </Text>
            </TouchableOpacity>

          </View>
        </View>







      </View>
    )
  }


}
const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  authData: state.authTypeReducer.authType,
  timelineData: state.timelineReducer.timeline
})

const mapDispatchToProps = (dispatch) => ({
  timeline: () => dispatch({ type: 'Timeline', payload: that.state.data }),
  auth: (data) => dispatch({ type: 'AUTH_TYPE', payload: data }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bio)
