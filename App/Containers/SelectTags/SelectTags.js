import React from 'react'
import { connect } from 'react-redux'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './SelectTagsStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import BACK from 'react-native-vector-icons/AntDesign';
import Shirt from 'react-native-vector-icons/Ionicons';
import Shoes from 'react-native-vector-icons/MaterialCommunityIcons';
import HAT from 'react-native-vector-icons/FontAwesome5';
import MAKEUP from 'react-native-vector-icons/FontAwesome5';
import Jewelry from 'react-native-vector-icons/Feather';
import BAGS from 'react-native-vector-icons/SimpleLineIcons';
import HAIRS from 'react-native-vector-icons/MaterialCommunityIcons';
import Body from 'react-native-vector-icons/Ionicons';
import Tatto from 'react-native-vector-icons/MaterialCommunityIcons';
import ToggleSwitch from 'toggle-switch-react-native'
import { NetworkActions } from '../../NetworkActions'
import NavigationService from 'App/Services/NavigationService'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import uuid from 'react-native-uuid';
var that;
class UploadPost extends React.Component {
  constructor(props) {
    console.log(props.navigation.state.params.media.name)
    super(props)
    this.state = {
      isLoading: false,
      count: 1,
      Top: false,
      Shoe: false,
      Hat: false,
      Trouser: false,
      Jewelry: false,
      Makeup: false,
      Bag: false,
      Hairs: false,
      Body: false,
      Tatto: false,
    }
    that = this;
  }

  onToggle(isOn) {
    console.log("Changed to " + isOn);
  }
  UNSAFE_componentWillMount() {

  }
  getMatches(theString, theRegex) {
    return theString.match(theRegex).map(function (el) {
      var index = theString.indexOf(el);
      return [index, index + el.length - 1];
    });
  }
  onNewPost() {
    var arrayData = this.props.navigation.state.params.description.match(/#(\w+)/g)
    var formData = new FormData();
    formData.append('id', uuid.v4())
    formData.append('top', this.state.Top + 0)
    formData.append('shoes', this.state.Shoe + 0)
    formData.append('trouser', this.state.Trouser + 0)
    formData.append('hat', this.state.Hat + 0)
    formData.append('jewelry', this.state.Jewelry + 0)
    formData.append('makeup', this.state.Makeup + 0)
    formData.append('bags', this.state.Bag + 0)
    formData.append('hairs', this.state.Hairs + 0)
    formData.append('physique', this.state.Body + 0)
    formData.append('tatto', this.state.Tatto + 0)
    formData.append('hashTags', JSON.stringify(arrayData) || "null")
    formData.append('description', this.props.navigation.state.params.description)
    formData.append("picture", {
      uri: Platform.OS === 'ios' ? this.props.navigation.state.params.media.uri : 'file://' + this.props.navigation.state.params.media.path,
      type: this.props.navigation.state.params.media.type || "video/mp4",
      name: this.props.navigation.state.params.media.name,
    });
    console.log(formData)
    if (this.state.count < 5) {
      alert('Please select atleast 5 tags')
    }

    else {
      this.setState({ isLoading: true })
      NetworkActions.NewPost(formData, this.props.auth?.data?.token).then(
        function (response) {
          console.log(response)
          that.setState({ isLoading: false })
          if (response.status === 200) {
            NavigationService.navigateAndReset('NewsFeedScreen')
          }
        })
        .catch(function (error) {
          that.setState({ isLoading: false })
          alert(JSON.stringify(error))
        })
    }
  }
  render() {
    return (
      <View style={{ height: '100%', top: Platform.OS === 'ios' ? 50 : 25 }}>

        {/* Loader */}
        <OrientationLoadingOverlay
          visible={that.state.isLoading}
          color={Colors.primaryColorLogin}
          indicatorSize="large"
          messageFontSize={12}
          message=""
        />

        <View style={Style.firstBox, { paddingHorizontal: 20 }}>
          <View style={Style.fieldsLine}>

            <TouchableOpacity
              onPress={() => NavigationService.goBack()}
              style={{ flexDirection: 'row' }}>
              <BACK name="left" size={23}></BACK>
              <Text style={Style.privacyBtn}>back</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
              <Text style={Style.privacyBtn}>Post Upload</Text>
            </View>
          </View>
        </View>

        <Text style={Style.tagText}>Select Upto 5 Tags</Text>

        <View style={{ alignContent: 'space-around' }}>


          <View style={{ ...Style.rowWise, justifyContent: 'space-between' }}>
            <View style={Style.itemView}>
              <Shirt name="ios-shirt-outline" size={25} />

              <Text style={Style.textArrange}>Top</Text>

              <ToggleSwitch
                size="small"
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.Top}
                onToggle={Top => {
                  if (Top) {
                    if (this.state.count <= 5) {
                      this.setState({ Top, count: this.state.count + 1 });
                    }
                    else {
                      alert('You cannot select more than 5 tags')
                    }
                  }
                  else {
                    this.setState({ Top, count: this.state.count - 1 });
                  }

                }}
              />
            </View>



            <View style={Style.itemView1}>
              <Shoes name="shoe-formal" size={25} />

              <Text style={Style.textArrange}>Shoes</Text>

              <ToggleSwitch
                size="small"
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.Shoe}
                onToggle={Shoe => {
                  if (Shoe) {
                    if (this.state.count <= 5) {
                      this.setState({ Shoe, count: this.state.count + 1 });
                    }
                    else {
                      alert('You cannot select more than 5 tags')
                    }
                  }
                  else {
                    this.setState({ Shoe, count: this.state.count - 1 });
                  }
                }}
              />
            </View>
          </View>






          <View style={{ ...Style.rowWise, justifyContent: 'space-between' }}>
            <View style={Style.itemView}>
              <HAT name="hat-cowboy" size={25} />

              <Text style={Style.textArrange}>Hat</Text>

              <ToggleSwitch
                size="small"
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.Hat}
                onToggle={Hat => {
                  if (Hat) {
                    if (this.state.count <= 5) {
                      this.setState({ Hat, count: this.state.count + 1 });
                    }
                    else {
                      alert('You cannot select more than 5 tags')
                    }
                  }
                  else {
                    this.setState({ Hat, count: this.state.count - 1 });
                  }
                }}
              />
            </View>



