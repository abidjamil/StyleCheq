import React from 'react'
import { Platform, Text, View, Button, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'
import Style from './WelcomeStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import { Avatar, Accessory } from 'react-native-elements';
import NavigationService from 'App/Services/NavigationService'
var that;
class SignupUserScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      error: '',
      isLoading: false,
      data: this.props.user
    }
    that = this;
  }

  handleTapHere() {
    NavigationService.navigateAndReset("PeopleToFollow")
  }


  render() {
    return (
      <View
        style={[
          Helpers.fillCenter
        ]}
      >
        <TouchableOpacity
          onPress={() => this.handleTapHere()}>
          <Text style={Style.tapHereText}>
            Tap here !
        </Text>
        </TouchableOpacity>
        <Text style={Style.Welcome}>
          Welcome
        </Text>

        <Avatar
          size="xlarge"
          rounded
          title={this.state.data.username}
          source={{ uri: this.state.data.image.uri }}
        />
        <Text style={Style.UsernameText}>
          {this.state.data.username}
        </Text>
      </View >
    )
  }


}


const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupUserScreen)
