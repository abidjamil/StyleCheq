import React from 'react'
import { SafeAreaView, Platform, ScrollView, TouchableOpacity, Text, View, Button, Image, FlatList, TextInput, Dimensions } from 'react-native'
import Style from './CollectionPostsStyle'
import Search from 'react-native-vector-icons/EvilIcons';
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import NavigationService from 'App/Services/NavigationService'
import SCAN from 'react-native-vector-icons/AntDesign';
import { NetworkActions } from '../../NetworkActions';
import { connect } from 'react-redux'
import Modal from "react-native-modal";
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

var that;
class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      resultError: "",
      refresh: false,
      collectionModal: false,
      usersData: [],
      collection: props.navigation.state.params
    }
    that = this
  }
  UNSAFE_componentWillMount() {
    this.getCollections()
  }
  getCollections() {
    const request = {
      id: this.state.collection.collectionId
    }
    NetworkActions.GetCollectionPosts(request, that.props.authData.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        if (response != null) {
          console.log(response)
          if (response.status == 200) {
            that.setState({
              data: response.data
            })
          }
          if (response.data.length == 0) {
            that.setState({
              resultError: "No Posts Found"
            })
          }
          else {
            that.setState({
              resultError: ""
            })
          }
        }

      })
      .catch(function (error) {
        alert(JSON.stringify(error))
        that.setState({ isLoading: false })
      })
  }



  render() {
    return (
      <View style={{ top: Platform.OS === 'ios' ? 50 : 15 }}>
        <View style={Style.firstBox, { paddingHorizontal: 20 }}>
          <View style={Style.fieldsLine}>
            <TouchableOpacity
              onPress={() => NavigationService.goBack()}
              style={{ flexDirection: 'row' }}>
              <BACK name="left" size={23}></BACK>
              <Text style={Style.privacyBtn}>back</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
              <Text style={Style.privacyBtn}>{this.state.collection.name}</Text>
            </View>
          </View>
        </View>
        <ScrollView
          style={{ marginBottom: 40 }}
          nestedScrollEnabled>
          <View>

            {
              this.state.resultError.length > 0 ?
                <View style={{ marginTop: 45, marginStart: 10, marginEnd: 10 }}>
                  <Text style={{ alignSelf: 'center', fontFamily: 'Poppins-Bold', color: 'black' }}>{this.state.resultError}</Text>
                </View> : <View></View>
            }
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingVertical: 10, }}
              numColumns={2}
              keyExtractor={(item) => item.postId}
              data={this.state.data}
              columnWrapperStyle={{ marginHorizontal: 5, marginVertical: 5, }}
              renderItem={({ item }) => {
                return (
                  <View style={{ padding: 10, flex: 1 }}>

                    <Image
                      style={{ zIndex: -1, height: 250, width: '100%', borderRadius: 10 }}
                      source={{ uri: item.picture }} />
                  </View>

                );
              }

              }

            />
          </View>

        </ScrollView>

      </View >

    )
  }


}
const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  authData: state.authTypeReducer.authType,
  timelineData: state.timelineReducer.timeline
})

const mapDispatchToProps = (dispatch) => ({
  timeline: () => dispatch({ type: 'Timeline', payload: that.state.data }),
  auth: (data) => dispatch({ type: 'AUTH_TYPE', payload: data }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending)
