import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './EditProfileStyle'

import BACK from 'react-native-vector-icons/AntDesign';
import RIGHT from 'react-native-vector-icons/AntDesign';

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
              <Text style={Style.privacyBtn}>Edit Profile</Text>
            </View>
          </View>
        </View>


        <View style={Style.firstBox}>

          <View style={Style.fieldsLine}>

            <Text style={{ paddingLeft: 10 }}>Edit User Name</Text>


            <Text style={{ paddingRight: 10 }}>Umer Bilal</Text>


          </View>

          <View style={Style.fieldsLine}>

            <Text style={Style.paddingText}>Bio</Text>

            <RIGHT name="right" color='#000' size={20} />
          </View>

          <View style={Style.fieldsLine}>

            <Text style={Style.paddingText}>Font Style</Text>

            <RIGHT name="right" color='#000' size={20} />

          </View>
          <View style={Style.fieldsLine}>

            <Text style={Style.paddingText}>Text Color</Text>
            <RIGHT name="right" color='#000' size={20} />

          </View>
          <View style={Style.fieldsLine}>

            <Text style={Style.paddingText}>Edit Profile Picture</Text>

            <RIGHT name="right" color='#000' size={20} />

          </View>
        </View>



      </View>
    )
  }


}
