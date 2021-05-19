import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

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

  searchInput: { alignSelf: 'center', marginTop: 5, width: '80%', height: '160%', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontFamily: 'Poppins-Regular' },

  trendingView:
    { marginTop: 50, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row' },

  trendingView1:
    { marginTop: 10, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row' },

  textStyle: { color: '#000', borderWidth: 1, borderRadius: 10, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }
  ,
  imageStylee: {
    height: 140, width: 100, borderRadius: 10, marginLeft: 10
  },
  rowStatusFollow: {
    fontSize: 10,
    fontFamily: 'Poppins',
    marginStart: 5,
    marginTop: 15,
    backgroundColor: Colors.primaryColorLogin,
    color: Colors.white,
    padding: 5,
    paddingStart: 5,
    paddingEnd: 5,
    borderRadius: 12,
    overflow: 'hidden',
    textAlign: 'center'
  },
  rowStatusFollowing: {
    fontSize: 10,
    fontFamily: 'Poppins',
    marginStart: 5,
    marginTop: 15,
    backgroundColor: Colors.white,
    color: Colors.primaryColorLogin,
    borderColor: Colors.primaryColorLogin,
    borderWidth: 0.5,
    padding: 3,
    paddingStart: 5,
    paddingEnd: 5,
    borderRadius: 12,
    overflow: 'hidden',
    textAlign: 'center'
  },
  description: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginStart: 5,
    color: Colors.white,
    marginStart: '5%',
    marginEnd: '5%',
    width: '90%',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
  },
  username: {
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
    marginStart: 5,
    color: "#edc307",
  },
  name: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    marginStart: 5,
    color: Colors.white,
  },
  hashtag: {
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
    marginStart: 5,
    color: "#cf0eaf",
  },
  rowUsername: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    marginStart: 5,
    color: Colors.white,
    marginTop: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
  },
  commentUsername: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    marginStart: 5,
    color: Colors.black,
    marginTop: 5,
  },
  commentRowTime: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    marginStart: 5,
    color: Colors.black,
    marginTop: 5,

  },
  rowTime: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    marginStart: 5,
    color: Colors.white,
    marginTop: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
  },
  rowStatusFollow: {
    fontSize: 9,
    fontFamily: 'Poppins',
    marginStart: 5,
    backgroundColor: Colors.primaryColorLogin,
    color: Colors.white,
    padding: 5,
    paddingStart: 10,
    marginTop: 5,
    paddingEnd: 10,
    borderRadius: 12,
    overflow: 'hidden',
    textAlign: 'center'
  },
  rowStatusFollowing: {
    fontSize: 9,
    fontFamily: 'Poppins',
    marginStart: 5,
    marginTop: 5,
    backgroundColor: Colors.white,
    color: Colors.primaryColorLogin,
    borderColor: Colors.primaryColorLogin,
    borderWidth: 0.5,
    padding: 5,
    paddingStart: 10,
    paddingEnd: 10,
    borderRadius: 12,
    overflow: 'hidden',
    textAlign: 'center'
  },
})
