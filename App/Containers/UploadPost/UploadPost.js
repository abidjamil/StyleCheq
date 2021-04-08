import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Platform, Text, View, Dimensions, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import Style from './UploadPostStyle'
import { NetworkActions } from '../../NetworkActions'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker'
import MentionsTextInput from 'react-native-mentions';
import BottomSheet from 'react-native-js-bottom-sheet';
import NavigationService from 'App/Services/NavigationService'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
const { height, width } = Dimensions.get('window');
var that;
class UploadPost extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      error: '',
      isLoading: false,
      userImage: null,
      showEditor: true,
      message: null,
      messages: [],
      clearInput: false,
      showMentions: false,
      userImage: {
        uri: "",
        type: "",
        data: null
      }
    }
    that = this;
    this.reqTimer = 0;
  }


  _onPressButton = () => {
    this.bottomSheet.open()
  }

  UNSAFE_componentWillMount() {

    this.getUsersList()
  }

  onNext() {
    console.log(this.state.valueData)
    const data = {
      media: this.state.userImage,
      description: this.state.value
    }


    NavigationService.navigate('SelectTags', data)

  }


  getUsersList() {
    that.setState({ isLoading: true })
    NetworkActions.GetUsers(that.props.auth.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        if (response != null) {
          if (response.status == 200) {
            console.log("User Response", response.data)
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

  renderSuggestionsRow({ item }, hidePanel) {
    return (
      <TouchableOpacity onPress={() => this.onSuggestionTap(item, hidePanel)}>
        <View style={Style.suggestionsRowContainer}>
          <View style={Style.userIconBox}>
            <Image
              style={{
                height: 45,
                width: 45,
              }}
              resizeMode="contain"
              source={{ uri: item.profilePicture }}
            />
          </View>
          <View style={Style.userDetailsBox}>
            <Text style={Style.displayNameText}>{item.username}</Text>
            <Text style={Style.usernameText}>@{item.username}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  onSuggestionTap(item, hidePanel) {
    hidePanel();

    const _comment = this.state.value + item.username
    const comment = this.state.value + " " + item.username
    this.setState({
      value: _comment
    })
    this.setState({
      valueData: comment
    })

  }
  getMatches(theString, theRegex) {
    return theString.match(theRegex).map(function (el) {
      var index = theString.indexOf(el);
      return [index, index + el.length - 1];
    });
  }
  callback(keyword) {

    keyword = keyword.replace('@', '');

    if (keyword) {      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = this.state.data.filter(
        function (item) {
          // Applying filter for the inserted text in search bar
          const itemData = item.username
            ? item.username.toUpperCase()
            : ''.toUpperCase();
          const textData = keyword.toUpperCase();
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
  handleDescription = (text) => {
    console.log(text)
    this.setState({ value: text })
    this.setState({ valueData: text })
  }
  chooseImage = () => {
    let options = {
      title: 'Select Picture',
      cameraType: 'front',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {

      }
      else if (response != null) {

        const source = { uri: response.path }
        const imagesource = source.uri
        const picture = {
          uri: response.uri,
          data: response.data,
          type: response.type,
          path: response.path
        }
        if (picture.uri != null) {
          this.setState({ userImage: picture })
        }
        this.bottomSheet.close()
      }
    });

  }


  chooseVideo = () => {
    let options = {
      title: 'Select Video',
      cameraType: 'front',
      mediaType: 'video',
      storageOptions: {
        skipBackup: true,
        path: 'video',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {

      }
      else if (response != null) {
        console.log("URI" + JSON.stringify(response))
        const source = { uri: response.path }
        const imagesource = source.uri
        const video = {
          uri: response.uri,
          data: response.data,
          type: response.type,
          path: response.path
        }
        if (video.uri != null) {
          this.setState({ userImage: video })
        }
        this.bottomSheet.close()
      }
    });

  }










  render() {
    var image = Platform.OS === 'ios' ? this.state.userImage.uri : 'file://' + this.state.userImage.path

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
              <Text style={Style.privacyBtn}>Upload Post</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={Style.postStyle}>Upload Post</Text>


          <View style={Style.PictureSelectorView}
          >
            {this.state.userImage.data != null ?
              <TouchableOpacity
                onPress={this._onPressButton}>
                <Image
                  style={Style.UserImage}
                  source={{ uri: image }}
                  resizeMode="contain"
                />
              </TouchableOpacity> :
              <TouchableOpacity
                onPress={this._onPressButton} >
                <Text style={Style.PlusSymbol}>
                  +
               </Text>
              </TouchableOpacity>
            }


          </View>


          <View style={[Helpers.rowCenter,]}>
            <TouchableOpacity style={{ marginTop: 10 }}>
              <Text onPress={this._onPressButton} style={Style.loginBtn} >
                Upload
              </Text>
            </TouchableOpacity>

          </View>



          <View style={Style.container}>
            <Text onPress={() => { this.setState({ value: "" }) }} style={{ fontFamily: 'Poppins-Regular', marginLeft: 20 }}>Write a Comment</Text>
            <KeyboardAwareScrollView style={{ flex: 1 }}>
              <MentionsTextInput
                textInputStyle={{ borderColor: '#ebebeb', borderWidth: 4, padding: 15, fontSize: 15, margin: 20, textAlignVertical: "top", marginTop: 10 }}
                suggestionsPanelStyle={{ backgroundColor: 'rgba(100,100,100,0.1)' }}
                loadingComponent={() => <View style={{ flex: 1, width, justifyContent: 'center', alignItems: 'center' }}></View>}
                textInputMinHeight={150}
                textInputMaxHeight={200}
                trigger={'@'}
                triggerLocation={'new-word-only'} // 'new-word-only', 'anywhere'
                value={this.state.value}
                onChangeText={(value) => this.handleDescription(value)}
                triggerCallback={this.callback.bind(this)}
                renderSuggestionsRow={this.renderSuggestionsRow.bind(this)}
                suggestionsData={this.state.data} // array of objects
                keyExtractor={(item, index) => item.id}
                suggestionRowHeight={45}
                horizontal={false} // defaut is true, change the orientation of the list
                MaxVisibleRowCount={3} // this is required if horizontal={false}
              />
              <View
                style={[
                  Helpers.rowCenter,
                ]}>

                <TouchableOpacity
                  onPress={() => this.onNext()} >
                  <Text style={Style.loginBtn}>
                    Next
                   </Text>
                </TouchableOpacity>

              </View>
            </KeyboardAwareScrollView>


            <BottomSheet

              ref={(ref) => {
                this.bottomSheet = ref
              }}
              height={200}
              openDuration={250}
              closeOnDragDown={true}
              itemDivider={3}
              backButtonEnabled={true}
              coverScreen={true}
              options={[
                {
                  title: 'Select Image',
                  onPress: () => this.chooseImage()
                },

                {
                  title: 'Select Video',
                  onPress: () => this.chooseVideo()
                },

                {
                  title: 'Cancel',
                  onPress: () => this.bottomSheet.close()

                }
              ]}
              isOpen={false}
            />
          </View>







        </View>

      </View>
    )
  }


}
const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  auth: state.authTypeReducer.authType,
  timelineData: state.timelineReducer.timeline
})

const mapDispatchToProps = (dispatch) => ({
  timeline: () => dispatch({ type: 'Timeline', payload: that.state.data }),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPost)