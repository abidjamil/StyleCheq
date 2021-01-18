import React from 'react'
import { Platform, TouchableOpacity, Text, View, Button, Image, Dimensions, FlatList, SectionList } from 'react-native'
import Style from './NotificationStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
import HTML from "react-native-render-html";
import NavigationService from 'App/Services/NavigationService'

const windowHeight = Dimensions.get("screen").height
const windowWidth = Dimensions.get("screen").width

const B = (props) => {
  <Text style={{ fontWeight: 'bold' }}>
    Hello
  </Text>
}

export default class Splash1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      starCount: 3.5,
      notificationData: [
        {
          id: "1",
          picture: Images.two,
          text: 'Official and  <strong>2 Others rate </strong> your photo',
          time: '2 sec ago'

        },
        {
          id: "2",
          picture: Images.one,
          text: 'Official and  <strong>2 Others rate </strong> your photo',
          time: '2 sec ago'
        },
        {
          id: "3",
          picture: Images.three,
          text: 'Official and  <strong>2 Others rate </strong> your photo',
          time: '2 sec ago'
        },
        {
          id: "4",
          picture: Images.two,
          text: 'Official and <strong>2 Others rate your</strong> photo',
          time: '2 sec ago'
        }
        ,

        {
          id: "5",
          picture: Images.two,
          text: `Official and <strong>2 Others rate your</strong> photo`,
          time: '2 sec ago'

        },
        {
          id: "6",
          picture: Images.one,
          text: 'Official and 2 Others rate your photo',
          time: '2 sec ago'
        },
        {
          id: "7",
          picture: Images.three,
          text: 'Official and 2 Others rate your photo',
          time: '2 sec ago'
        },
        {
          id: "8",
          picture: Images.two,
          text: 'Official and 2 Others rate your photo',
          time: '2 sec ago'
        }

      ],
    }

  }



  render() {
    let A = [
      { id: '1', value: 'Afghanistan' },
      { id: '2', value: 'Afghanistan' },
      { id: '3', value: 'Afghanistan' },
    ];
    let B = [
      { id: '4', value: 'Benin' },
      { id: '5', value: 'Bhutan' },
      { id: '6', value: 'Bosnia' },
      { id: '7', value: 'Botswana' },
      { id: '8', value: 'Brazil' },
      { id: '9', value: 'Brunei' },
      { id: '10', value: 'Bulgaria' },
    ];
    let C = [
      { id: '11', value: 'Cambodia' },
      { id: '12', value: 'Cameroon' },
      { id: '13', value: 'Canada' },
      { id: '14', value: 'Cabo' },
    ];

    return (
      <View style={{ height: '100%', top: Platform.OS === 'ios' ? 50 : 25 }}>


        <View style={Style.firstBox, { paddingHorizontal: 20 }}>
          <View style={Style.fieldsLine}>

            <TouchableOpacity
              onPress={() => NavigationService.goBack()}
              style={{ flexDirection: 'row' }}>
              <BACK name="left" size={23}></BACK>
              <Text style={Style.privacyBtn}>back</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
              <Text style={Style.privacyBtn}>Notification</Text>
            </View>
          </View>
        </View>




        <View style={{ paddingBottom: 30 }}>

          <SectionList
            sections={[
              { title: 'Today', data: this.state.notificationData },
              { title: 'Yesterday', data: this.state.notificationData },
              { title: 'This Month', data: this.state.notificationData },
            ]}
            renderItem={({ item }) =>
              <View style={{ paddingTop: 10 }}>
                <View style={{
                  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '95%'
                }}>
                  < Image style={Style.image1Style}
                    source={item.picture} />

                  <View style={{ marginLeft: '-3%', marginTop: 5 }}>
                    <HTML source={{ html: item.text }} />
                    <Text style={{ marginTop: -3, color: 'grey' }}>{item.time}</Text>
                  </View>
                  <Image style={Style.image2Style}
                    source={item.picture} />
                </View>



              </View>
            }
            keyExtractor={(item, index) => index}
            renderSectionHeader={({ section }) => <Text style={{ marginTop: 20, marginStart: 20, fontFamily: 'Poppins-Bold', fontSize: 16 }}>{section.title}</Text>}

          />

























          <FlatList

            contentContainerStyle={{ paddingVertical: 3, }}
            numColumns={1}
            keyExtractor={(item) => item.id}

            data={this.state.data}

            renderItem={({ item }) => {

              return (
                <View>
                  <View style={{ flexDirection: 'row' }}>
                    <Image style={Style.image1Style}
                      source={item.picture} />
                    <Text style={Style.notifiyText}>{item.text}</Text>
                    <Image style={Style.image2Style}
                      source={item.picture} />
                  </View>
                  <View style={{ height: 10, paddingBottom: 20 }}>
                    <Text style={{ marginLeft: 50, marginTop: -10, color: 'grey' }}>{item.time}</Text>
                  </View>
                  <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    <Image style={{ height: 40, width: 40, borderRadius: 20, marginLeft: 5 }}
                      source={item.picture} />
                    <Text style={Style.notifiyText1}>{item.text}</Text>

                    <Image style={Style.image2Style}
                      source={item.picture} />
                  </View>


                  <View style={{ height: 10, paddingBottom: 20 }}>
                    <Text style={{ marginLeft: 50, marginTop: -10, color: 'grey' }}>{item.time}</Text>
                  </View>
                  <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    <Image style={Style.image2Style}
                      source={item.picture} />
                    <Text style={Style.notifiyText1}>{item.text}</Text>
                    <View style={Style.followBtnStyle}>
                      <Text style={{ color: '#fff', paddingTop: 10 }}>Follow</Text>
                    </View>
                  </View>
                  <View style={{ height: 10, paddingBottom: 20 }}>
                    <Text style={{ marginLeft: 50, marginTop: -10, color: 'grey' }}>{item.time}</Text>
                  </View>


                </View>

              );
            }

            }

          />
        </View>





      </View>
    )
  }


}
