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


  privacyBtn:
  {
    paddingRight: 10, fontSize: 18, paddingLeft: 8, fontFamily: 'Poppins-Regular',
  }
  ,

  mainImageView: { flexDirection: 'row', paddingHorizontal: 20, top: 30 },
  mainImage: { height: 120, width: 120, borderRadius: 50 },
  mainView: { flexDirection: 'row', paddingHorizontal: 20 },
  imageOne: { height: 80, width: 60, borderRadius: 20, marginRight: 15 },
  textStyle: { paddingTop: 20, height: 80, width: 50, marginTop: 50, marginLeft: 15, alignItems: 'center', backgroundColor: '#0E8EBF', borderRadius: 10 }
  ,
  checkStyle: { color: 'grey', marginTop: 10, paddingHorizontal: 20, fontFamily: 'Poppins-Regular' }
  ,
  notificationStyle: { backgroundColor: '#EBEBEB', flexDirection: 'row', borderRadius: 20, height: 40, marginLeft: 20, width: 300, justifyContent: 'space-between', paddingHorizontal: 25, marginTop: 20, shadowColor: "#000", shadowOpacity: 1, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 10, }
  ,
  muteStyle: {
    paddingBottom: 10, fontFamily: 'Poppins-Regular',
  },
  blockStyle: { paddingBottom: 8, color: '#0F7EB5', fontFamily: 'Poppins-Regular' },
  deleteStyle: { paddingBottom: 8, color: 'red', fontFamily: 'Poppins-Regular' }
})
