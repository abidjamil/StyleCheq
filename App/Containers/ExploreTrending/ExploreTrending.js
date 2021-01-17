import React from 'react'
import { Platform, Text, View, Button, Image, FlatList, TextInput, Dimensions } from 'react-native'
import Style from './ExploreTrendingStyle'
import Search from 'react-native-vector-icons/EvilIcons';
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
const windowHeight=Dimensions.get("screen").height

import SCAN from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';


export default class Splash1 extends React.Component {
constructor(props)
{
  super(props);
  this.state = {
  data: [
    {
      id: "1",
      picture: Images.two,
     
    },
    {
      id: "2",
      picture: Images.one,
     
    },
    {
      id: "3",
      picture: Images.three,
    
    },
    {
      id: "4",
      picture: Images.two,
    
    }
  ]
}}
  render() {
    return (
    
      <View style={{ height: windowHeight, top: 30,paddingBottom:80 }}>
  <ScrollView>
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
          <SCAN name="scan1" size={25} color='gray' style={{ top: 10 }} />


        </View>

        <View style={Style.trendingView1}>
          <Text style={{color:'grey'}}>Trending#</Text>
          <Text style={Style.textStyle}>5 billion</Text>
        </View>


       
<View style={{marginTop:-5}}>
        <FlatList 
           horizontal={true}
          contentContainerStyle={{ paddingVertical: 5, }}
          keyExtractor={(item) => item.id}
          
          data={this.state.data}
         
          renderItem={({ item }) => {
           
            return (
              <View style={{ flexDirection: 'row',paddingBottom:40 }}>
              <Image style={Style.imageStylee}
                source={item.picture} />
              <Image style={Style.imageStylee}
                source={item.picture} />
                 <Image style={Style.imageStylee}
                source={item.picture} />
              <Image style={Style.imageStylee}
                source={item.picture} />
                 <Image style={Style.imageStylee}
                source={item.picture} />
              <Image style={Style.imageStylee}
                source={item.picture} />
            </View>




              );
            }

            }

          />
       

          
     


        <View style={Style.trendingView}>
          <Text style={{color:'grey'}}>Trending#</Text>
          <Text style={Style.textStyle}>5 billion</Text>
        </View>
<View style={{marginTop:-20}}>
        <FlatList 
           horizontal={true}
          keyExtractor={(item) => item.id}
          
          data={this.state.data}
         
          renderItem={({ item }) => {
           
            return (
              <View style={{ flexDirection: 'row',paddingBottom:40 }}>
              <Image style={Style.imageStylee}
                source={item.picture} />
              <Image style={Style.imageStylee}
                source={item.picture} />
                 <Image style={Style.imageStylee}
                source={item.picture} />
              <Image style={Style.imageStylee}
                source={item.picture} />
                 <Image style={Style.imageStylee}
                source={item.picture} />
              <Image style={Style.imageStylee}
                source={item.picture} />
            </View>




              );
            }

            }

          />

</View>




      
           </View>

           </ScrollView>

      </View>
     
    )
  }


}
