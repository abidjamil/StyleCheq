import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  acctView: {
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    flexDirection: 'row'
  },
  privacyBtn:
  {
    fontFamily: 'Poppins-Light', paddingRight: 5, fontSize: 14, paddingLeft: 5
  },
  fieldsLine:
  {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 5,
    textAlign: 'right',
    fontFamily: 'Poppins-Bold',
  },
  firstBox: {
    top: 20,
    paddingHorizontal: 30
  },

  fieldsStyle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  boxView: {
    height: 30,
    width: '90%', marginLeft: 20,
    top: 60,
    backgroundColor: '#F6F6F6'
  }
  ,

  secondBox: {
    top: 100, paddingHorizontal: 30
  },

  label: {
    fontFamily: 'Poppins-Bold',
    paddingVertical: 1
  }

})