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
    paddingRight: 10,fontWeight:'bold',fontSize:18,paddingLeft:8
  }
  ,
  nameStyle:
  {
    alignSelf:'center',top:25
  }
 ,
 emailStyle:
 {fontSize:15,paddingHorizontal:25,color:'grey'}
,

  touchableOpacityStyle1:
  {
     backgroundColor:'#fff',borderRadius: 40, width: 300, height: 50,  marginTop: 50,padding:20,alignSelf:'center',paddingTop:13,shadowColor: "grey", shadowOpacity: 1, shadowRadius: 2, shadowOffset: { height: 1, width: 1 } ,elevation:20    
  }
  ,touchableOpacityStyle:
  {
     backgroundColor:'#0F7EB5',borderRadius: 40, width: 300, height: 50,marginTop:10,padding:30,alignSelf:'center',paddingTop:13,shadowColor: "grey", shadowOpacity: 1, shadowRadius: 2, shadowOffset: { height: 1, width: 1 } ,elevation:20    
  }
 ,
 toucableTextStyle:{
  fontSize: 20, textAlign: 'center', color: '#000', height: 30, fontWeight: 'bold'
 },

 toucableTextStyle1:{
  fontSize: 20, textAlign: 'center', color: '#fff', height: 30, fontWeight: 'bold'
 }

})
