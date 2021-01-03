import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './PrivacySettingStyle'

import BACK from 'react-native-vector-icons/AntDesign';
import RIGHT from 'react-native-vector-icons/AntDesign';
import USER from 'react-native-vector-icons/EvilIcons'
import ACCOUNT from 'react-native-vector-icons/MaterialCommunityIcons'
import CLOSE from 'react-native-vector-icons/Ionicons'

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
              <Text style={Style.privacyBtn}>Privacy</Text>
            </View>
          </View>
        </View>


        <View style={Style.firstBox}>

          <View style={Style.fieldsLine}>
            <View style={{ flexDirection: 'row' }}>
              <USER name="user" size={20}></USER>
              <Text style={{ paddingLeft: 10 }}>Account Privacy</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingRight: 10 }}>Public</Text>
              <RIGHT name="right" color='#000' size={20} />
            </View>
          </View>

          <View style={Style.fieldsLine}>
            <View style={{ flexDirection: 'row' }}>
              <ACCOUNT name="account-lock-outline" size={20}></ACCOUNT>
              <Text style={Style.paddingText}>Restricted Account</Text>
            </View>
            <RIGHT name="right" color='#000' size={20} />
          </View>

          <View style={Style.fieldsLine}>
            <View style={{ flexDirection: 'row' }}>
              <ACCOUNT name="account-multiple-remove-outline" size={20}></ACCOUNT>
              <Text style={Style.paddingText}>Blocked Account</Text>
            </View>
            <RIGHT name="right" color='#000' size={20} />

          </View>
          <View style={Style.fieldsLine}>
            <View style={{ flexDirection: 'row' }}>
              <ACCOUNT name="account-off-outline" size={20}></ACCOUNT>
              <Text style={Style.paddingText}>Muted Account</Text></View>
            <RIGHT name="right" color='#000' size={20} />

          </View>
          <View style={Style.fieldsLine}>
            <View style={{ flexDirection: 'row' }}>
              <CLOSE name="lock-closed-outline" size={20}></CLOSE>
              <Text style={Style.paddingText}>Close Friend</Text>
            </View>
            <RIGHT name="right" color='#000' size={20} />

          </View>
        </View>



      </View>
    )
  }


}
