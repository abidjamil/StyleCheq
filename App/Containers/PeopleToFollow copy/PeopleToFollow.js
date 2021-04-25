import React from 'react'
import { Platform, TextInput, Text, View, FlatList, Button, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'
import Style from './PeopleToFollowStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from './node_modules/App/Theme'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import NavigationService from './node_modules/App/Services/NavigationService'
import { Avatar, Accessory, Icon, Input } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import SCAN from 'react-native-vector-icons/AntDesign';
import Search from 'react-native-vector-icons/EvilIcons';
var that;
class SignupUserScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      error: '',
      refresh: true,
      isLoading: false,
      data: []
    }

    that = this;
  }

  UNSAFE_componentWillMount() {
    that.setState({ isLoading: true })
    that.getDataFromServer()
    that.setState({ isLoading: false })
  }
  handleLetsExploreAction() {
    NavigationService.navigateAndReset('NewsFeedScreen')
  }

  getDataFromServer = () => {
    NetworkActions.GetPeopleToFollow(that.props.auth.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        console.log(response.data)
        if (response != null) {
          if (response.status == 200) {
            console.log(response.data)
            that.setState({ data: response.data })
          }
          else if (response.status == 406) {
            that.setState({ error: response.message })
          }
          else {
            alert(response.message)
          }
        }

      })
      .catch(function (error) {
        alert(error)
        that.setState({ isLoading: false })
      })
  }
  onSearch() {
    if (this.state.searchQuery.length == 0) {
      that.setState({ isLoading: true })
      that.getDataFromServer()
      that.setState({ isLoading: false })
    }
    else {
      const request = {
        query: this.state.searchQuery
      }
      console.log(request)
      NetworkActions.GetPeopleToFollowSearch(request, that.props.auth.data.token).then
        (function (response) {
          if (response.status === 200) {
            console.log(response.data)
            that.setState({ data: response.data })
          }
        })
        .catch(function (error) {
          alert(JSON.stringify(error))
        })

    }
  }

  handleSearch(text) {
    if (text === "") {
      that.setState({ isLoading: true })
      that.getDataFromServer()
      that.setState({ isLoading: false })
    }
    else {
      this.setState({ searchQuery: text })
    }
  }

  followPeople(item) {
    const request = {
      followTo: item.id,
    }
    item.followStatus = "Following"
    that.setState({ isLoading: true })
    NetworkActions.FollowUser(request, that.props.auth.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        console.log(response)
        if (response.status === 200) {
          item.followStatus = "Following"
        }
      })
      .catch(function (error) {
        that.setState({ isLoading: false })
        alert(JSON.stringify(error))
      })
    this.setState({
      refresh: !this.state.refresh
    })
  }
  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: 'white' }}>
        <OrientationLoadingOverlay
          visible={that.state.isLoading}
          color={Colors.primaryColorLogin}
          indicatorSize="large"
          messageFontSize={12}
          message="Please Wait"
        />

        <View>
          <TouchableOpacity
            onPress={() => this.handleLetsExploreAction()}>
            <Text style={{ ...Style.skipHeaderText, textAlign: 'right' }}>
              Skip
              </Text>
          </TouchableOpacity>
          <Text style={Style.loginHeaderText}>
            People to Follow
                </Text>

          <View style={Style.searchStyle}>
            <Search name="search" size={30} color='gray' style={{}} />
            <TextInput
              onChangeText={(value) => this.handleSearch(value)}
              value={this.state.value}
              style={Style.searchInput}
              placeholder='Search' placeholderTextColor='gray'
            />
            <TouchableOpacity onPress={() => this.onSearch()}>
              <SCAN name="scan1" size={25} color='gray' />
            </TouchableOpacity>
          </View>


          {this.state.data.length > 0 ?
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 40, height: '65%' }}
              data={this.state.data}
              extraData={this.state.refresh}
              keyExtractor={(item) => item.id}
              //ListFooterComponent={this.renderFooter.bind(this)}
              // onEndReachedThreshold={0.1}
              // onEndReached={this.handleLoadMore.bind(this)}
              renderItem={({ item }) => (
                < View style={{ flex: 1, backgroundColor: 'white', marginStart: '5%', marginEnd: '5%' }}>
                  <View style={{ flexDirection: 'row', margin: 10, height: 50 }}>

                    <View style={{ flex: 1 }}>
                      <Avatar
                        size="medium"
                        rounded
                        title={this.state.data.firstName}
                        source={{ uri: item.profilePicture || "https://i.pinimg.com/originals/64/57/c1/6457c16c1691edc5041e437cda422d98.jpg" }}

                      />
                    </View>
                    <View style={{ flex: 3 }}>
                      <Text style={Style.rowName}>
                        {item.firstName || "Missing "} {item.lastName || " Name"}
                      </Text>

                      <Text style={Style.rowUsername}>
                        @{item.username}
                      </Text>
                    </View>


                    <View style={{ flex: 1 }}>
                      <TouchableOpacity
                        onPress={() => this.followPeople(item)}>
                        <Text style={item.followStatus == 'Following' ? Style.rowStatusFollowing : Style.rowStatusFollow}>
                          {item.followStatus}
                        </Text>
                      </TouchableOpacity>
                    </View>

                  </View>


                </View>
              )
              }
            />
            : <Text style={Style.fieldsError}>
              No Record Found
            </Text>}
          <View
            style={[
              Helpers.rowCenter,
            ]}>
            <TouchableOpacity
              onPress={() => this.handleLetsExploreAction()}>
              <Text style={Style.almostDoneBtn}>
                Lets Explore
                   </Text>
            </TouchableOpacity>



          </View>






        </View>

      </View >
    )
  }

}

const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  auth: state.authTypeReducer.authType
})

const mapDispatchToProps = (dispatch) => ({
  signup: () => dispatch({ type: 'SignUp', payload: that.state.signupResponse }),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupUserScreen)
