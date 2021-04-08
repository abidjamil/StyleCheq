import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({

    privacyView: {
        justifyContent: 'space-between',
        paddingHorizontal: 22,
        flexDirection: 'row'
    },



    fieldsLine:
    {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8, paddingStart: 10, paddingEnd: 10,
    },
    firstBox: {
        top: 20, paddingVertical: 10
    },
    privacyBtn:
    {
        fontFamily: 'Poppins-Light', fontSize: 14
    },
    userName: {
        fontFamily: 'Poppins-Bold', fontSize: 16,
    },
    heading:
    {
        fontFamily: 'Poppins-Bold', fontSize: 20, paddingStart: '10%', marginTop: 10, paddingEnd: 10
    },
    messageText:
    {
        fontFamily: 'Poppins-Regular', fontSize: 14, color: Colors.black, overflow: 'hidden',
    },
    messageTime:
    {
        fontFamily: 'Poppins-Regular', paddingTop: 15, fontSize: 9, color: '#7d7d7c', marginEnd: 5, overflow: 'hidden',
    },

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
    inputTextStyle: {
        height: '50%', width: '95%', backgroundColor: '#fff', shadowColor: "#000", shadowOpacity: 1, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 10, borderRadius: 10, paddingHorizontal: 15, textAlignVertical: "top"
    }
    ,
    editBioStyle: { fontWeight: 'bold', paddingBottom: 20 },
    bioViewStyle: { paddingHorizontal: 20, top: 20, marginLeft: 20 }
})
