import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({

  boldText: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    textAlign: "justify",
    marginTop: 10,
  },
  normalText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    marginTop: 20,
    textAlign: "justify"

  },
  AgreeBtn: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    backgroundColor: Colors.primaryColorLogin,
    color: Colors.white,
    padding: 5,
    paddingStart: 30,
    paddingEnd: 30,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 20,
    marginEnd: 10,
  },
  disAgreeBtn: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: Colors.black,
    borderColor: Colors.blac,
    padding: 5,
    paddingStart: 30,
    paddingEnd: 30,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 10,
    borderWidth: 1,
    marginBottom: 20,
    marginStart: 10,
  },
  headerContainer: {
    padding: '5%',
    marginTop: 20,
  },
  backArrow: {
    width: 25,
    margin: '5%',
    height: 18,
    marginTop: 30,
  },
  heading: {
    fontSize: 24,
    width: '100%',
    fontFamily: 'Poppins-Bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 50,
  },
})
