import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './UserNameStyle'
import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import NavigationService from 'App/Services/NavigationService'
import { NetworkActions } from '../../NetworkActions'
import { connect } from 'react-redux'

var that;
class Username extends React.Component {
  constructor(props) {
    console.log(props.authData.data)
    super(props)
    this.state = {
      loading: false,
      firstName: props.authData.data.user.firstName || "",
      lastName: props.authData.data.user.lastName || "",
      AuthData: props.authData.data
    }
    that = this;
  }
  handleFirstName = (text) => {
    this.setState({ firstName: text })
  }
  handleLastName = (text) => {
    this.setState({ lastName: text })
  }
  updateName() {
    if (this.state.firstName?.length == 0 || this.state.lastName?.length == 0) {
      alert('Firstname and Lastname is required')
    }
    else {
      const request = {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      }
      console.log(this.state.AuthData)
      NetworkActions.UpdateName(request, this.state.AuthData.token).then
        (function (response) {
          that.setState({ isLoading: false })
          if (response != null) {
            if (response.status == 200) {
              let _AuthData = that.props.authData
              _AuthData.data.user.firstName = that.state.firstName,
                _AuthData.data.user.lastName = that.state.lastName

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
              <Text style={Style.privacyBtn}>Display Name</Text>
            </View>
          </View>
        </View>


        <View style={{
          top: 30,
          marginStart: '8%',
          marginEnd: '8%',
        }}>
          <Text style={{ marginStart: '3%', }}>First Name</Text>
          <View style={Style.searchStyle}>
            <TextInput
              onChangeText={(value) => this.handleFirstName(value)}
              style={Style.searchInput}
              value={this.state.firstName}
              placeholder='First Name'
              placeholderTextColor='gray'
            />
          </View>



        </View>

        <View style={{
          top: 60,
          marginStart: '8%',
          marginEnd: '8%',
        }}>
          <Text style={{ marginStart: '3%', }}>Last Name</Text>
          <View style={Style.searchStyle}>
            <TextInput
              value={this.state.lastName}
              onChangeText={(value) => this.handleLastName(value)}
              style={Style.searchInput}
              placeholder='Last Name'
              placeholderTextColor='gray'
            />
          </View>

          <View
            style={[
              Helpers.rowCenter,
            ]}>
            <TouchableOpacity
              onPress={() => this.updateName()}>
              <Text style={Style.loginBtn}>
                Save
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
)(Username)