            <View style={Style.itemView1}>
              <Shirt name="ios-shirt-outline" size={25} />

              <Text style={Style.textArrange}>Trouser</Text>

              <ToggleSwitch
                size="small"
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.Trouser}
                onToggle={Trouser => {
                  if (Trouser) {
                    if (this.state.count <= 5) {
                      this.setState({ Trouser, count: this.state.count + 1 });
                    }
                    else {
                      alert('You cannot select more than 5 tags')
                    }
                  }
                  else {
                    this.setState({ Trouser, count: this.state.count - 1 });
                  }
                }}
              />
            </View>
          </View>



          <View style={{ ...Style.rowWise, justifyContent: 'space-between' }}>
            <View style={Style.itemView}>
              <Jewelry name="codepen" size={25} />

              <Text style={Style.textArrange}>Jewelry</Text>

              <ToggleSwitch
                size="small"
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.Jewelry}
                onToggle={Jewelry => {
                  if (Jewelry) {
                    if (this.state.count <= 5) {
                      this.setState({ Jewelry, count: this.state.count + 1 });
                    }
                    else {
                      alert('You cannot select more than 5 tags')
                    }
                  }
                  else {
                    this.setState({ Jewelry, count: this.state.count - 1 });
                  }
                }}
              />
            </View>



            <View style={Style.itemView1}>
              <MAKEUP name="map" size={25} />

              <Text style={Style.textArrange}>Makeup</Text>

              <ToggleSwitch
                size="small"
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.Makeup}
                onToggle={Makeup => {
                  if (Makeup) {
                    if (this.state.count <= 5) {
                      this.setState({ Makeup, count: this.state.count + 1 });
                    }
                    else {
                      alert('You cannot select more than 5 tags')
                    }
                  }
                  else {
                    this.setState({ Makeup, count: this.state.count - 1 });
                  }
                }}
              />
            </View>
          </View>



          <View style={{ ...Style.rowWise, justifyContent: 'space-between' }}>

            <View style={Style.itemView}>
              <BAGS name="handbag" size={25} />
              <Text style={Style.textArrange}>Bag</Text>

              <ToggleSwitch
                size="small"
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.Bag}
                onToggle={Bag => {
                  if (Bag) {
                    if (this.state.count <= 5) {
                      this.setState({ Bag, count: this.state.count + 1 });
                    }
                    else {
                      alert('You cannot select more than 5 tags')
                    }
                  }
                  else {
                    this.setState({ Bag, count: this.state.count - 1 });
                  }
                }}
              />
            </View>



            <View style={Style.itemView1}>
              <HAIRS name="face-woman" size={25} />

              <Text style={Style.textArrange}>Hairs</Text>

              <ToggleSwitch
                size="small"
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.Hairs}
                onToggle={Hairs => {
                  if (Hairs) {
                    if (this.state.count <= 5) {
                      this.setState({ Hairs, count: this.state.count + 1 });
                    }
                    else {
                      alert('You cannot select more than 5 tags')
                    }
                  }
                  else {
                    this.setState({ Hairs, count: this.state.count - 1 });
                  }
                }}
              />
            </View>
          </View>


          <View style={{ ...Style.rowWise, justifyContent: 'space-between' }}>

            <View style={Style.itemView}>
              <Body name="body-outline" size={25} />

              <Text style={Style.textArrange}>Body</Text>

              <ToggleSwitch
                size="small"
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.Body}
                onToggle={Body => {
                  if (Body) {
                    if (this.state.count <= 5) {
                      this.setState({ Body, count: this.state.count + 1 });
                    }
                    else {
                      alert('You cannot select more than 5 tags')
                    }
                  }
                  else {
                    this.setState({ Body, count: this.state.count - 1 });
                  }
                }}
              />
            </View>



            <View style={Style.itemView1}>
              <Tatto name="jellyfish" size={25} />

              <Text style={Style.textArrange}>Tatto</Text>

              <ToggleSwitch
                size="small"
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.Tatto}
                onToggle={Tatto => {
                  if (Tatto) {
                    if (this.state.count <= 5) {
                      this.setState({ Tatto, count: this.state.count + 1 });
                    }
                    else {
                      alert('You cannot select more than 5 tags')
                    }
                  }
                  else {
                    this.setState({ Tatto, count: this.state.count - 1 });
                  }
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={[
            Helpers.rowCenter,
          ]}>

          <TouchableOpacity
            onPress={() => this.onNewPost()}>

            <Text style={Style.loginBtn}>
              Next
                   </Text>
          </TouchableOpacity>

        </View>
      </View >
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
