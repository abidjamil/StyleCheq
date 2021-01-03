import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './EditBioStyle'
import BACK from 'react-native-vector-icons/AntDesign';
import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
export default class Splash1 extends React.Component {

  render() {
    return (
      <View style={{ height: '100%', top: 50 }}>

        <View style={Style.firstBox, { paddingHorizontal: 20 }}>
          <View style={Style.fieldsLine}>
            <View style={{ flexDirection: 'row' }}>
              <BACK name="left" size={23}></BACK>
              <Text style={Style.privacyBtn}>back</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={Style.privacyBtn}>Edit Bio</Text>
            </View>
          </View>
        </View>

        <View style={Style.bioViewStyle}>
          <Text style={Style.editBioStyle}>Edit Bio</Text>
          <TextInput
            multiline={true}
            numberOfLines={15}
            style={Style.inputTextStyle}
            placeholder='Write Your Bio here!'
            placeholderTextColor='grey'
          ></TextInput>


          <View
            style={[
              Helpers.rowCenter,
            ]}>
            <TouchableOpacity
            >
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
