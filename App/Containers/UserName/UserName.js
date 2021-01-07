import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './UserNameStyle'
import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';


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
              <Text style={Style.privacyBtn}>User Name</Text>
            </View>
          </View>
        </View>


    <View style={{top:30,marginLeft:30}}>
      <Text style={{marginLeft:30}}>First Name</Text>
      <View style={Style.searchStyle}>
      <TextInput
            style={Style.searchInput}
            placeholder='umer' placeholderTextColor='gray'
          />
    </View>

 
    
</View>
      
<View style={{top:60,marginLeft:30}}>
      <Text style={{marginLeft:30}}>Last Name</Text>
      <View style={Style.searchStyle}>
      <TextInput
            style={Style.searchInput}
            placeholder='bilal' placeholderTextColor='gray'
          />
    </View>

    <View
              style={[
                Helpers.rowCenter,
              ]}>
              <TouchableOpacity
                onPress={() => this.onlogin()}>
                <Text style={Style.loginBtn}>
                  Log in
                   </Text>
              </TouchableOpacity>

            </View>
    
</View>
      

      </View>
    )
  }


}
