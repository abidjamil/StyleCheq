import React from 'react'
import { SafeAreaView, Platform, ScrollView, TouchableOpacity, Text, View, Button, Image, FlatList, TextInput, Dimensions } from 'react-native'
import Style from './CollectionsStyle'
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
      usersData: []
    }
    that = this
  }
  UNSAFE_componentWillMount() {
    this.getCollections()
  }
  getCollections() {
    NetworkActions.GetCollections(that.props.authData.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        if (response != null) {
          console.log(response)
          if (response.status == 200) {
            const _data = [{
              collectionId: 0,
              name: "Add",
              posts: []
            }]
            that.setState({
              data: _data
            })
            that.setState({
              data: [...that.state.data, ...response.data]
            })
          }
          if (response.data.length == 0) {
            that.setState({
              resultError: "No collections found"
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


  handleCollectionName(text) {
    this.setState({
      collectionName: text
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
              <Text style={Style.privacyBtn}>Favorite</Text>
            </View>
          </View>
        </View>
        <ScrollView
          style={{ marginBottom: 40 }}
          nestedScrollEnabled>
          <View>
            <OrientationLoadingOverlay
              visible={that.state.isLoading}
              color={Colors.primaryColorLogin}
              indicatorSize="large"
              messageFontSize={12}
              message=""
            />
            <Modal
              onSwipeComplete={() => this.setState({ collectionModal: false })}
              swipeDirection="left"
              animationIn="zoomIn"
              animationOut="zoomOut"
              onBackdropPress={() => this.setState({ collectionModal: false })}
              onBackButtonPress={() => this.setState({ collectionModal: false })}
              isVisible={this.state.collectionModal}>
              <View style={{ width: '100%', height: 200, alignContent: 'center', alignItems: 'center', }}>
                <View style={{ backgroundColor: 'black', opacity: 0.7, borderRadius: 10, flex: 1, width: '100%', alignContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                  <Text style={Style.fieldsLabel}>
                    Collection Name
                </Text>
                  <TextInput
                    style={Style.inputField}
                    placeholder="Enter Collection Name"
                    onChangeText={(value) => this.handleCollectionName(value)}
                  />
                  <View
                    style={[
                      Helpers.rowCenter,
                    ]}>
                    <TouchableOpacity
                      onPress={() => {

                        that.setState({
                          isLoading: true
                        })
                        const request = {
                          name: this.state.collectionName
                        }
                        console.log(request)
                        NetworkActions.NewCollection(request, that.props.authData.data.token).then
                          (function (response) {
                            console.log(response)
                            that.setState({
                              isLoading: false,
                              collectionModal: false
                            })
                            that.getCollections()
                          })
                          .catch(function (error) {
                            that.setState({
                              isLoading: false
                            })
                            alert(JSON.stringify(error))
                          })
                      }}>
                      <Text style={Style.loginBtn}>
                        Save
                   </Text>
                    </TouchableOpacity>

                  </View>
                  }

                </View>
              </View>
            </Modal>
            {
              this.state.resultError.length > 0 ?
                <View style={{ marginTop: 45, marginStart: 10, marginEnd: 10 }}>
                  <Text style={{ alignSelf: 'center', fontFamily: 'Poppins-Bold', color: 'black' }}>{this.state.resultError}</Text>
                </View> : <View></View>
            }
            <FlatList
              style={{ marginBottom: 60 }}
              extraData={this.state.refresh}
              numColumns={2}
              keyExtractor={(item) => item.collectionId}
              data={this.state.data}
              renderItem={({ item }) => {
                return (
                  <View style={{ padding: 5, flex: 1, width: '100%' }}>
                    <View style={{ width: '100%', height: 250, justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderWidth: 1, borderColor: '#8c8c8c' }} >
                      {
                        item.collectionId == 0 ?
                          <TouchableOpacity
                            onPress={() => this.setState({ collectionModal: true })}
                            style={{ width: '97%', height: 170 }}>
                            <Text style={{ width: '97%', height: 130, fontFamily: 'Poppins-Regular', fontSize: 120, textAlign: 'center', color: '#8c8c8c' }}>
                              +
                            </Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, textAlign: 'center' }}>
                              New Collection
                            </Text>
                          </TouchableOpacity> :
                          <TouchableOpacity
                            onPress={() => NavigationService.navigate('CollectionPosts', item)}
                            style={{ width: '97%', height: 170, }}>
                            {item.posts.length > 0 ?
                              <View style={{ width: '97%', height: 170, }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, textAlign: 'center' }}>
                                  {item.name}
                                </Text>
                                <FlatList
                                  style={{ flex: 1 }}
                                  numColumns={2}
                                  contentContainerStyle={{ paddingVertical: 5, }}
                                  columnWrapperStyle={{ marginHorizontal: 5, marginVertical: 5, }}
                                  keyExtractor={(item) => item.postId}
                                  data={item.posts}
                                  renderItem={({ item }) => {
                                    return (
                                      <SafeAreaView style={{ padding: 5, flex: 1 }}>
                                        <Image
                                          style={{ width: 70, height: 100, borderRadius: 5 }}
                                          resizeMode="cover"
                                          source={{ uri: item.picture }} />
                                      </SafeAreaView>

                                    );
                                  }

                                  }

                                />
                              </View> :
                              <Text style={{ width: '100%', height: 200, fontFamily: 'Poppins-Bold', fontSize: 16, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', textAlign: 'center', textAlignVertical: 'center' }}>
                                {item.name}
                              </Text>
                            }
                          </TouchableOpacity>
                      }
                    </View>
                  </View>

                );
              }}
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
