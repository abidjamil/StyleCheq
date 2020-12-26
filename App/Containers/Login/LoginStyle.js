import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({

  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
    marginBottom: 25,
  },
  result: {
    ...Fonts.input,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  text: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  loginHeaderText: {
    ...Fonts.h5,
    fontFamily: 'Poppins-Bold',
    marginStart: '10%',
    marginEnd: '10%',
    marginTop: 40,
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

  forgotPasswordLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginStart: '10%',
    marginTop: 10,
  },
  forgotPasswordLabelClickHere: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    marginEnd: '10%',
    marginTop: 10,
    marginStart: 5,
    color: Colors.primaryColorLogin
  },

  loginBtn: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    backgroundColor: Colors.primaryColorLogin,
    color: Colors.white,
    paddingTop: 5,
    paddingBottom: 5,
    paddingStart: 20,
    paddingEnd: 20,
    overflow: 'hidden',
    borderRadius: 17,
    marginTop: 30,
  },
  newToStyleLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginTop: 50,
  },
  newToStyleLabelSecondary: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    marginStart: 5,
    marginTop: 50,
  },

  signUpBtn: {
    marginStart: '10%',
    marginEnd: '10%',
    fontSize: 18,
    width: '80%',
    color: Colors.primaryColorLogin,
    backgroundColor: Colors.white,
    fontFamily: 'Poppins-Bold',
    borderRadius: 23,
    overflow: 'hidden',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  fbSignUpBtn: {
    marginStart: '10%',
    marginEnd: '10%',
    fontSize: 18,
    width: '80%',
    color: Colors.white,
    backgroundColor: Colors.primaryColorLogin,
    fontFamily: 'Poppins-Bold',
    borderRadius: 23,
    overflow: 'hidden',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
  },
  googleSignUpBtn: {
    marginStart: '10%',
    marginEnd: '10%',
    fontSize: 18,
    width: '80%',
    overflow: 'hidden',
    color: Colors.white,
    backgroundColor: Colors.googleLoginButton,
    fontFamily: 'Poppins-Bold',
    borderRadius: 23,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
  },

})
