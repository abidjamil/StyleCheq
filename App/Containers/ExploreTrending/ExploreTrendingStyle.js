import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default StyleSheet.create({

  privacyView: {
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    flexDirection:'row'
  },



  fieldsLine:
  {
    flexDirection:'row',justifyContent:'space-between',paddingVertical:8
  },
  firstBox:{
   top:20,paddingVertical:10
  },
  headerImage:
 {height: 150, width: 340, borderRadius: 10, resizeMode: 'cover', marginLeft: 10},
 searchStyle:{
  top: 15, flexDirection: 'row', width: '90%', height:'7%',shadowColor: "#000", shadowOpacity: 1, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 10, fontSize: 20, backgroundColor: '#ECEFF4', borderRadius: 20, marginLeft: 15
 },

 searchInput:{ width: 250, height: 50, paddingHorizontal: 3, fontSize: 20, fontFamily: 'Poppins-Regular'},
 
 trendingView:
 {top: 10, justifyContent: 'space-between', paddingHorizontal: 20, flexDirection: 'row'},

 trendingView1:
 {top: 30, justifyContent: 'space-between', paddingHorizontal: 20, flexDirection: 'row'},
 
 textStyle:{color: '#000', borderWidth: 1, borderRadius: 10, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5}
,
imageStylee:{
  top: 40, height: 140, width: 100, borderRadius: 10,  marginLeft: 10
}
})
