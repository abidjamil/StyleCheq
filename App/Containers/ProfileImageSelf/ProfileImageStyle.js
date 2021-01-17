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
    fontFamily: 'Poppins-Regular', paddingRight: 5, fontSize: 16, paddingLeft: 5
  },
  trisaStyle: { fontSize: 50, color: '#fff', fontWeight: 'bold', fontFamily: 'Poppins-Regular' },

  trisaemail: { color: 'red', paddingHorizontal: 20 },

  textView: { justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 30, marginTop: 20 },


  textView1: { justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 30, marginTop: 2 },


  postText: { fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' },

  lastView: { marginTop: '20%', paddingHorizontal: 10 },

  lastViewText: { fontSize: 25, fontFamily: 'Poppins-Italic', color: '#fff', },
  modelText: {
    paddingVertical: 10, fontFamily: 'Poppins-Regular'
  },
  ModelView: {
    alignSelf: 'center', marginTop: '50%',
    width: 300, backgroundColor: '#fff', borderRadius: 10
  }

})