import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './PushNotificationStyle'
import NavigationService from 'App/Services/NavigationService'
import BACK from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native'

export default class Splash1 extends React.Component {
  state = {
    isOnDefaultToggleSwitch: true,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false,

    isOnDefaultToggleSwitch1: true,
    isOnLargeToggleSwitch1: false,
    isOnBlueToggleSwitch1: false,

    isOnDefaultToggleSwitch2: true,
    isOnLargeToggleSwitch2: false,
    isOnBlueToggleSwitch2: false,

    isOnDefaultToggleSwitch3: true,
    isOnLargeToggleSwitch3: false,
    isOnBlueToggleSwitch3: false,

    isOnDefaultToggleSwitch4: true,
    isOnLargeToggleSwitch4: false,
    isOnBlueToggleSwitch4: false
  };



  onToggle(isOn) {
    console.log("Changed to " + isOn);
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
              isOn={this.state.isOnDefaultToggleSwitch}
              onToggle={isOnDefaultToggleSwitch => {
                this.setState({ isOnDefaultToggleSwitch });
                this.onToggle(isOnDefaultToggleSwitch);
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
              isOn={this.state.isOnDefaultToggleSwitch1}
              onToggle={isOnDefaultToggleSwitch1 => {
                this.setState({ isOnDefaultToggleSwitch1 });
                this.onToggle(isOnDefaultToggleSwitch1);
              }}
            />
          </View>

          <View style={Style.fieldsLine}>


            <Text style={Style.privacyBtn}>Rating & Reviews</Text>

            <ToggleSwitch
              offColor="#C0C0C0"
              onColor="#0F7EB5"
              size="small"
              isOn={this.state.isOnDefaultToggleSwitch4}
              onToggle={isOnDefaultToggleSwitch4 => {
                this.setState({ isOnDefaultToggleSwitch4 });
                this.onToggle(isOnDefaultToggleSwitch4);
              }}
            />

          </View>
          <View style={Style.fieldsLine}>


            <Text style={Style.privacyBtn}>Others</Text>
            <ToggleSwitch
              offColor="#C0C0C0"
              onColor="#0F7EB5"
              size="small"
              isOn={this.state.isOnDefaultToggleSwitch2}
              onToggle={isOnDefaultToggleSwitch2 => {
                this.setState({ isOnDefaultToggleSwitch2 });
                this.onToggle(isOnDefaultToggleSwitch2);
              }}
            />

          </View>
          <View style={Style.fieldsLine}>

            <Text style={Style.privacyBtn}>From Style Cheq</Text>

            <ToggleSwitch
              offColor="#C0C0C0"
              onColor="#0F7EB5"
              size="small"
              isOn={this.state.isOnDefaultToggleSwitch3}
              onToggle={isOnDefaultToggleSwitch3 => {
                this.setState({ isOnDefaultToggleSwitch3 });
                this.onToggle(isOnDefaultToggleSwitch3);
              }}
            />

          </View>
        </View>



      </View>
    )
  }


}
