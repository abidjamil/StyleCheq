import React from 'react'
import { Platform, Text, View, Button, Image, Dimensions, FlatList, SectionList } from 'react-native'
import Style from './NotificationStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
const windowHeight = Dimensions.get("screen").height
const windowWidth = Dimensions.get("screen").width
const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
export default class Splash1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      starCount: 3.5,
      data: [
        {
          id: "1",
          picture: Images.two,
          text: 'Official and 2 Others rate your photo',
          time:'2 sec ago'

        },
        {
          id: "2",
          picture: Images.one,
          text: 'Official and 2 Others rate your photo',
          time:'2 sec ago'
        },
        {
          id: "3",
          picture: Images.three,
          text: 'Official and 2 Others rate your photo',
          time:'2 sec ago'
        },
        {
          id: "4",
          picture: Images.two,
          text: 'Official and 2 Others rate your photo',
          time:'2 sec ago'
        }
        ,

        {
          id: "5",
          picture: Images.two,
          text: 'Official and 2 Others rate your photo',
          time:'2 sec ago'

        },
        {
          id: "6",
          picture: Images.one,
          text: 'Official and 2 Others rate your photo',
          time:'2 sec ago'
        },
        {
          id: "7",
          picture: Images.three,
          text: 'Official and 2 Others rate your photo',
          time:'2 sec ago'
        },
        {
          id: "8",
          picture: Images.two,
          text: 'Official and 2 Others rate your photo',
          time:'2 sec ago'
        }

      ],
    }

  }



  render() {
    return (
      <View style={{ height: windowHeight, width: windowWidth, top: 30, paddingHorizontal: 3, flex: 1, paddingBottom: 40 }}>


        <View style={Style.firstBox, { paddingHorizontal: 10 }}>
          <View style={Style.fieldsLine}>
            <View style={{ flexDirection: 'row' }}>
              <BACK name="left" size={23}></BACK>
              <Text style={Style.privacyBtn}>Notification</Text>
            </View>
          </View>
        </View>




        <View style={{paddingBottom:30}}>

        <SectionList  
                    sections={[  
                        {title: 'A', data: [  Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                          Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                          Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                          Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                          Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                        
                        
                        
                        ]},  
                        {title: 'B', data: [Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                          Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                          Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                          Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                          Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',]},  



                        {title: 'C', data: [Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                          Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                          Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                          Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',
                          Images.two,
                          'Official and 2 Others rate your photo','2 sec ago',]},  
                    ]}  

                    renderItem={({item}) => 
                    <View >
                    <View style={{ flexDirection: 'row' }}>
                  <Image style={Style.image1Style}
                    source={item} />
                  <Text style={Style.notifiyText}>{item}</Text>
                  <Image style={Style.image2Style}
                    source={item} />
                </View>
                <View style={{ height: 10, paddingBottom: 20 }}>
                  <Text style={{ marginLeft: 50, marginTop: -10, color: 'grey' }}>{item}</Text>
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                  <Image style={{ height: 40, width: 40, borderRadius: 20, marginLeft: 5 }}
                    source={item} />
                  <Text style={Style.notifiyText1}>{item}</Text>
  
                  <Image style={Style.image2Style}
                    source={item} />
                </View>
  
  
                <View style={{ height: 10, paddingBottom: 20 }}>
                  <Text style={{ marginLeft: 50, marginTop: -10, color: 'grey' }}>{item}</Text>
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                  <Image style={Style.image2Style}
                    source={item} />
                  <Text style={Style.notifiyText1}>{item}</Text>
                  <View style={Style.followBtnStyle}>
                    <Text style={{ color: '#fff', paddingTop: 10 }}>Follow</Text>
                  </View>
                </View>
                <View style={{ height: 10, paddingBottom: 20 }}>
                  <Text style={{ marginLeft: 50, marginTop: -10, color: 'grey' }}>{item}</Text>
                </View>
  
                    
                  </View>
  }  
                    keyExtractor={(item, index) => index} 
                     renderSectionHeader={({section}) => <Text>{section.title}</Text>}
                   
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
