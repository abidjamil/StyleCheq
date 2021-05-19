import React from 'react'
import { Platform, TextInput, Text, View, FlatList, Button, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'
import Style from './BlockedPeopleStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import NavigationService from 'App/Services/NavigationService'
import { Avatar, Accessory, Icon, Input } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import SCAN from 'react-native-vector-icons/AntDesign';
import Search from 'react-native-vector-icons/EvilIcons';
import BACK from 'react-native-vector-icons/AntDesign';
var that;
class BlockedPeople extends React.Component {
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
    const request = {
      privacyType: "block"
    }
    NetworkActions.GetPrivacyList(request, that.props.auth.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        console.log(response)
        if (response != null) {
          if (response.status == 200) {
            console.log(response.data)
            that.setState({ data: response.data, copyData: response.data })
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
    if (text && this.state.data.length > 0) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = this.state.data.filter(
        function (item) {
          // Applying filter for the inserted text in search bar
          const itemData = item.username
            ? item.username.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      );
      this.setState({ data: newData });
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      this.setState({ data: this.state.copyData });
      // setSearch(text);
    }
  }

  unBlockPeople(item, index) {
    const request = {
      privacyType: "Block",
      privacyForUserId: item.privacyForUserId
    }
    that.setState({ isLoading: true })
    NetworkActions.BlockUser(request, that.props.auth.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        console.log(response)
        console.log(response)
        if (response.status === 200) {
          var array = [...that.state.data]; // make a separate copy of the array
          if (index !== -1) {
            array.splice(index, 1);
            that.setState({ data: array });
          }
          that.setState({ refresh: !that.state.refresh })
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

        <View style={{ height: '95%', top: Platform.OS === 'ios' ? 50 : 25 }}>
          <View style={Style.firstBox, { paddingHorizontal: 20 }}>
            <View style={Style.fieldsLine}>
              <TouchableOpacity
                onPress={() => NavigationService.goBack()}
                style={{ flexDirection: 'row' }}>
                <BACK name="left" size={23}></BACK>
                <Text style={Style.privacyBtn}>back</Text>
              </TouchableOpacity>

              <View style={{ flexDirection: 'row' }}>
                <Text style={Style.privacyBtn}>Blocked Accounts</Text>
              </View>
            </View>
          </View>

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
              style={{ marginTop: 40, height: '60%' }}
              data={this.state.data}
              extraData={this.state.refresh}
              keyExtractor={(item) => item.id}
              //ListFooterComponent={this.renderFooter.bind(this)}
              // onEndReachedThreshold={0.1}
              // onEndReached={this.handleLoadMore.bind(this)}
              renderItem={({ item, index }) => (
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
                        onPress={() => this.unBlockPeople(item, index)}>
                        <Text style={Style.rowStatusFollow}>
                          Unblock
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
)(BlockedPeople)
