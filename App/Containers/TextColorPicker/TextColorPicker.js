import React from 'react'
import { StyleSheet, Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './TextColorPickerStyle'
import BACK from 'react-native-vector-icons/AntDesign';
import NavigationService from 'App/Services/NavigationService'

import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'

var that;
class FontColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "#FFFFFF",
    };
    that = this;
  }

  changeColor = (colorHsvOrRgb, resType) => {
    if (resType === 'end') {
      this.setState({
        oldColor: tinycolor(colorHsvOrRgb).toHexString(),
      });
    }
  }
  save() {
    const request = {
      fontColor: this.state.selectedColor
    }
    console.log(request)
    NetworkActions.UpdateFontColor(request, that.props.auth.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        console.log(response)
        if (response.status === 200) {
          NavigationService.goBack()
        }
      })
      .catch(function (error) {
        that.setState({ isLoading: false })
        alert(JSON.stringify(error))
      })
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
          <View style={{ alignSelf: 'center', width: 100, height: 30, backgroundColor: this.state.selectedColor }}></View>
          <ColorPicker
            onColorSelected={color => this.setState({ selectedColor: color })}
            style={{ flex: 1, width: '80%' }}
          />


          <View
            style={[
              Helpers.rowCenter,
            ]}>
            <TouchableOpacity
              onPress={() => this.save()}>
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
const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  auth: state.authTypeReducer.authType,
})

const mapDispatchToProps = (dispatch) => ({
  notificationData: () => dispatch({ type: 'Notification', payload: that.state.data }),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FontColor)

