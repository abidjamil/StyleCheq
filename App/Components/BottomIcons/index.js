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
        <View style={{ justifyContent: 'space-around', backgroundColor: 'fff', paddingHorizontal: 23, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => NavigationService.navigate('ExploreTrending')}>
            <Image
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
              source={Images.searchIcon} />
          </TouchableOpacity>

          <View >
            <TouchableOpacity
              onPress={() => NavigationService.navigate('NotificationScreen')}>
              <Image
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
                source={Images.bellIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => NavigationService.navigate('UploadPost')}
            style={{ width: 51, height: 51, marginTop: '-10%', borderColor: '#0000000', justifyContent: 'center', backgroundColor: "#000", alignItems: 'center', borderRadius: 40, borderWidth: 1 }}>
            <Image
              resizeMode="contain"
              style={{ width: 50, height: 50, zIndex: 1, marginTop: -5 }}
              source={Images.addIcon} />
          </TouchableOpacity>


          <Image
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
            source={Images.bottomLike} />

          <TouchableOpacity
            onPress={() => NavigationService.navigate('NewsFeedScreen')}>
            <Image
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
              source={Images.homeIcon} />
          </TouchableOpacity>
        </View>


      </View >
    )
  }


}