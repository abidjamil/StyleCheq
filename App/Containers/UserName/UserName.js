import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './UserNameStyle'
import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import NavigationService from 'App/Services/NavigationService'

export default class Splash1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  handleFirstName = (text) => {
    this.setState({ firstName: text })
  }
  handleLastName = (text) => {
    this.setState({ lastName: text })
  }


  render() {
    return (
      <View style={{ height: '100%', top: 50 }}>
        <View style={Style.firstBox, { paddingHorizontal: 20 }}>
          <View style={Style.fieldsLine}>
            <TouchableOpacity
              onPress={() => NavigationService.goBack()}
              style={{ flexDirection: 'row' }}>
              <BACK name="left" size={23}></BACK>
              <Text style={Style.privacyBtn}>back</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
              <Text style={Style.privacyBtn}>Display Name</Text>
            </View>
          </View>
        </View>


        <View style={{
          top: 30,
          marginStart: '8%',
          marginEnd: '8%',
        }}>
          <Text style={{ marginStart: '3%', }}>First Name</Text>
          <View style={Style.searchStyle}>
            <TextInput
              onChangeText={(value) => this.handleFirstName(value)}
              style={Style.searchInput}
              placeholder='First Name'
              placeholderTextColor='gray'
            />
          </View>



        </View>

        <View style={{
          top: 60,
          marginStart: '8%',
          marginEnd: '8%',
        }}>
          <Text style={{ marginStart: '3%', }}>Last Name</Text>
          <View style={Style.searchStyle}>
            <TextInput
              onChangeText={(value) => this.handleLastName(value)}
              style={Style.searchInput}
              placeholder='Last Name' placeholderTextColor='gray'
            />
          </View>

          <View
            style={[
              Helpers.rowCenter,
            ]}>
            <TouchableOpacity
              onPress={() => NavigationService.goBack()}>
              <Text style={Style.loginBtn}>
                Save
                   </Text>
            </TouchableOpacity>

          </View>

        </View>


      </View>
    )
  }


}
