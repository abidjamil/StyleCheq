import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({

  privacyView: {
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    flexDirection:'row'
  },

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

  sliderStyle:{marginHorizontal: 24, marginTop: 20, height: 20, width: 100,
   
  },

  container: {
    flex: 1,
    alignItems: "center",paddingVertical:30, 
  },
  thumb: {
  width: 20,
  height: 20,
  borderColor: 'white',
  borderWidth: 1,
  borderRadius: 10,
  shadowColor: 'black',
  shadowOffset: {
      width: 0,
      height: 2
  },
  shadowRadius: 2,
  shadowOpacity: 0.35,
  },

})
