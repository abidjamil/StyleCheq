import React from 'react'
import { Platform, TouchableOpacity, Text, View, Button, Image, Dimensions, FlatList, SectionList } from 'react-native'
import Style from './NotificationStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
import HTML from "react-native-render-html";
import NavigationService from 'App/Services/NavigationService'
import { NetworkActions } from '../../NetworkActions'
import { connect } from 'react-redux'
import moment from "moment";
const windowHeight = Dimensions.get("screen").height
import { Avatar, Accessory, Icon, Input } from 'react-native-elements';
const windowWidth = Dimensions.get("screen").width

const B = (props) => {
  <Text style={{ fontWeight: 'bold' }}>
    Hello
  </Text>
}
var that;
class NotificationsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      starCount: 3.5,
      todayNotificationData: [],
      thisMonthNotificationData: [],
      yesterdayNotificationData: [],
    }
    that = this;

  }

  UNSAFE_componentWillMount() {
    this.getNotifications()
  }

  getNotifications() {
    const today = moment()
    const yesterday = moment().subtract(1, 'day');
    const previous = moment().subtract(2, 'day');
    NetworkActions.GetNotifications(that.props.auth.data.token).then
      (function (response) {

        if (response.status === 200) {
          const todayData = response.data.filter((data) =>
            moment(today).utc().isSame(moment(data.createdAt).utc(), 'day')
          )

          const yesterDayData = response.data.filter((data) =>
            moment(yesterday).utc().isSame(moment(data.createdAt).utc(), 'day')
          )

          const previousData = response.data.filter((data) =>
            moment(data.createdAt).utc().isBefore(moment(yesterday).utc(), 'day')
          )
          that.setState({
            todayNotificationData: todayData,
            yesterdayNotificationData: yesterDayData,
            thisMonthNotificationData: previousData
          })

        }
      })
      .catch(function (error) {
        alert(JSON.stringify(error))
      })
  }

  render() {


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

        <View style={{ paddingBottom: 80 }}>

          <SectionList
            sections={[
              { title: 'Today', data: this.state.todayNotificationData },
              { title: 'Yesterday', data: this.state.yesterdayNotificationData },
              { title: 'Older', data: this.state.thisMonthNotificationData },
            ]}
            renderItem={({ item }) =>
              <View style={{ paddingTop: 10, marginStart: 5, marginEnd: 5 }}>
                <View style={{
                  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '95%'
                }}>

                  <Avatar
                    style={{ ...Style.image1Style, }}
                    size="medium"
                    rounded
                    source={{ uri: item.profilePicture }}

                  />


                  <View style={{ marginLeft: '3%', marginTop: 5, alignSelf: 'flex-start', flex: 4 }}>
                    <HTML source={{ html: item.body }}
                      contentWidth={500}
                    />
                    <Text style={{ marginTop: -3, color: 'grey', fontSize: 9, fontFamily: 'Poppins-Regular' }}>{moment(item.createdAt).fromNow()}</Text>
                  </View>
                  <Image style={{ ...Style.image2Style, }}

                    source={{ uri: item.profilePicture }} />
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
const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  auth: state.authTypeReducer.authType,
})

const mapDispatchToProps = (dispatch) => ({

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsScreen)