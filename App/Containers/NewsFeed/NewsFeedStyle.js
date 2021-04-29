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
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  commentUserName: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    marginStart: 5,
    color: Colors.white,
    marginTop: 1,
  },
  rowUsername: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    marginStart: 5,
    color: Colors.white,
    marginTop: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
  },
  commentUsername: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    marginStart: 5,
    color: Colors.black,
    marginTop: 5,
  },
  commentRowTime: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    marginStart: 5,
    color: Colors.black,
    marginTop: 5,

  },
  rowTime: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    marginStart: 5,
    color: Colors.white,
    marginTop: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
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
    height: '70%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'absolute', //Here is the trick
    left: -10,
    top: Platform.OS === 'ios' ? 120 : 90,
    zIndex: 10,
  },

  rightSide: {
    width: 100,
    height: '50%',
    maxHeight: 300,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    position: 'absolute', //Here is the trick
    right: 0,
    bottom: Platform.OS === 'ios' ? 170 : 120,
    zIndex: 10,
  },

  topRightSide: {
    width: 50,
    height: '10%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    position: 'absolute', //Here is the trick
    right: 10,
    top: 5,
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
    fontFamily: 'Poppins-Bold',
    textAlign: "left",
    marginStart: 5,
    color: Colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
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
    fontFamily: 'Poppins-Regular', paddingRight: 5, fontSize: 14, paddingLeft: 5
  },
  description: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginStart: 5,
    color: Colors.white,
    bottom: Platform.OS === 'ios' ? 120 : 60,
    marginStart: '5%',
    marginEnd: '5%',
    width: '90%',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
  },
  username: {
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
    marginStart: 5,
    color: "#edc307",
  },
  name: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    marginStart: 5,
    color: Colors.white,
  },
  hashtag: {
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
    marginStart: 5,
    color: "#cf0eaf",
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
