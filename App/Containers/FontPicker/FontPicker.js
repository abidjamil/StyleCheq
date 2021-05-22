import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './FontPickerStyle'
import BACK from 'react-native-vector-icons/AntDesign';
import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import { Picker } from '@react-native-picker/picker';
import NavigationService from 'App/Services/NavigationService'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'

var that
class FontPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'Poppins',
    }
    that = this;
  }
  onValueChange(value) {
    console.log(value)
    this.setState({
      selectedValue: value
    });
  }
  save() {
    const request = {
      fontFamily: this.state.language
    }
    console.log(request)
    NetworkActions.UpdateFontFamily(request, that.props.auth.data.token).then
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
              <Text style={Style.privacyBtn}>Font Style</Text>
            </View>
          </View>

          <Text style={{ marginLeft: 20, marginTop: 20 }}>Select your font style</Text>
          <Text style={{ marginLeft: 20, marginTop: 20, fontFamily: this.state.language }}>The quick brown fox jumps over the lazy dog</Text>
        </View>


        {Platform.OS === 'android' ? <View style={{ alignSelf: 'center', top: 20, marginLeft: 20, shadowColor: "#000", width: '80%', paddingHorizontal: 20, shadowOpacity: 1, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 10, fontSize: 20, backgroundColor: '#ECEFF4', borderRadius: 20, marginLeft: 15 }}>
          <Picker
            selectedValue={Platform.OS === 'ios' ? null : this.state.language}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Poppins" value="Poppins-Regular" />
            <Picker.Item label="Poppins Bold" value="Poppins-Bold" />
            <Picker.Item label="Times New Roman" value="Times New Roman" />
            <Picker.Item label="Lato" value="Lato-Regular" />

          </Picker>


        </View> :

          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }>
            <Picker.Item label="Poppins" value="Poppins-Regular" />
            <Picker.Item label="Poppins Bold" value="Poppins-Bold" />
            <Picker.Item label="Times New Roman" value="Times New Roman" />
            <Picker.Item label="Lato" value="Lato-Regular" />

          </Picker>

        }

        <View
          style={[
            Helpers.rowCenter, { top: Platform.OS === 'ios' ? 200 : 70 }
          ]}>
          <TouchableOpacity
            onPress={() => this.save()}>
            <Text style={Style.loginBtn}>
              Done
              </Text>
          </TouchableOpacity>

        </View>


      </View>
    )
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
)(FontPicker)
