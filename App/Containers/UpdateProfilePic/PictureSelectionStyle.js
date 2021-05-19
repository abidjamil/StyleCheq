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
    marginTop: 50,
  }, privacyView: {
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    flexDirection: 'row'
  },
  privacyBtn: {
    fontFamily: 'Poppins-Light', paddingRight: 5, fontSize: 14, paddingLeft: 5
  },
  fieldsLine: {
    flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8
  },
  almostDoneBtn: {
    marginStart: '10%',
    marginEnd: '10%',
    fontSize: 14,
    paddingStart: 60,
    paddingEnd: 60,
    width: '80%',
    color: Colors.white,
    backgroundColor: Colors.primaryColorLogin,
    fontFamily: 'Poppins-Medium',
    borderRadius: 15,
    overflow: 'hidden',
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
  headerContainer: {
    padding: '5%',
    marginTop: 20,
    flexDirection: 'row',
  },
  backArrow: {
    width: 25,
    margin: '5%',
    height: 18,
  },
  heading: {
    fontSize: 18,
    width: '100%',
    fontFamily: 'Poppins-Bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 50,

  },
  PictureSelectorView: {
    borderRadius: 20,
    borderColor: Colors.black,
    borderWidth: 1,
    width: 200,
    height: 200,
    backgroundColor: Colors.white,
    opacity: 0.6,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  UserImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  PlusSymbol: {
    fontSize: 92,
    textAlign: 'center',
    opacity: 0.5,
    color: 'black'
  }
})
