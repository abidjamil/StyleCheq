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
  privacyBtn:
  {
    fontFamily: 'Poppins-Light', paddingRight: 5, fontSize: 14, paddingLeft: 5
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
  inputTextStyle: {
    height: '50%', width: '95%', backgroundColor: '#fff', shadowColor: "#000", shadowOpacity: 1, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 10, borderRadius: 10, paddingHorizontal: 15, textAlignVertical: "top"
  }
  ,
  editBioStyle: { fontWeight: 'bold', paddingBottom: 20 },
  bioViewStyle: { paddingHorizontal: 20, top: 20, marginLeft: 20 }
})
