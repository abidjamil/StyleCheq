import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './ProfileRatingStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import Star from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native'

export default class Splash1 extends React.Component {
  state = {
    isOnDefaultToggleSwitch: true,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false,
  }
  onToggle(isOn) {
    console.log("Changed to " + isOn);
  }
  render() {
    return (
      <View style={{ height: '100%', top: 50 }}>

        <View style={Style.firstBox, { paddingHorizontal: 20 }}>

          <View style={{ flexDirection: 'row' }}>
            <BACK name="left" size={23}></BACK>
            <Text style={Style.privacyBtn}>back</Text>
          </View>

        </View>

        <View style={Style.mainImageView}>
          <View>
            <Image style={Style.mainImage}
              source={Images.two} />
          </View>
          <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
            <Text style={{fontSize:25, fontFamily: 'Poppins-Regular'}}>Ghulam Farid</Text>
            <Text style={{color:'grey',fontFamily: 'Poppins-Regular'}}>gulam@gmail.com</Text>
            <View style={{ flexDirection: 'row',marginTop:5 }}>
              <Star name="star" size={20} color='#FFC00B' />
              <Star name="star" size={20} color='#FFC00B' />
              <Star name="star" size={20} color='#FFC00B' />
              <Star name="star" size={20} color='#FFC00B' />
              <Star name="star" size={20} color='#FFC00B' />
              <Text style={{ color: 'grey', paddingHorizontal: 15,top:3 }}>5+ Rating</Text>
            </View>
          </View>
        </View>



        <View style={Style.mainView}>
          <View style={{ marginTop: 50 }}>
            <Image style={Style.imageOne}
              source={Images.two} />
          </View>
          <View style={{ marginTop: 50 }}>
            <Image style={Style.imageOne}
              source={Images.two} />
          </View>
          <View style={{ marginTop: 50 }}>
            <Image style={{ height: 80, width: 60, borderRadius: 20 }}
              source={Images.two} />
          </View>
          <View style={Style.textStyle}>
            <Text style={{ color: '#fff', fontSize: 25 }} >8+</Text>
          </View>
        </View>



        <Text style={Style.checkStyle}>Check out more</Text>

        <View style={Style.notificationStyle}>
          <Text style={{marginTop:10, fontFamily: 'Poppins-Regular'}}>Notification</Text>
          <ToggleSwitch

            offColor="#C0C0C0"
            onColor="#0F7EB5"
            isOn={this.state.isOnDefaultToggleSwitch}
            onToggle={isOnDefaultToggleSwitch => {
              this.setState({ isOnDefaultToggleSwitch });
              this.onToggle(isOnDefaultToggleSwitch);
            }}
          />
        </View>

        <View style={{ paddingHorizontal: 40, paddingVertical: 20 }}>
          <Text style={Style.muteStyle}>Mute Conversation</Text>
          <Text style={Style.blockStyle}>Block @gujjarbilal</Text>
          <Text style={Style.blockStyle}>Report @gujjarbilal</Text>
          <Text style={Style.deleteStyle}>Delete Conversation</Text>
        </View>

      </View>
    )
  }


}
