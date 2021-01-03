import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({

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
    paddingRight: 10, fontWeight: 'bold', fontSize: 18, paddingLeft: 8, fontFamily: 'Poppins'
  }

  ,
  searchInput: { width: 250, height: 45, paddingHorizontal: 16, fontSize: 14, fontFamily: 'Poppins-Regular', },

  searchStyle: {
    top: 15, flexDirection: 'row', width: '100%', height: 40, shadowColor: "#000", shadowOpacity: 1, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 10, fontSize: 20, backgroundColor: '#ECEFF4', borderRadius: 20,
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
    marginTop: 50,
  },

})
