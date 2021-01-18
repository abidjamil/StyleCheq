import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './BecomePartnerStyle'
import BACK from 'react-native-vector-icons/AntDesign';
import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'

export default class Splash1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }

  }
  handleMessage = (text) => {
    this.setState({ firstName: text })
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
              <Text style={Style.privacyBtn}>Become Partner</Text>
            </View>
          </View>
        </View>

        <View style={Style.bioViewStyle}>
          <Text style={Style.editBioStyle}>Write your message here</Text>
          <TextInput
            onChangeText={(value) => this.handleMessage(value)}
            multiline={true}
            numberOfLines={15}
            style={Style.inputTextStyle}
            placeholder='Write Your Message here!'
            placeholderTextColor='grey'
          ></TextInput>


          <View
            style={[
              Helpers.rowCenter,
            ]}>
            <TouchableOpacity
              onPress={() => NavigationService.goBack()}>
              <Text style={Style.loginBtn}>
                Become a Partner
                   </Text>
            </TouchableOpacity>

          </View>
        </View>







      </View>
    )
  }


}
