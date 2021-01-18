import { StyleSheet, Platform } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({

  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
    marginBottom: 25,
  },
  loginHeaderText: {
    marginTop: Platform.OS === 'ios' ? 50 : 20,
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center'
  },
  skipHeaderText: {
    fontSize: 14,
    fontFamily: 'Poppins',
    marginStart: '10%',
    marginEnd: '10%',
    marginTop: Platform.OS === 'ios' ? 50 : 20,

  },
  rowName: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    marginStart: 5,
    color: Colors.white,
    marginTop: 1,
  },
  rowUsername: {
    fontSize: 10,
    fontFamily: 'Poppins-Light',
    marginStart: 5,
    color: Colors.white,
    marginTop: -4,
  },
  rowStatusFollow: {
    fontSize: 10,
    fontFamily: 'Poppins',
    marginStart: 5,
    marginTop: 15,
    backgroundColor: Colors.primaryColorLogin,
    color: Colors.white,
    padding: 5,
    paddingStart: 5,
    paddingEnd: 5,
    borderRadius: 12,
    overflow: 'hidden',
    textAlign: 'center'
  },
  rowStatusFollowing: {
    fontSize: 10,
    fontFamily: 'Poppins',
    marginStart: 5,
    marginTop: 15,
    backgroundColor: Colors.white,
    color: Colors.primaryColorLogin,
    borderColor: Colors.primaryColorLogin,
    borderWidth: 0.5,
    padding: 3,
    paddingStart: 5,
    paddingEnd: 5,
    borderRadius: 12,
    overflow: 'hidden',
    textAlign: 'center'
  },
  fieldsLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginStart: '10%',
    marginEnd: '10%',
    marginTop: 30,
  },

  inputField: {

    flex: 5,
    marginStart: 10,
    marginEnd: 10,
    fontSize: 12,
    backgroundColor: Colors.white,
    fontFamily: 'Poppins-Regular',
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
    marginBottom: 10,
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
  searchBar: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 18,
    borderColor: '#8a8a8a',
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: 10,
    paddingTop: Platform.OS === 'ios' ? 5 : 0,
    paddingBottom: Platform.OS === 'ios' ? 5 : 0,
    paddingEnd: 20
  },
  rowName: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    marginStart: 2,
    marginTop: 7,
  },

  commentsHeader: {
    fontSize: 12,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Poppins',
    marginTop: 30,
    marginBottom: 20,
  },
  rowUsername: {
    fontSize: 10,
    fontFamily: 'Poppins',
    marginStart: 2,
    marginTop: 0,
  },
  footer: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.black,
    position: 'absolute', //Here is the trick
    bottom: 0,
    zIndex: 10,
  },

  leftSide: {
    width: 100,
    height: '50%',
    maxHeight: 400,
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'absolute', //Here is the trick
    left: 20,
    bottom: Platform.OS === 'ios' ? 150 : 100,
    zIndex: 10,
  },

  rightSide: {
    width: 60,
    height: '40%',
    maxHeight: 300,
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'absolute', //Here is the trick
    right: 20,
    bottom: Platform.OS === 'ios' ? 150 : 100,
    zIndex: 10,
  },

  topRightSide: {
    width: 60,
    height: '10%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    position: 'absolute', //Here is the trick
    right: 10,
    top: 0,
    zIndex: 10,
  },
  footerImage: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  ratingText: {
    fontSize: 9,
    fontFamily: 'Poppins-Regular',
    textAlign: "left",
    marginStart: 5,
    color: Colors.white
  },
  privacyView: {
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    flexDirection: 'row'
  },



  fieldsLine:
  {
    flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8

  },
  firstBox: {
    top: 20, paddingVertical: 10
  },

  ImageStyle: {
    height: 150, width: 150, borderRadius: 60, alignSelf: 'center'
  },
  privacyBtn:
  {
    fontFamily: 'Poppins-Regular', paddingRight: 5, fontSize: 16, paddingLeft: 5
  },
  elevationLow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
})
