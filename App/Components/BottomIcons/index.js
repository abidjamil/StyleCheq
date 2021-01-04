import React from 'react'
import { Platform, Text, View, Button, Image, ScrollView, FlatList, ImageBackground } from 'react-native'
import Style from './BottomIconStyle'

import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'

import Search from 'react-native-vector-icons/AntDesign';
import Plus from 'react-native-vector-icons/EvilIcons';
import Bell from 'react-native-vector-icons/FontAwesome';
import Hand from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from 'react-native-vector-icons/Entypo';


export default class Splash1 extends React.Component {
 
  render() {
    return (
      <View style={{ height: '100%', top: 15 }}>
       
           

            <View style={{ backgroundColor: '#fff', paddingHorizontal: 15, marginTop: 83, padding: 10, flexDirection: 'row' }}>
              <Search name="search1" size={35} color='#A0E4E8' />
              <Bell name="bell" size={35} color='#A0E4E8' style={{ marginLeft: 40 }} />


              <Image style={{ width: '15%', height: 50, marginTop: '-10%', backgroundColor: '#000', borderRadius: 30, marginLeft: 30, }}
                source={Images.addIcon} />
              <Hand name="hand-pointing-up" size={40} color='#A0E4E8' style={{ marginLeft: 25, }} />
              <Home name="home" size={40} color='#A0E4E8' style={{ marginLeft: 30, }} />

            </View>


                </View>
    )
  }


}
