import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default StyleSheet.create({

  privacyView: {
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    flexDirection: 'row'
  },

  privacyBtn:
  {
    fontFamily: 'Poppins-Light', paddingRight: 5, fontSize: 14, paddingLeft: 5
  },

  fieldsLine:
  {
    flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8
  },
  firstBox: {
    top: 20, paddingVertical: 10
  },
  headerImage:
  {
    height: 150, width: '90%', borderRadius: 10, marginLeft: '5%', marginRight: '5%'
  },
  searchStyle: {
    top: 15, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '90%', height: 40, shadowColor: "#000", shadowOpacity: 1, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 10, fontSize: 20, backgroundColor: '#ECEFF4', borderRadius: 20, marginLeft: 15
  },

  searchInput: { width: '75%', height: '160%', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontFamily: 'Poppins-Regular' },

  trendingView:
    { marginTop: 50, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row' },

  trendingView1:
    { marginTop: 10, justifyContent: 'space-between', paddingHorizontal: 20, flexDirection: 'row' },

  textStyle: { color: '#000', borderWidth: 1, borderRadius: 10, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }
  ,
  imageStylee: {
    height: 140, width: 100, borderRadius: 10, marginLeft: 10
  }
})
