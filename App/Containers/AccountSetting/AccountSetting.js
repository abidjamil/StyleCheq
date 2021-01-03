import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './AccountSettingStyle'

import BACK from 'react-native-vector-icons/AntDesign';
import RIGHT from 'react-native-vector-icons/AntDesign';

export default class Splash1 extends React.Component {
 
  render() {
    return (
      <View style={{height:'100%',top:50}}>
        <View
      style={Style.acctView}
      >
      <BACK name="left" color='#000' size={20}/>
      <Text style={{fontWeight:'bold'}}>Account Setting</Text>
      </View>


        <View style={Style.firstBox}>
        <View style={Style.fieldsLine}>
          <Text>Email</Text>
          <TextInput placeholder="example@123" style={Style.fieldsStyle}></TextInput>
        </View>

        <View style={Style.fieldsLine}>
          <Text>Phone Number</Text>
          <TextInput placeholder="+923135705782" style={Style.fieldsStyle} keyboardType='numeric'></TextInput>
        </View>

        <View style={Style.fieldsLine}>
          <Text>Password</Text>
          <TextInput placeholder="*****************" style={Style.fieldsStyle} secureTextEntry={true}></TextInput>

        </View>
        <View style={Style.fieldsLine}>
          <Text>Notifications</Text>
          <RIGHT name="right" color='#000' size={20}/>

        </View>
        </View>
        <View style={Style.boxView}/>
       
       <View style={Style.secondBox}>
      
          <Text style={{paddingHorizontal:10,paddingVertical:10}}>Send Feedback</Text>
       
          <View style={Style.fieldsLine}>
          <Text>Privacy</Text>
          <RIGHT name="right" color='#000' size={20}/>
        </View>

        <View style={Style.fieldsLine}>
          <Text>Become a Partner</Text>
          <RIGHT name="right" color='#000' size={20}/>

        </View>

        <View style={Style.fieldsLine}>
          <Text>Logout Account</Text>
          <RIGHT name="right" color='#000' size={20}/>

        </View>
        </View>

      </View>
    )
  }


}
