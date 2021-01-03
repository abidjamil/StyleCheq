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
 
  ImageStyle: {
    height:150,width:150,borderRadius:60,alignSelf:'center'
   
  },
  privacyBtn:
  {
    paddingRight: 10,fontSize:18,paddingLeft:8,fontFamily: 'Poppins-Regular',
  }
  ,
  todayStyle:{marginLeft: 25, fontFamily: 'Poppins-Regular', marginTop: 10}
,
image1Style:{ height: 40, width: 40, borderRadius: 20, marginLeft: 5},
textStyle:{fontFamily: 'Poppins-Regular', marginLeft: 10, marginTop: 10},
followBtnStyle:{ borderRadius: 1, borderWidth: 1, backgroundColor: '#0D80AE', borderRadius: 10, paddingHorizontal: 5,height:40,width:60},

notifiyText:{fontFamily: 'Poppins-Regular', marginLeft: 10, marginTop: 10},
notifiyText1:{fontFamily: 'Poppins-Regular', marginLeft: 5, marginTop: 10},
image2Style:{ height: 40, width: 40, borderRadius: 5, marginLeft: 5},
text2SecStyle:{ marginLeft: 40, color: 'grey'}

})