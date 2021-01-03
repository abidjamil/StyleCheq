import { StyleSheet,Dimensions } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
const { width, height } = Dimensions.get("window");
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
export default StyleSheet.create({

  privacyView: {
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    flexDirection:'row'
  },

  sendBtn: {
    
    width: 70,
    height: 40,
    backgroundColor: "#0F7CB2",
    borderRadius: 6,
    marginLeft: 5,
    justifyContent: "center",
    textAlign: "center"
  },

  fieldsLine:
  {
    flexDirection:'row',justifyContent:'space-between',paddingVertical:8
  },
  postStyle:{fontFamily: 'Poppins',marginLeft:20,top:10}
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
PictureSelectorView: {
  borderRadius: 10,
  borderColor: Colors.black,
  width: '85%',top:20,
  height: '18%',
  backgroundColor: Colors.white,
  opacity: 0.6,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',shadowColor: "#000", 
  shadowOpacity: 1, shadowRadius: 2,elevation:10,
   shadowOffset: { height: 1, width: 1 },
  marginTop: 10,
}, 
UserImage: {
  width: 300,
  height: 200,
  alignSelf: 'stretch',
}
,PlusSymbol: {
  fontSize: 92,
  textAlign: 'center',
  opacity: 0.5,
  color: 'black'
},
mention: {
  fontSize: 16,
  fontWeight: "400",
  backgroundColor: "rgba(36, 77, 201, 0.05)",
  color: "#244dc9"
}
,
messageList: {
  paddingVertical: 50
},
messageText: {},
main: {
  flex: 1,
  backgroundColor: "#fff",
  height: screenHeight,
},
container: {
  height: screenHeight,

  alignItems: "center",
  justifyContent: "space-between"
},
header: {
  // height: 200,
},
heading: {
  fontSize: 24,
  fontWeight: "bold"
  // color: 'green'
},
sub: {
  color: "rgba(0, 0, 0, 0.4)",
  fontSize: 12,
  textAlign: "center"
},
messageList: {
  paddingVertical: 10
},
messageText: {},

sendBtnText: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#fff",
  textAlign: "center"
},
footer: {

  height: 150,marginTop:50,
  width: screenWidth,
 
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 100,
  padding: 15,
  
},
})
