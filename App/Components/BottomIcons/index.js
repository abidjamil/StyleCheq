import React from 'react'
import { TouchableOpacity, Platform, Text, View, Button, Image, ScrollView, FlatList, ImageBackground } from 'react-native'

import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import Search from 'react-native-vector-icons/AntDesign';
import Plus from 'react-native-vector-icons/EvilIcons';
import Bell from 'react-native-vector-icons/FontAwesome';
import Hand from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from 'react-native-vector-icons/Entypo';
import NavigationService from 'App/Services/NavigationService'

export default class Splash1 extends React.Component {

  render() {
    return (
      <View style={{}}>
        <View style={{ justifyContent: 'space-around', backgroundColor: '#f5f5f5', paddingHorizontal: 23, padding: 10, flexDirection: 'row', alignItems: 'center' }}>

          <Search
            name="search1"
            size={35}
            color={Colors.primaryColorLogin} />

          <TouchableOpacity
            onPress={() => NavigationService.navigate('Notificaton')}>
            <Bell
              name="bell"
              size={35}
              color={Colors.primaryColorLogin} />
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => NavigationService.navigate('UploadPost')}
            style={{ width: '15%', height: 55, marginTop: '-15%', backgroundColor: '#000', borderRadius: 35, borderWidth: 2 }}>
            <Image style={{ width: '100%', height: '100%', }}
              source={Images.addIcon} />
          </TouchableOpacity>


          <Hand
            name="hand-pointing-up"
            size={40}
            color={Colors.primaryColorLogin}
            style={{ elevation: 3 }} />

          <Home
            name="home"
            size={40}
            color={Colors.primaryColorLogin} />

        </View>


      </View >
    )
  }


}