import React from 'react'
import { Platform, Text, View, Button, Image, ScrollView, TextInput, ImageBackground } from 'react-native'
import Style from './NotificationStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';

const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
export default class Splash1 extends React.Component {

  render() {
    return (
      <View style={{ height: '100%', top: 50, paddingHorizontal: 3 }}>

        <View style={Style.firstBox, { paddingHorizontal: 20 }}>
          <View style={Style.fieldsLine}>
            <View style={{ flexDirection: 'row' }}>
              <BACK name="left" size={23}></BACK>
              <Text style={Style.privacyBtn}>Notification</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <Text style={Style.todayStyle}> today</Text>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <Image style={Style.image1Style}
              source={Images.two} />
            <Text style={Style.notifiyText}><B>Official </B>and <B>2 Others </B>rate your photo</Text>
            <Image style={Style.image2Style}
              source={Images.two} />
          </View>
          <Text style={{ marginLeft: 40, color: 'grey' }}>2 sec ago</Text>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <Image style={{ height: 40, width: 40, borderRadius: 20, marginLeft: 5 }}
              source={Images.two} />
            <Text style={Style.notifiyText1}><B>Officialbaba </B>and <B>2 Others </B>comment <View></View></Text>

            <Image style={Style.image2Style}
              source={Images.two} />
          </View>
          <Text style={{ marginLeft: 40, color: 'grey' }}>2 sec ago</Text>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <Image style={Style.image2Style}
              source={Images.two} />
            <Text style={Style.notifiyText1}><B>Officialbaba </B>Started Following you <View></View></Text>
            <View style={Style.followBtnStyle}>
              <Text style={{ color: '#fff', paddingTop: 10 }}>Follow</Text>
            </View>
          </View>
          <Text style={{ marginLeft: 40, color: 'grey' }}>2 sec ago</Text>




          <Text style={Style.todayStyle}> yesterday</Text>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <Image style={Style.image1Style}
              source={Images.two} />
            <Text style={Style.textStyle}><B>Official </B>and <B>2 Others </B>rate your photo</Text>
            <Image style={Style.image2Style}
              source={Images.two} />
          </View>

          <Text style={Style.text2SecStyle}>2 sec ago</Text>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <Image style={Style.image1Style}
              source={Images.two} />
            <Text style={Style.textStyle}><B>Officialbaba </B>and <B>2 Others </B>comment <View></View></Text>

            <Image style={Style.image2Style}
              source={Images.two} />
          </View>
          <Text style={Style.text2SecStyle}>2 sec ago</Text>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <Image style={Style.image1Style}
              source={Images.two} />
            <Text style={Style.textStyle}><B>Officialbaba </B>Started Following you <View></View></Text>
            <View style={Style.followBtnStyle}>
              <Text style={{ color: '#fff', paddingTop: 10 }}>Follow</Text>
            </View>
          </View>

          <Text style={Style.text2SecStyle}>2 sec ago</Text>


          <Text style={Style.todayStyle}>last month</Text>

          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <Image style={Style.image1Style}
              source={Images.two} />
            <Text style={Style.textStyle}><B>Official </B>and <B>2 Others </B>rate your photo</Text>
            <Image style={Style.image2Style}
              source={Images.two} />
          </View>
          <Text style={Style.text2SecStyle}>2 sec ago</Text>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <Image style={{ height: 40, width: 40, borderRadius: 20, marginLeft: 5 }}
              source={Images.two} />
            <Text style={Style.textStyle}><B>Officialbaba </B>and <B>2 Others </B>comment <View></View></Text>

            <Image style={{ height: 40, width: 40, borderRadius: 5, marginLeft: 10 }}
              source={Images.two} />
          </View>
          <Text style={Style.text2SecStyle}>2 sec ago</Text>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <Image style={Style.image2Style}
              source={Images.two} />
            <Text style={Style.textStyle}><B>Officialbaba </B>Started Following you <View></View></Text>
            <View style={Style.followBtnStyle}>
              <Text style={{ color: '#fff', paddingTop: 10 }}>Follow</Text>
            </View>
          </View>
          <Text style={Style.text2SecStyle}>2 sec ago</Text>
        </ScrollView>
      </View>
    )
  }


}
