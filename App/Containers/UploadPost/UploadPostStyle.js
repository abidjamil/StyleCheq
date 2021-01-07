import { StyleSheet, Dimensions } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
const { width, height } = Dimensions.get("window");
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
export default StyleSheet.create({

  privacyView: {
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    flexDirection: 'row'
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
    flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8
  },
  privacyBtn:
  {
    paddingRight: 10, fontWeight: 'bold', fontSize: 18, paddingLeft: 8
  },
  postStyle: { fontFamily: 'Poppins', marginLeft: 20, top: 10 }
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
    width: '85%',
    top: 20,
    height: '20%',
    backgroundColor: Colors.white,
    opacity: 0.6,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    shadowOffset: { height: 1, width: 1 },
    marginTop: 10,
  },
  UserImage: {
    width: 300,
    height: 200,
    alignSelf: 'stretch',
  }
  , PlusSymbol: {
    fontSize: 92,
    textAlign: 'center',
    opacity: 0.5,
    color: 'black'
  },

  container: {
    height: 510,
    paddingTop: 40,
    borderRadius: 10,
    margin: 10,
  },
  suggestionsRowContainer: {
    flexDirection: 'row',
  },
  userAvatarBox: {
    width: 35,
    paddingTop: 2
  },
  userIconBox: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#54c19c'
  },
  usernameInitials: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 14
  },
  userDetailsBox: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 15
  },
  displayNameText: {
    fontSize: 13,
    fontWeight: '500'
  },
  usernameText: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.6)'
  }
})