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
    fontFamily: 'Poppins-Regular', paddingRight: 5, fontSize: 14, paddingLeft: 5
  },

  fieldsLine:
  {
    flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8
  },
  firstBox: {
    top: 20, paddingVertical: 10
  },

  ImageStyle: {
    height: 150, width: 150, borderRadius: 60, alignSelf: 'center'

  },

  trisaStyle: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1, fontSize: 50, color: '#fff', fontWeight: 'bold', fontFamily: 'Poppins-Regular'
  },

  trisaemail: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1, color: 'red', paddingHorizontal: 20
  },

  textView: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 30, marginTop: 20
  },


  textView1: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 30, marginTop: 2
  },


  postText: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1, fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular'
  },

  lastView: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1, bottom: Platform.OS === 'ios' ? 30 : 90, paddingHorizontal: 10
  },

  lastViewText: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1, fontSize: 25, fontFamily: 'Poppins-Italic', color: '#fff',
  },
  modelText: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
    paddingVertical: 10, fontFamily: 'Poppins-Regular'
  },
  ModelView: {
    alignSelf: 'center', marginTop: '50%',
    width: 300, backgroundColor: '#fff', borderRadius: 10
  },
  rowStatusFollow: {
    fontSize: 14,
    fontFamily: 'Poppins',
    backgroundColor: Colors.primaryColorLogin,
    color: Colors.white,
    padding: 5,
    paddingStart: 15,
    paddingEnd: 15,
    borderRadius: 5,
    overflow: 'hidden',
    textAlign: 'center'
  },
  rowStatusFollowing: {
    fontSize: 14,
    fontFamily: 'Poppins',
    backgroundColor: Colors.white,
    color: Colors.primaryColorLogin,
    borderColor: Colors.primaryColorLogin,
    borderWidth: 0.5,
    padding: 3,
    paddingStart: 15,
    paddingEnd: 15,
    borderRadius: 5,
    overflow: 'hidden',
    textAlign: 'center',
  },
  ratingText: {
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold',
    marginStart: 5,
    color: Colors.white,
    marginTop: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  rowTime: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    marginStart: 5,
    color: Colors.white,
    marginTop: -3,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
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
})