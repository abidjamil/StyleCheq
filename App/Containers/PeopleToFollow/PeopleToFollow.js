import React from 'react'
import { Platform, Text, View, FlatList, Button, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'
import Style from './PeopleToFollowStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import NavigationService from 'App/Services/NavigationService'
import { Avatar, Accessory, Icon, Input } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
var that;
class SignupUserScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      error: '',
      refresh: true,
      isLoading: false,
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
        console.log(that.state.isLoading)
        if (response != null) {
          if (response.status == 200) {
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


  handleSearch(text) {
    this.setState({ searchQuery: text })

  }

  followPeople(item) {
    const request = {
      followTo: item.id,
    }
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
          <Text style={{ ...Style.skipHeaderText, textAlign: 'right' }}>
            Skip
              </Text>

          <Text style={Style.loginHeaderText}>
            People to Follow
                </Text>

          <View>
            <Searchbar
              inputStyle={{ fontSize: 14 }}
              style={{ margin: 20, marginBottom: 0, borderRadius: 20, color: 'black' }}
              placeholder="Search by username"
              onChangeText={(text) => this.handleSearch(text)}
              value={this.state.searchQuery}
            />

          </View>
          <Text style={Style.fieldsError}>
            {this.state.error}
          </Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 0, height: '65%' }}
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
                      title={this.state.data.name}
                      source={{ uri: item.profilePicture || "https://i.pinimg.com/originals/64/57/c1/6457c16c1691edc5041e437cda422d98.jpg" }}

                    />
                  </View>
                  <View style={{ flex: 3 }}>
                    <Text style={Style.rowName}>
                      {item.name || "Missing Name"}
                    </Text>

                    <Text style={Style.rowUsername}>
                      {item.username}
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
