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
      pageNumber: 1,
      rowsPerPage: 100,
      loading: false,
      starCount: 3.5,
      todayNotificationData: [],
      thisMonthNotificationData: [],
      yesterdayNotificationData: [],
      emptyNotification: [
        {
          body: "No Notification"
        }
      ]
    }
    // const todayData = props.data.filter((data) =>
    //   moment(today).utc().isSame(moment(data.createdAt).utc(), 'day')
    // )

    // const yesterDayData = response.data.filter((data) =>
    //   moment(yesterday).utc().isSame(moment(data.createdAt).utc(), 'day')
    // )

    // const previousData = response.data.filter((data) =>
    //   moment(data.createdAt).utc().isBefore(moment(yesterday).utc(), 'day')
    // )
    // that.setState({
    //   todayNotificationData: todayData,
    //   yesterdayNotificationData: yesterDayData,
    //   thisMonthNotificationData: previousData
    // })
    that = this;

  }

  UNSAFE_componentWillMount() {
    this.getNotifications()
  }
  followPeople(item) {
    if (item.isFollowedByYou === 0) {
      const request = {
        followTo: item.byUserId,
      }
      item.followStatus = "Following"

      NetworkActions.FollowUser(request, that.props.auth.data.token).then
        (function (response) {
          if (response.status === 200) {
            item.followStatus = "Following"
          }
        })
        .catch(function (error) {
          alert(JSON.stringify(error))
        })
      this.setState({
        refresh: !this.state.refresh
      })
    }
  }
  getNotifications() {
    const request = {
      pageNumber: this.state.pageNumber,
      rowsPerPage: this.state.rowsPerPage
    }
    const today = moment()
    const yesterday = moment().subtract(1, 'day');
    const previous = moment().subtract(2, 'day');
    NetworkActions.GetNotifications(request, that.props.auth.data.token).then
      (function (response) {

        if (response.status === 200) {
          that.setState({ data: response })
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
          that.props.notificationData()
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
              { title: 'Today', data: this.state.todayNotificationData.length > 0 ? this.state.todayNotificationData.reverse() : this.state.emptyNotification },
              { title: 'Yesterday', data: this.state.yesterdayNotificationData.length > 0 ? this.state.yesterdayNotificationData.reverse() : this.state.emptyNotification },
              { title: 'Older', data: this.state.thisMonthNotificationData.length > 0 ? this.state.thisMonthNotificationData.reverse() : this.state.emptyNotification },
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
                  {item.notificationType == "followedBy" ? <TouchableOpacity
                    onPress={() => this.followPeople(item)}>
                    <Text style={item.isFollowedByYou == 1 ? Style.rowStatusFollowing : Style.rowStatusFollow}>
                      {item.isFollowedByYou === 1 ? "Following" : "Follow"}
                    </Text>
                  </TouchableOpacity> :
                    <Image style={{ ...Style.image2Style, }}
                      source={{ uri: item.postPicture }} />
                  }
                </View>

              </View>
            }
            keyExtractor={(item, index) => index}
            renderSectionHeader={({ section }) => <Text style={{ marginTop: 20, marginStart: 20, fontFamily: 'Poppins-Bold', fontSize: 16 }}>{section.title}</Text>}

          />

        </View>
      </View>
    )
  }


}
const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  auth: state.authTypeReducer.authType,
  notification: state.notificationReducer.notification
})

const mapDispatchToProps = (dispatch) => ({
  notificationData: () => dispatch({ type: 'Notification', payload: that.state.data }),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsScreen)