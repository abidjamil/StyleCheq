import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './ExploreTrendingStyle'
import Search from 'react-native-vector-icons/EvilIcons';
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import SCAN from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';


export default class Splash1 extends React.Component {

  render() {
    return (
      <ScrollView>
      <View style={{ height: '100%', top: 30 }}>

        <View style={Style.firstBox, { paddingHorizontal: 20 }}>
          <View style={Style.fieldsLine}>
            <View style={{ flexDirection: 'row' }}>
              <BACK name="left" size={23}></BACK>
              <Text style={Style.privacyBtn}>back</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={Style.privacyBtn}>Explore</Text>
            </View>
          </View>
        </View>

        <View>
          <Image style={ Style.headerImage}
            source={Images.two} />
        </View>

        <View style={Style.searchStyle}>
          <Search name="search" size={40} color='gray' style={{ top: 5 }} />
          <TextInput
            style={Style.searchInput}
            placeholder='Search' placeholderTextColor='gray'
          />
          <SCAN name="scan1" size={30} color='gray' style={{ top: 5 }} />


        </View>

        <View style={Style.trendingView}>
          <Text style={{color:'grey'}}>Trending#</Text>
          <Text style={Style.textStyle}>5 billion</Text>
        </View>


        <ScrollView horizontal>
          <View style={{ flexDirection: 'row', paddingHorizontal: 10,paddingBottom:50 }}>
            <Image style={Style.imageStylee}
              source={Images.two} />
            <Image style={Style.imageStylee}
              source={Images.two} />
               <Image style={Style.imageStylee}
              source={Images.two} />
            <Image style={Style.imageStylee}
              source={Images.two} />
               <Image style={Style.imageStylee}
              source={Images.two} />
            <Image style={Style.imageStylee}
              source={Images.two} />
          </View>

          
        </ScrollView>


        <View style={Style.trendingView}>
          <Text style={{color:'grey'}}>Trending#</Text>
          <Text style={Style.textStyle}>5 billion</Text>
        </View>

  <ScrollView horizontal>
          <View style={{ flexDirection: 'row', paddingHorizontal: 10 ,paddingBottom:40}}>
            <Image style={Style.imageStylee}
              source={Images.two} />
            <Image style={Style.imageStylee}
              source={Images.two} />
               <Image style={Style.imageStylee}
              source={Images.two} />
            <Image style={Style.imageStylee}
              source={Images.two} />
               <Image style={Style.imageStylee}
              source={Images.two} />
            <Image style={Style.imageStylee}
              source={Images.two} />
          </View>

          
        </ScrollView>




      </View>
      </ScrollView>
    )
  }


}
