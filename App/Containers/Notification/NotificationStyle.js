import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({

  privacyView: {
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    flexDirection: 'row'
  },

  privacyBtn:
  {
    fontFamily: 'Poppins-Regular', paddingRight: 5, fontSize: 16, paddingLeft: 5
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
    paddingRight: 10, fontSize: 14, paddingLeft: 8, fontFamily: 'Poppins-Light',
  },
  todayStyle: { marginLeft: 25, fontFamily: 'Poppins-Regular', marginTop: 10 }
  ,
  image1Style: { height: 40, width: 40, borderRadius: 20, marginLeft: 5, marginTop: 5 },
  textStyle: { fontFamily: 'Poppins-Regular', marginLeft: 10, marginTop: 12 },
  followBtnStyle: { borderRadius: 1, borderWidth: 1, backgroundColor: '#0D80AE', borderRadius: 10, paddingHorizontal: 5, height: 37, width: 53 },
  notifiyText: { fontFamily: 'Poppins-Regular', marginLeft: 10, marginTop: 10, fontSize: 14, },
  notifiyText1: { fontFamily: 'Poppins-Regular', marginLeft: 5, marginTop: 10 },
  image2Style: { height: 40, width: 40, borderRadius: 5, marginLeft: 5 },
  text2SecStyle: { marginLeft: 40, color: 'grey' },
  rowStatusFollow: {
    fontSize: 10,
    fontFamily: 'Poppins',
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

})
