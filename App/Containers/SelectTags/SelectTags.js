import React from 'react'
import { Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './SelectTagsStyle'

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

export default class Splash1 extends React.Component {
  state = {
    isOnDefaultToggleSwitch: true,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false,

    isOnDefaultToggleSwitch1: true,
    isOnLargeToggleSwitch1: false,
    isOnBlueToggleSwitch1: false,

    isOnDefaultToggleSwitch2: true,
    isOnLargeToggleSwitch2: false,
    isOnBlueToggleSwitch2: false,

    isOnDefaultToggleSwitch3: true,
    isOnLargeToggleSwitch3: false,
    isOnBlueToggleSwitch3: false,

    isOnDefaultToggleSwitch4: true,
    isOnLargeToggleSwitch4: false,
    isOnBlueToggleSwitch4: false,

    isOnDefaultToggleSwitch5: true,
    isOnLargeToggleSwitch5: false,
    isOnBlueToggleSwitch5: false,

    isOnDefaultToggleSwitch6: true,
    isOnLargeToggleSwitch6: false,
    isOnBlueToggleSwitch6: false,

    isOnDefaultToggleSwitch7: true,
    isOnLargeToggleSwitch7: false,
    isOnBlueToggleSwitch7: false,

    isOnDefaultToggleSwitch7: true,
    isOnLargeToggleSwitch7: false,
    isOnBlueToggleSwitch7: false,

    isOnDefaultToggleSwitch8: true,
    isOnLargeToggleSwitch8: false,
    isOnBlueToggleSwitch8: false,

    isOnDefaultToggleSwitch9: true,
    isOnLargeToggleSwitch9: false,
    isOnBlueToggleSwitch9: false,
  }
  onToggle(isOn) {
    console.log("Changed to " + isOn);
  }
  render() {
    return (
      <View style={{ height: '100%' }}>

        <View style={Style.firstBox}>
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

        <Text style={Style.tagText}>Select Upto 5 Tags</Text>

     <View style={{alignContent:'space-around'}}>

<View style={Style.rowWise}>
      <View style={Style.itemView}>
      <Shirt name="ios-shirt-outline" size={25} />

      <Text style={Style.textArrange}>Top</Text>
  
      <ToggleSwitch
      
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.isOnDefaultToggleSwitch}
                onToggle={isOnDefaultToggleSwitch => {
                  this.setState({ isOnDefaultToggleSwitch });
                  this.onToggle(isOnDefaultToggleSwitch);
                }}
              />
      </View>



      <View style={Style.itemView1}>
      <Shoes name="shoe-formal" size={25} />

      <Text style={Style.textArrange}>Shoes</Text>
  
      <ToggleSwitch
      
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.isOnDefaultToggleSwitch1}
                onToggle={isOnDefaultToggleSwitch1 => {
                  this.setState({ isOnDefaultToggleSwitch1 });
                  this.onToggle(isOnDefaultToggleSwitch1);
                }}
              />
      </View>
      </View>
    





      <View style={Style.rowWise}>
      <View style={Style.itemView}>
      <HAT name="hat-cowboy" size={25} />

      <Text style={Style.textArrange}>Hat</Text>
  
      <ToggleSwitch
      
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.isOnDefaultToggleSwitch2}
                onToggle={isOnDefaultToggleSwitch2 => {
                  this.setState({ isOnDefaultToggleSwitch2 });
                  this.onToggle(isOnDefaultToggleSwitch2);
                }}
              />
      </View>



      <View style={Style.itemView1}>
      <Shirt name="ios-shirt-outline" size={25} />

      <Text style={Style.textArrange}>Trouser</Text>
  
      <ToggleSwitch
      
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.isOnDefaultToggleSwitch3}
                onToggle={isOnDefaultToggleSwitch3 => {
                  this.setState({ isOnDefaultToggleSwitch3 });
                  this.onToggle(isOnDefaultToggleSwitch3);
                }}
              />
      </View>
      </View>



      <View style={Style.rowWise}>
      <View style={Style.itemView}>
      <Jewelry name="codepen" size={25} />

      <Text style={Style.textArrange}>Jewelry</Text>
  
      <ToggleSwitch
      
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.isOnDefaultToggleSwitch4}
                onToggle={isOnDefaultToggleSwitch4 => {
                  this.setState({ isOnDefaultToggleSwitch4 });
                  this.onToggle(isOnDefaultToggleSwitch4);
                }}
              />
      </View>



      <View style={Style.itemView2}>
      <MAKEUP name="map" size={25} />

      <Text style={Style.textArrange}>Makeup</Text>
  
      <ToggleSwitch
      
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.isOnDefaultToggleSwitch5}
                onToggle={isOnDefaultToggleSwitch5 => {
                  this.setState({ isOnDefaultToggleSwitch5 });
                  this.onToggle(isOnDefaultToggleSwitch5);
                }}
              />
      </View>
      </View>



      <View style={Style.bagToEnd}>
      <View style={Style.itemView2}>
      <BAGS name="handbag" size={25} />

      <Text style={Style.textArrange}>Bag</Text>
  
      <ToggleSwitch
      
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.isOnDefaultToggleSwitch6}
                onToggle={isOnDefaultToggleSwitch6 => {
                  this.setState({ isOnDefaultToggleSwitch6 });
                  this.onToggle(isOnDefaultToggleSwitch6);
                }}
              />
      </View>



      <View style={Style.itemView2}>
      <HAIRS name="face-woman" size={25} />

      <Text style={Style.textArrange}>Hairs</Text>
  
      <ToggleSwitch
      
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.isOnDefaultToggleSwitch7}
                onToggle={isOnDefaultToggleSwitch7 => {
                  this.setState({ isOnDefaultToggleSwitch7 });
                  this.onToggle(isOnDefaultToggleSwitch7);
                }}
              />
      </View>
      </View>


      <View style={Style.bagToEnd}>
      <View style={Style.itemView2}>
      <Body name="body-outline" size={25} />

      <Text style={Style.textArrange}>Body</Text>
  
      <ToggleSwitch
      
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.isOnDefaultToggleSwitch8}
                onToggle={isOnDefaultToggleSwitch8 => {
                  this.setState({ isOnDefaultToggleSwitch8 });
                  this.onToggle(isOnDefaultToggleSwitch8);
                }}
              />
      </View>



      <View style={Style.itemView2}>
      <Tatto name="jellyfish" size={25} />

      <Text style={Style.textArrange}>Tatto</Text>
  
      <ToggleSwitch
      
                offColor="#C0C0C0"
                onColor="#0F7EB5"
                isOn={this.state.isOnDefaultToggleSwitch9}
                onToggle={isOnDefaultToggleSwitch9 => {
                  this.setState({ isOnDefaultToggleSwitch9 });
                  this.onToggle(isOnDefaultToggleSwitch9);
                }}
              />
      </View>
      </View>
      </View>
      </View>
    )
  }


}
