import React from 'react'
import { Text, View, Animated, Image } from 'react-native'
import { connect } from 'react-redux'
import styles from './SplashScreenStyle'
import { Helpers, Images } from 'App/Theme'
import logo from '../../Assets/Images/logo_style.png'
import ImageLoader from '../../Components/AnimatedImageLoader'
import NavigationService from 'App/Services/NavigationService'
class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      if (!this.props.auth) {
        NavigationService.navigateAndReset('LoginScreen')
      }
      else {
        NavigationService.navigateAndReset('NewsFeedScreen')
      }

    }, 3000)
  }
  render() {
    console.log("Splash Loaded");
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          <ImageLoader
            source={Images.logo} />
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
  auth: () => dispatch({ type: 'AUTH_TYPE', payload: that.state.AuthData }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)