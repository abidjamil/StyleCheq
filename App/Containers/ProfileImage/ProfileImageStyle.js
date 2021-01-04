import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
    paddingRight: 10, fontWeight: 'bold', fontSize: 18, paddingLeft: 8
  }
  ,
  trisaStyle: { fontSize: 50, color: '#fff', fontWeight: 'bold', fontFamily: 'Poppins-Regular' },

  trisaemail: { color: 'red', paddingHorizontal: 20 },

  textView: { justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 30, marginTop: 20 },


  textView1: { justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 30, marginTop: 2 },


  postText: { fontSize: 20, color: '#fff', fontWeight: 'bold', fontFamily: 'Poppins-Regular' },

  lastView: { marginTop: 15, paddingHorizontal: 10 },

  lastViewText: { color: '#fff', fontSize: 20, },
  postText1:{fontSize: 20, color: 'green', fontWeight: 'bold', fontFamily: 'Poppins-Regular'}
})
