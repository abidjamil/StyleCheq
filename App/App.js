import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
const { store, persistor } = createStore()
import PushNotification from 'react-native-push-notification'
import PushNotificationIOS from "@react-native-community/push-notification-ios";

var that;
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
    that = this
  }
  UNSAFE_componentWillMount() {
  }
  render() {
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    )
  }
}


export default App
