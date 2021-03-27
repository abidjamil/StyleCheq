import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({

  privacyView: {
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    flexDirection: 'row',
    fontFamily: 'Poppins'
  },



  fieldsLine:
  {
    flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, fontFamily: 'Poppins'
  },
  firstBox: {
    top: 20, paddingVertical: 10, fontFamily: 'Poppins', paddingHorizontal: 20
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
  privacyBtn:
  {
    fontFamily: 'Poppins-Light', paddingRight: 5, fontSize: 14, paddingLeft: 5
  },
  tagText: {
    marginLeft: 30, top: 30, fontFamily: 'Poppins-Bold', fontSize: 18,
  },
  rowWise: { justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }
  ,
  bagToEnd: { justifyContent: 'space-between', flexDirection: 'row' },
  textArrange: { paddingRight: 10, paddingLeft: 10 },
  itemView: { flex: 2, flexDirection: 'row', marginTop: 35, justifyContent: 'space-evenly' },
  itemView1: { flex: 2, flexDirection: 'row', marginTop: 35, justifyContent: 'space-evenly' },
  itemView2: { flexDirection: 'row', marginTop: 35, paddingHorizontal: 30, }
})
