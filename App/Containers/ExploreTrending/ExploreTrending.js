import React from 'react'
import { Platform, ScrollView, TouchableOpacity, Text, View, Button, Image, FlatList, TextInput, Dimensions } from 'react-native'
import Style from './ExploreTrendingStyle'
import Search from 'react-native-vector-icons/EvilIcons';
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import NavigationService from 'App/Services/NavigationService'
import SCAN from 'react-native-vector-icons/AntDesign';

export default class Splash1 extends React.Component {
  constructor(props) {
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
          picture: Images.four,

        }
      ]
    }
  }
  render() {
    return (

      <View style={{ top: Platform.OS === 'ios' ? 50 : 15 }}>
        <ScrollView
          nestedScrollEnabled>
          <View>
            <View style={Style.firstBox, { paddingHorizontal: 20 }}>
              <View style={Style.fieldsLine}>
                <TouchableOpacity
                  onPress={() => NavigationService.goBack()}
                  style={{ flexDirection: 'row' }}>
                  <BACK name="left" size={23}></BACK>
                  <Text style={Style.privacyBtn}>back</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={Style.privacyBtn}>Explore</Text>
                </View>
              </View>
            </View>

            <View>
              <Image style={Style.headerImage}
                resizeMode="cover"
                source={Images.two} />
            </View>

            <View style={Style.searchStyle}>
              <Search name="search" size={30} color='gray' style={{}} />
              <TextInput
                style={Style.searchInput}
                placeholder='Search' placeholderTextColor='gray'
              />
              <SCAN name="scan1" size={25} color='gray' style={{}} />


            </View>

            <View style={Style.trendingView}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>#LahorePics</Text>
              <Text style={Style.textStyle}>5 billion</Text>
            </View>



            <View style={{ marginTop: 5 }}>
              <FlatList
                horizontal={true}
                contentContainerStyle={{ paddingVertical: 5, }}
                keyExtractor={(item) => item.id}

                data={this.state.data}

                renderItem={({ item }) => {

                  return (
                    <View style={{ flexDirection: 'row', paddingBottom: 5 }}>

                      <Image style={Style.imageStylee}
                        source={item.picture} />
                    </View>




                  );
                }} />






              <View style={Style.trendingView1}>
                <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>#ReactNative</Text>
                <Text style={Style.textStyle}>5 billion</Text>
              </View>
              <View style={{ marginTop: 5 }}>


                <FlatList
                  horizontal={true}
                  keyExtractor={(item) => item.id}

                  data={this.state.data}

                  renderItem={({ item }) => {

                    return (
                      <View style={{ flexDirection: 'row' }}>
                        <Image style={Style.imageStylee}
                          source={item.picture} />


                      </View>




                    );
                  }

                  }

                />

              </View>
            </View>


            <View style={{ ...Style.trendingView1 }}>
              <Text style={{ fontFamily: 'Poppins-Regular', color: 'black' }}>#ComputerScience</Text>
              <Text style={Style.textStyle}>5 billion</Text>
            </View>

            <View style={{ marginTop: 5 }}>
              <FlatList
                horizontal={true}
                keyExtractor={(item) => item.id}
                data={this.state.data}
                renderItem={({ item }) => {
                  return (
                    <View style={{ flexDirection: 'row', paddingBottom: 50 }}>
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
