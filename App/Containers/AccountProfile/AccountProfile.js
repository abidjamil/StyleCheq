import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './AccountProfileStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux'


class AccountProfile extends React.Component {

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
              <Text style={Style.privacyBtn}>Account</Text>
            </View>
          </View>
        </View>


        <View style={Style.firstBox}>


          <Image
            source={Images.two} style={Style.ImageStyle}></Image>
        </View>

        <View style={Style.nameStyle}>
          <Text style={{ fontSize: 30 }}>{this.props.auth.data.user.firstName} {this.props.auth.data.user.lastName}</Text>
          <Text style={Style.emailStyle}>{this.props.auth.data.user.email}</Text>
        </View>

        <View >
          <TouchableOpacity
            style={Style.touchableOpacityStyle1}
          >
            <Text style={Style.toucableTextStyle}>Forget password?</Text>


          </TouchableOpacity>
          <View >
            <TouchableOpacity
              style={Style.touchableOpacityStyle}
            >
              <Text style={Style.toucableTextStyle1}>Change password</Text>


            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }


}
const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  auth: state.authTypeReducer.authType,
  timelineData: state.timelineReducer.timeline,
})

const mapDispatchToProps = (dispatch) => ({
  timeline: () => dispatch({ type: 'Timeline', payload: that.state.data }),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountProfile)