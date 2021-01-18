import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

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


  privacyBtn:
  {
    fontFamily: 'Poppins-Light', paddingRight: 5, fontSize: 16, paddingLeft: 5
  },
  tagText: {
    marginLeft: 30, top: 30, fontFamily: 'Poppins',
  },
  rowWise: { justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }
  ,
  bagToEnd: { justifyContent: 'space-between', flexDirection: 'row' },
  textArrange: { paddingRight: 10, paddingLeft: 10 },
  itemView: { flexDirection: 'row', marginTop: 35, },
  itemView1: { flexDirection: 'row', marginTop: 35, paddingHorizontal: 30 },
  itemView2: { flexDirection: 'row', marginTop: 35, paddingHorizontal: 30, }
})
