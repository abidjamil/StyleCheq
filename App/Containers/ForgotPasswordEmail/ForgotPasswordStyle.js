import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({

  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
    marginBottom: 25,
  },
  loginHeaderText: {
    ...Fonts.h5,
    fontFamily: 'Poppins-Bold',
    marginStart: '10%',
    marginEnd: '10%',
    marginTop: 20,
  },
  fieldsLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginStart: '10%',
    marginEnd: '10%',
    marginTop: 30,
  },

  inputField: {
    paddingTop: 10,
    paddingBottom: 10,
    marginStart: '8%',
    marginEnd: '8%',
    fontSize: 14,
    backgroundColor: Colors.white,
    fontFamily: 'Poppins-Regular',
    borderRadius: 30,
    paddingStart: 20,
  },

  almostDoneBtn: {
    marginStart: '10%',
    marginEnd: '10%',
    fontSize: 14,
    paddingStart: 60,
    paddingEnd: 60,
    width: '80%',
    overflow: "hidden",
    color: Colors.white,
    backgroundColor: Colors.primaryColorLogin,
    fontFamily: 'Poppins-Medium',
    borderRadius: 17,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
  },

  fieldsError: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginStart: '12%',
    marginEnd: '12%',
    marginTop: 1,
    textAlign: "center",
    color: Colors.error
  },
  backArrow: {
    width: 25,
    height: 18,
    marginTop: Platform.OS === 'ios' ? 50 : 20,
    marginStart: 20,
  },
  heading: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: 'black',
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? 50 : 20,
    transform: [
      { translateX: -45 },
    ]
  },

})
