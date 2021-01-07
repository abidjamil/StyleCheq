import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './EditProfileStyle'
import BACK from 'react-native-vector-icons/AntDesign';
import RIGHT from 'react-native-vector-icons/AntDesign';
import NavigationService from 'App/Services/NavigationService'

export default class Splash1 extends React.Component {

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
              <Text style={Style.privacyBtn}>Edit Profile</Text>
            </View>
          </View>
        </View>


        <View style={Style.firstBox}>

          <View>

            <TouchableOpacity
              style={Style.fieldsLine}
              onPress={() => NavigationService.navigate('UserName')}>
              <Text style={{ ...Style.paddingText, paddingLeft: 10 }}>Display Name</Text>

              <Text style={{ ...Style.paddingText, paddingRight: 10 }}>@username</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => NavigationService.navigate('EditBio')}
            style={Style.fieldsLine}>

            <Text style={Style.paddingText}>Bio</Text>

            <RIGHT name="right" color='#000' size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => NavigationService.navigate('FontStyle')}
            style={Style.fieldsLine}>

            <Text style={Style.paddingText}>Font Style</Text>

            <RIGHT name="right" color='#000' size={20} />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => NavigationService.navigate('TextColorPicker')}
            style={Style.fieldsLine}>

            <Text style={Style.paddingText}>Text Color</Text>
            <RIGHT name="right" color='#000' size={20} />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => NavigationService.navigate('PictureSelectionScreen')}
            style={Style.fieldsLine}>

            <Text style={Style.paddingText}>Edit Profile Picture</Text>

            <RIGHT name="right" color='#000' size={20} />

          </TouchableOpacity>
        </View>



      </View>
    )
  }


}
