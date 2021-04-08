import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({

  privacyView: {
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    flexDirection: 'row'
  },

  privacyBtn:
  {
    fontFamily: 'Poppins-Light', paddingRight: 5, fontSize: 16, paddingLeft: 5
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
  fieldsLine:
  {
    flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8,
  },
  firstBox: {
    top: 20, paddingHorizontal: 20, paddingVertical: 10
  },

  fieldsStyle: {
    height: 25,
    width: 130,
    paddingHorizontal: 5,

  },
  pushNotificationBtn:
  {
    paddingRight: 10, fontWeight: 'bold', fontSize: 14, paddingLeft: 8
  }
  ,
  paddingText:
  {
    paddingLeft: 10, fontSize: 18
  }





})
