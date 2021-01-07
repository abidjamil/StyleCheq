import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './FontPickerStyle'
import BACK from 'react-native-vector-icons/AntDesign';
import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import { Picker } from '@react-native-picker/picker';
export default class Splash1 extends React.Component {

  state = {
    language: 'Jabiri',
  };

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
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
              <Text style={Style.privacyBtn}>Font Style</Text>
            </View>
          </View>

          <Text style={{marginLeft:20,top:20}}>Select your font style</Text>

        </View>

        <View style={{alignSelf:'center',top:50,marginLeft:20,shadowColor: "#000",width:'80%',paddingHorizontal:20,shadowOpacity: 1,shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 10, fontSize: 20, backgroundColor: '#ECEFF4', borderRadius: 20, marginLeft: 15}}>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Jabiri" value="Jabiri" />
            <Picker.Item label="Lotus" value="Lotus" />
            <Picker.Item label="Titus" value="Titus" />
          </Picker>

         
        </View>

      

        <View
              style={[
                Helpers.rowCenter,{top:70}
              ]}>
              <TouchableOpacity
               >
                <Text style={Style.loginBtn}>
                  Done
                   </Text>
              </TouchableOpacity>

            </View>
      

      </View>
    )
  }


}
