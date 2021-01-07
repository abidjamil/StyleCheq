import React from 'react'
import { StyleSheet, Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './TextColorPickerStyle'
import BACK from 'react-native-vector-icons/AntDesign';
import NavigationService from 'App/Services/NavigationService'

import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker'

export default class Splash1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldColor: "#FF7700",
    };
  }

  changeColor = (colorHsvOrRgb, resType) => {
    if (resType === 'end') {
      this.setState({
        oldColor: tinycolor(colorHsvOrRgb).toHexString(),
      });
    }
  }

  render() {
    const {
      oldColor,
    } = this.state;

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
              <Text style={Style.privacyBtn}>Text Color</Text>
            </View>
          </View>
        </View>
        <Text style={{ marginLeft: 30, marginTop: 20, fontFamily: 'Poppins-Regular', }}>Select Font Color</Text>
        <View style={Style.container}>
          <ColorPicker
            onColorSelected={color => alert(`Color selected: ${color}`)}
            style={{ flex: 1, width: '80%' }}
          />


          <View
            style={[
              Helpers.rowCenter,
            ]}>
            <TouchableOpacity
              onPress={() => NavigationService.goBack()}>
              <Text style={Style.loginBtn}>
                Done
                   </Text>
            </TouchableOpacity>

          </View>
        </View>

      </View >
    );
  }
}
