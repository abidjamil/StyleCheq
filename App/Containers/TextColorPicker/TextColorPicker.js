import React from 'react'
import { StyleSheet,Platform, Text, View, Button, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Style from './TextColorPickerStyle'
import BACK from 'react-native-vector-icons/AntDesign';
import { ApplicationStyles, Helpers, Images, Colors } from 'App/Theme'
import {
  SliderHuePicker,
  SliderSaturationPicker,
  SliderValuePicker,
} from 'react-native-slider-color-picker';
import tinycolor from 'tinycolor2';

export default class Splash1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        oldColor: "#FF7700",
    };
}

changeColor = (colorHsvOrRgb, resType) => {
    if (resType === 'end') {
        this.setState({
            oldColor: tinycolor(colorHsvOrRgb).toHexString(),
        });
    }
}

  render() {
    const {
      oldColor,
  } = this.state;

  return (
    <View style={{ height: '100%', top: 50 }}>

    <View style={Style.firstBox, { paddingHorizontal: 20 }}>
      <View style={Style.fieldsLine}>
        <View style={{ flexDirection: 'row' }}>
          <BACK name="left" size={23}></BACK>
          <Text style={Style.privacyBtn}>back</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={Style.privacyBtn}>Text Color</Text>
        </View>
      </View>
    </View>
<Text style={{marginLeft:30,marginTop:20, fontFamily: 'Poppins-Regular',}}>Select Font Color</Text>
    <View style={Style.container}>
        <View style={Style.sliderStyle}>
            <SliderHuePicker
                ref={view => {this.sliderHuePicker = view;}}
                oldColor={oldColor}
                trackStyle={[{height: 12, width: 100}]}
                thumbStyle={Style.thumb}
                useNativeDriver={true}
                onColorChange={this.changeColor}
            />
        </View>
        <View style={Style.sliderStyle}>
         
            <SliderSaturationPicker
                ref={view => {this.sliderSaturationPicker = view;}}
                oldColor={oldColor}
                trackStyle={[{height: 12, width: 100}]}
                thumbStyle={Style.thumb}
                useNativeDriver={true}
                onColorChange={this.changeColor}
                style={{height: 12, borderRadius: 6, backgroundColor: tinycolor({h: tinycolor(oldColor).toHsv().h, s: 1, v: 1}).toHexString()}}
            />
           
        </View>
        <View style={Style.sliderStyle}>
            <SliderValuePicker
                ref={view => {this.sliderValuePicker = view;}}
                oldColor={oldColor}
                minimumValue={0.02}
                step={0.05}
                trackStyle={[{height: 12, width: 100}]}
                trackImage={require('react-native-slider-color-picker/brightness_mask.png')}
                thumbStyle={Style.thumb}
                onColorChange={this.changeColor}
                style={{height: 12, borderRadius: 6, backgroundColor: 'black'}}
            />
        </View>
        <View
              style={[
                Helpers.rowCenter,
              ]}>
              <TouchableOpacity
               >
                <Text style={Style.loginBtn}>
                  Done
                   </Text>
              </TouchableOpacity>

            </View>
    </View>
   
    </View>
);
}
}
