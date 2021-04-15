import React from 'react'
import { Text, View, Animated, Image } from 'react-native'
import { connect } from 'react-redux'
import styles from './SplashScreenStyle'
import { Helpers, Images } from 'App/Theme'
import logo from '../../Assets/Images/logo_style.png'
import ImageLoader from '../../Components/AnimatedImageLoader'
import NavigationService from 'App/Services/NavigationService'
var that;
class SplashScreen extends React.Component {
  constructor(props) {
    super(props)
    that = this;
  }
  componentDidMount() {
    setTimeout(() => {
      if (!that.props.authReducer) {
        NavigationService.navigateAndReset('LoginScreen')
      }
      else {
        NavigationService.navigateAndReset('NewsFeedScreen')
      }

    }, 5000)
  }
  render() {

    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          <ImageLoader
            style={{
              height: 400,
              width: 400,
            }}
            source={Images.logo} />
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  authReducer: state.authTypeReducer.authType
})
const mapDispatchToProps = (dispatch) => ({
  auth: () => dispatch({ type: 'AUTH_TYPE', payload: that.state.AuthData }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)