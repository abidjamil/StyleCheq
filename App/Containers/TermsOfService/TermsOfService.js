import React from 'react'
import { Platform, Text, View, Image, TouchableOpacity, ActivityIndicator, TextInput, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import Style from './TermsOfServiceStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import { ScrollView } from 'react-native-gesture-handler'
import NavigationService from 'App/Services/NavigationService'


class TermsOfService extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      buttonEnabled: false,
    }
  }

  handleAgree() {
    NavigationService.navigate("PrivacyPolicyScreen")
  }
  handleDisagree() {
    NavigationService.navigate("SignupScreen")
  }
  handleBack() {
    NavigationService.navigate('SignupScreen')
  }

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };
  render() {
    console.log(this.props.user)
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
        ]}
      >


        <View>


          <View>
            <Text style={Style.heading}>
              Terms of service
            </Text>
          </View>

          <ScrollView
            style={{ marginStart: '5%', marginEnd: '5%', height: '75%' }}
            onScroll={({ nativeEvent }) => {
              if (this.isCloseToBottom(nativeEvent)) {
                this.setState({ buttonEnabled: true })
              }
            }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={700}>

            <Text style={Style.boldText}>
              Terms of Service
                    </Text>
            <Text style={Style.boldText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   </Text>

            <Text style={Style.normalText}>
              "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
              "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
              "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

                  </Text>

          </ScrollView>
          <View
            style={[
              Helpers.rowCenter,
            ]}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                disabled={!this.state.buttonEnabled}
                onPress={() => this.handleAgree()}>
                <Text style={Style.AgreeBtn}>
                  Accept
                   </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!this.state.buttonEnabled}
                onPress={() => this.handleDisagree()}>
                <Text style={Style.disAgreeBtn}>
                  Decline
                   </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View >
    )
  }

  _fetchUser() {
    this.props.fetchUser()
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
)(TermsOfService)
