import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './PushNotificationStyle'
import BACK from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native'
import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import { NetworkActions } from '../../NetworkActions'
import { connect } from 'react-redux'
var that;
class PrivacySetting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      AuthData: props.authData.data,
      notificationPauseAll: false,
      notificationPostRatingAndComments: true,
      notificationRatingAndReviews: true,
      notificationOthers: true,
      notificationFromStyleCheq: true,
    };
    that = this;
  }

  saveSetting() {
    const request = {
      notificationPauseAll: this.state.notificationPauseAll + 0,
      notificationPostRatingAndComments: this.state.notificationPostRatingAndComments + 0,
      notificationRatingAndReviews: this.state.notificationRatingAndReviews + 0,
      notificationOthers: this.state.notificationOthers + 0,
      notificationFromStyleCheq: this.state.notificationFromStyleCheq + 0,
      accountPrivacy: "public"
    }
    NetworkActions.UpdatePrivacy(request, this.state.AuthData.token).then
      (function (response) {
        that.setState({ isLoading: false })
        if (response != null) {
          if (response.status == 200) {
            console.log(response)
            let _AuthData = that.props.authData
            _AuthData.data.token = response.data,
              that.props.auth(_AuthData)
            // NavigationService.goBack()
          }
        }
      })
      .catch(function (error) {
        alert(error)
        that.setState({ isLoading: false })
      })
  }

  render() {
    return (
      <View style={{ paddingStart: 10, paddingEnd: 10, height: '100%', top: Platform.OS === 'ios' ? 50 : 25 }}>
        <View style={Style.firstBox, { paddingHorizontal: 20 }}>
          <View style={Style.fieldsLine}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => NavigationService.goBack()}
                style={{ flexDirection: 'row' }}>
                <BACK name="left" size={23}></BACK>
                <Text style={Style.privacyBtn}>back</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={Style.privacyBtn}>Push Notification</Text>
            </View>
          </View>
        </View>


        <View style={Style.firstBox}>

          <View style={Style.fieldsLine}>

            <Text style={Style.privacyBtn}>Pause All</Text>



            <ToggleSwitch
              offColor="#C0C0C0"
              onColor="#0F7EB5"
              size="small"
              isOn={this.state.notificationPauseAll}
              onToggle={notificationPauseAll => {
                this.setState({ notificationPauseAll });
              }}
            />

          </View>

          <View style={Style.fieldsLine}>
            <View style={{ flexDirection: 'row' }}>

              <Text style={Style.privacyBtn}>Post,Rating & Comments</Text>
            </View>
            <ToggleSwitch
              offColor="#C0C0C0"
              onColor="#0F7EB5"
              size="small"
              isOn={this.state.notificationPostRatingAndComments}
              onToggle={notificationPostRatingAndComments => {
                this.setState({ notificationPostRatingAndComments });
              }}
            />
          </View>

          <View style={Style.fieldsLine}>


            <Text style={Style.privacyBtn}>Rating & Reviews</Text>

            <ToggleSwitch
              offColor="#C0C0C0"
              onColor="#0F7EB5"
              size="small"
              isOn={this.state.notificationRatingAndReviews}
              onToggle={notificationRatingAndReviews => {
                this.setState({ notificationRatingAndReviews });
              }}
            />

          </View>
          <View style={Style.fieldsLine}>


            <Text style={Style.privacyBtn}>Others</Text>
            <ToggleSwitch
              offColor="#C0C0C0"
              onColor="#0F7EB5"
              size="small"
              isOn={this.state.notificationOthers}
              onToggle={notificationOthers => {
                this.setState({ notificationOthers });
              }}
            />

          </View>
          <View style={Style.fieldsLine}>

            <Text style={Style.privacyBtn}>From Style Cheq</Text>

            <ToggleSwitch
              offColor="#C0C0C0"
              onColor="#0F7EB5"
              size="small"
              isOn={this.state.notificationFromStyleCheq}
              onToggle={notificationFromStyleCheq => {
                this.setState({ notificationFromStyleCheq });
              }}
            />

          </View>
        </View>


        <View
          style={[
            Helpers.rowCenter,
          ]}>
          <TouchableOpacity
            onPress={() => this.saveSetting()}>
            <Text style={Style.loginBtn}>
              Save
                   </Text>
          </TouchableOpacity>

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
)(PrivacySetting)

