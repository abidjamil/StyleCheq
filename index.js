/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App/App'
import { name as appName } from './app.json'

const firebaseBackgroundMessage = () => {
}
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => firebaseBackgroundMessage);
AppRegistry.registerComponent(appName, () => App)
