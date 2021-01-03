import React from 'react'
import { Platform, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, TextInput, FlatList ,ScrollView} from 'react-native'
import Style from './UploadPostStyle'
import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker'
import Editor, { EU } from "react-native-mentions-editor";
var that;
const users = [
  { id: 1, name: "Raza Dar", username: "mrazadar", gender: "male" },
  { id: 3, name: "Atif Rashid", username: "atif.rashid", gender: "male" },
  { id: 4, name: "Peter Pan", username: "peter.pan", gender: "male" },
  { id: 5, name: "John Doe", username: "john.doe", gender: "male" },
  { id: 6, name: "Meesha Shafi", username: "meesha.shafi", gender: "female" }
];

const formatMentionNode = (txt, key) => (
  <Text key={key} style={Style.mention}>
    {txt}
  </Text>
);
export default class Splash1 extends React.Component {
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
  }

  onChangeHandler = message => {
  
    this.setState({
      message,
      clearInput: false
    });
  };
  sendMessage = () => {
    if (!this.state.message) return;
    const messages = [this.state.message, ...this.state.messages];
    this.setState({
      messages,
      message: null,
      clearInput: true
    });
  };

  toggleEditor = () => {
   
  };

  onHideMentions = () => {
   
    this.setState({
      showMentions: false
    });
  };

  renderMessageListItem({ item: message, index }) {
    return (
      <View style={Style.messageListItem}>
        <Text style={Style.messageText}>
          {EU.displayTextWithMentions(message.text, formatMentionNode)}
        </Text>
      </View>
    );
  }

  renderMessageList() {
    return (
      <FlatList
        style={Style.messageList}
        keyboardShouldPersistTaps={"always"}
        horizontal={false}
        inverted={true}
        enableEmptySections={true}
        data={this.state.messages}
        keyExtractor={(message, index) => `${message.text}-${index}`}
        renderItem={rowData => {
          return this.renderMessageListItem(rowData);
        }}
      />
    );
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
        console.log("URI" + JSON.stringify(response))
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

  render() {
    var image = Platform.OS === 'ios' ? this.state.userImage.uri : 'file://' + this.state.userImage.path
    console.log(image)

    return (
      <View style={{ height: '100%', top: 50,backgroundColor:'#fff' }}>
<ScrollView>
        <View style={Style.firstBox, { paddingHorizontal: 20 }}>
          <View style={Style.fieldsLine}>
            <View style={{ flexDirection: 'row' }}>
              <BACK name="left" size={23}></BACK>
              <Text style={Style.privacyBtn}>back</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={Style.privacyBtn}>Post Upload</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={Style.postStyle}>Upload Post</Text>


          <View style={Style.PictureSelectorView}
           >
            {this.state.userImage.data != null ?
              <TouchableOpacity
                onPress={() => this.chooseImage()}>
                <Image
                  style={Style.UserImage}
                  source={{ uri: image }}
                  resizeMode="center"
                />
              </TouchableOpacity> :
              <TouchableOpacity
              onPress={() => this.chooseImage()} >
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
            <TouchableOpacity style={{marginTop:20}}
            >
              <Text style={Style.loginBtn} onPress={() => this.chooseImage()}>
               Upload
                   </Text>
            </TouchableOpacity>

          </View>



          

            <View style={Style.main}>
        <KeyboardAvoidingView behavior="height">
          <View style={Style.container}>
        
           
            <View style={Style.footer}>
              <Editor
              
                list={users}
                initialValue={this.state.initialValue}
                clearInput={this.state.clearInput}
                onChange={this.onChangeHandler}
                showEditor={this.state.showEditor}
                toggleEditor={this.toggleEditor}
                showMentions={this.state.showMentions}
                onHideMentions={this.onHideMentions}
                placeholder="You can write here..."
                
              />
              <TouchableOpacity
                style={Style.sendBtn}
                onPress={this.sendMessage}
              >
                <Text style={Style.sendBtnText}>Next</Text>
              </TouchableOpacity>
            </View>
            
          
            <ScrollView style={Style.messageList}>
              {this.renderMessageList()}
            </ScrollView>
          </View>
         
        </KeyboardAvoidingView>
      </View>
              </View>

   
        </ScrollView>
      </View>
    )
  }


}
