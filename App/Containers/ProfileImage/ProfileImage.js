import React from 'react'
import { Platform, Text, View, Button, Image, TextInput, ImageBackground } from 'react-native'
import Style from './ProfileImageStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import Message from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/Entypo';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

export default class Splash1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  render() {
    return (
      <View style={{ height: '100%', top: 50 }}>

        <View style={Style.firstBox, { paddingHorizontal: 20 }}>
          <View style={Style.fieldsLine}>
           
              <Message name="mail" size={30}/>
            <Text style={{fontSize:20,fontFamily: 'Poppins-Regular',}}>Profile</Text>
            <User name="user" size={30}/>
          </View>
        </View>

        <ImageBackground
          style={[Helpers.fullSize]}
          source={Images.background}>
          <OrientationLoadingOverlay
            visible={this.state.loading}
            color={Colors.black}
            indicatorSize="large"
            messageFontSize={12}
            message=""
          />

      <View style={{alignSelf:'center',marginTop:10}}>
        <Text style={Style.trisaStyle}>Trisa Snow</Text>
        </View>
        <Text style={Style.trisaemail}>@trisasnow_256</Text>

        <View style={Style.textView}>
          <Text style={Style.postText}>POSTS</Text>
          <Text style={Style.postText}>Followers</Text>
        </View>

        <View style={Style.textView}>
          <Text style={Style.postText}>512</Text>
          <Text style={Style.postText}>273k</Text>
        </View>

        <View style={Style.textView}>
          <Text style={Style.postText}>Location</Text>
          <Text style={Style.postText}>Following</Text>
        </View>

        <View style={Style.textView}>
          <Text style={Style.postText}>LONDON</Text>
          <Text style={Style.postText}>512</Text>
        </View>


        <View style={Style.lastView}>
          <Text style={Style.lastViewText}>MODEL,ACTRESS,INFLUENCERS YOU {'\n'}   CAN HAVE ANYTHING IN LIFE {'\n'}  LIFE IF YOU DRESS FOR IT </Text>
        </View>
</ImageBackground>
      
      </View>
    )
  }


}
