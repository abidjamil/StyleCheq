import React from 'react'
import { StyleSheet, Platform, Text, View, Dimensions, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import Style from './UploadPostStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker'
import MentionsTextInput from 'react-native-mentions';
import BottomSheet from 'react-native-js-bottom-sheet';
import NavigationService from 'App/Services/NavigationService'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
const { height, width } = Dimensions.get('window');
var that;
const users = [
  { id: "1", name: "Raza Dar", username: "mrazadar", gender: "male" },
  { id: "3", name: "Atif Rashid", username: "atif.rashid", gender: "male" },
  { id: "4", name: "Peter Pan", username: "peter.pan", gender: "male" },
  { id: "5", name: "John Doe", username: "john.doe", gender: "male" },
  { id: "6", name: "Meesha Shafi", username: "meesha.shafi", gender: "female" }
];

export default class Splash1 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      error: '',
      isLoading: false,
      userImage: null,


      value: "",
      keyword: "",
      data: [],
      data: [
        { id: 1, name: "Raza Dar", username: "mrazadar", gender: "male" },
        { id: 3, name: "Atif Rashid", username: "atif.rashid", gender: "male" },
        { id: 4, name: "Peter Pan", username: "peter.pan", gender: "male" },
        { id: 5, name: "John Doe", username: "john.doe", gender: "male" },
        { id: 6, name: "Meesha Shafi", username: "meesha.shafi", gender: "female" }
      ]
      ,


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


  bottomSheet
  _onPressButton = () => {

    this.bottomSheet.open()
  }




  renderSuggestionsRow({ item }, hidePanel) {
    return (
      <TouchableOpacity onPress={() => this.onSuggestionTap(item, hidePanel)}>
        <View style={Style.suggestionsRowContainer}>
          <View style={Style.userIconBox}>
            <Text style={Style.usernameInitials}>{!!item.name && item.name.substring(0, 2).toUpperCase()}</Text>
          </View>
          <View style={Style.userDetailsBox}>
            <Text style={Style.displayNameText}>{item.name}</Text>
            <Text style={Style.usernameText}>@{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  onSuggestionTap(item, hidePanel) {
    hidePanel();
    const _comment = this.state.value + item.username
    const comment = this.state.value + "[" + item.username + ":" + item.id + "]"
    this.setState({
      value: _comment
    })
    this.setState({
      valueData: comment
    })
    console.log(this.state.value)
  }

  callback(keyword) {
    console.log(keyword)
  }
  handleDescription = (text) => {

    this.setState({ value: text })
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
                  resizeMode="center"
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


          <View
            style={[
              Helpers.rowCenter,
            ]}>
            <TouchableOpacity style={{ marginTop: 10 }}
            >
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
                loadingComponent={() => <View style={{ flex: 1, width, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator /></View>}
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
            </KeyboardAwareScrollView>
            <View
              style={[
                Helpers.rowCenter,
              ]}>
              <TouchableOpacity
              >
                <Text style={Style.loginBtn}>
                  Next
                   </Text>
              </TouchableOpacity>

            </View>

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