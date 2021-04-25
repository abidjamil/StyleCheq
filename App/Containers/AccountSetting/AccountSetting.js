import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './AccountSettingStyle'
import BACK from 'react-native-vector-icons/AntDesign';
import RIGHT from 'react-native-vector-icons/AntDesign';
import NavigationService from 'App/Services/NavigationService'
import { connect } from 'react-redux'
class AccountSetting extends React.Component {

  logout() {
    NavigationService.navigateAndReset('LoginScreen')
    this.props.auth()
    this.props.timeline()
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
              <Text style={Style.privacyBtn}>Account Setting</Text>
            </View>
          </View>
        </View>


        <View style={Style.firstBox}>
          <View style={Style.fieldsLine}>
            <Text style={Style.label}>Email</Text>
            <Text style={Style.fieldsStyle}>{this.props.authData?.data?.user?.email}</Text>
          </View>

          <View style={Style.fieldsLine}>
            <Text style={Style.label}>Username</Text>
            <Text style={Style.fieldsStyle}>{this.props.authData?.data?.user?.username}</Text>
          </View>

          <View style={Style.fieldsLine}>
            <Text style={Style.label}>Password</Text>
            <Text style={Style.fieldsStyle}> ********** </Text>

          </View>
          <View style={Style.fieldsLine}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('PushNotificationScreen')}
              style={Style.fieldsLine}>
              <Text style={Style.label}>Notifications</Text>
              <RIGHT name="right" color='#000' size={20} />
            </TouchableOpacity>

          </View>
        </View>
        <View style={Style.boxView} />

        <View style={Style.secondBox}>

          <View style={Style.fieldsLine}>
            <Text style={Style.label}>SendFeedback</Text>
            <RIGHT name="right" color='#000' size={20} />
          </View>

          <View style={Style.fieldsLine}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('PrivacySetting')}
              style={Style.fieldsLine}>
              <Text style={Style.label}>Privacy</Text>
              <RIGHT name="right" color='#000' size={20} />
            </TouchableOpacity>
          </View>

          <View style={Style.fieldsLine}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('BecomePartnerScreen')}
              style={Style.fieldsLine}>
              <Text style={Style.label}>Become a Partner</Text>
              <RIGHT name="right" color='#000' size={20} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => this.logout()}
            style={Style.fieldsLine}>
            <Text style={Style.label}>Logout Account</Text>
            <RIGHT name="right" color='#000' size={20} />

          </TouchableOpacity>
        </View>

      </View>
    )
  }


}
const mapStateToProps = (state) => ({
  authData: state.authTypeReducer.authType,
})
const mapDispatchToProps = (dispatch) => ({
  auth: () => dispatch({ type: 'AUTH_TYPE', payload: null }),
  timeline: () => dispatch({ type: 'Timeline', payload: null }),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSetting)