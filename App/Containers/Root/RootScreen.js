import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View, Platform } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'
import PushNotification from 'react-native-push-notification'
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { NetworkActions } from '../../NetworkActions'

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token)
    if (token.os == "ios") {
      const request = {
        application: "org.crecode.stylecheqApp",
        sandbox: true,
        apns_tokens: [
          token.token
        ]
      }
      console.log(request)
      NetworkActions.GETFCM(request).then(
        function (response) {
          global.fcm = response?.results[0]?.registration_token
          console.log(response?.results[0]?.registration_token)
        })
        .catch(function (error) {
          console.log(JSON.stringify(error))
        })
    }
    else {
      global.fcm = token.token
    }

  },
  onRegistrationError: function (error) {
    console.log('Error:', error)
  },
  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log('REMOTE NOTIFICATION ==>', notification)
    if (notification.data.type == "newMessage" && notification.userInteraction == true) {
      const item = {
        userId: notification.data.userId
      }

      NavigationService.navigate('ChatScreen', item)
    }
    else {
      if (notification.data.type != "newMessage") {
        PushNotification.localNotification({
          bigText: notification.message,
          title: notification.title,
          message: notification.message,
          vibrate: true,
          vibration: 700,
          playSound: true,
          soundName: 'sound.mp3',
          sound: 'sound.mp3',
          priority: "max",
          importance: "max",
          visibility: "public",
          userInfo: notification.data
        })
      }
      else {
        if (!global.isChatOpened) {
          PushNotification.localNotification({
            bigText: notification.message,
            title: notification.title,
            message: notification.message,
            vibrate: true,
            vibration: 700,
            playSound: true,
            soundName: 'sound.mp3',
            sound: 'sound.mp3',
            priority: "max",
            importance: "max",
            visibility: "public",
            userInfo: notification.data
          })
        }
      }

    }
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  // Android only: GCM or FCM Sender ID
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  senderID: '97893421916',
  popInitialNotification: true,
  requestPermissions: true
})

class RootScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
    that = this
  }
  componentDidMount() {



  }

  render() {
    return (
      <View style={Helpers.fill}>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
