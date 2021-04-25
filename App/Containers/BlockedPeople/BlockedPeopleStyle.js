import { StyleSheet, Platform } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({

  searchStyle: {
    top: 15, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '90%', height: 40, shadowColor: "#000", shadowOpacity: 1, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 10, fontSize: 20, backgroundColor: '#ECEFF4', borderRadius: 20, marginLeft: 15
  },
  searchInput: { width: '75%', height: '160%', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontFamily: 'Poppins-Regular' },
  privacyBtn:
  {
    fontFamily: 'Poppins-Light', paddingRight: 5, fontSize: 14, paddingLeft: 5
  },
  fieldsLine:
  {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 5,
    textAlign: 'right',
    fontFamily: 'Poppins-Bold',
  },
  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
    marginBottom: 25,
  },
  loginHeaderText: {
    ...Fonts.h5,
    fontFamily: 'Poppins-Bold',
    marginStart: '5%',
    marginEnd: '10%',
    marginTop: 10,
  },
  skipHeaderText: {
    fontSize: 14,
    fontFamily: 'Poppins',
    marginStart: '10%',
    marginEnd: '10%',
    marginTop: Platform.OS === 'ios' ? 50 : 20,

  },
  rowName: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    marginStart: 5,
    marginTop: 7,
  },
  rowUsername: {
    fontSize: 10,
    fontFamily: 'Poppins',
    marginStart: 5,
    marginTop: 0,
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
    marginStart: 10,
    marginEnd: 10,
    fontSize: 14,
    backgroundColor: 'red',
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
    fontFamily: 'Poppins-Bold',
    marginStart: '12%',
    marginEnd: '12%',
    marginTop: 1,
    marginTop: 50,
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
  }

})
