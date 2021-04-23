import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({

  privacyView: {
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    flexDirection: 'row'
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
  privacyBtn:
  {
    fontFamily: 'Poppins-Light', paddingRight: 5, fontSize: 14, paddingLeft: 5
  },
  trisaStyle: {
    fontSize: 50, color: '#fff', fontWeight: 'bold', fontFamily: 'Poppins-Regular', textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
  },

  trisaemail: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1, color: 'red', paddingHorizontal: 20
  },

  textView: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 30, marginTop: 10
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
  }

})