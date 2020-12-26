import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({

  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
    marginBottom: 25,
  },
  tapHereText: {
    fontSize: 50,
    color: Colors.black,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    opacity: 0.3
  },
  Welcome: {
    fontSize: 20,
    color: Colors.black,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginTop: 40,
  },
  UsernameText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    marginTop: 10,
  },

})
