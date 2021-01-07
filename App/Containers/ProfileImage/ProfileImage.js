import React from 'react'

import { Platform, TouchableOpacity, Text, View, Dimensions, Image, ScrollView, FlatList, ImageBackground, SafeAreaView } from 'react-native'
import Style from './ProfileImageStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import Message from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/Entypo';
import Dot from 'react-native-vector-icons/Entypo';
import Verified from 'react-native-vector-icons/MaterialIcons';
import Star from 'react-native-vector-icons/AntDesign';
import NavigationService from 'App/Services/NavigationService'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import StarRating from 'react-native-star-rating';
import BottomIcons from '../../Components/BottomIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height / 1.056;


export default class Splash1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: [
        {
          id: "1",
          picture: Images.two,
        },
        {
          id: "2",
          picture: Images.one,
        },
        {
          id: "3",
          picture: Images.three,
        },
        {
          id: "4",
          picture: Images.two,
        }],
      starCount: 3.5
    }

  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (

      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ height: windowHeight }}>
          <View style={Style.firstBox, { paddingHorizontal: 20 }}>
            <View style={Style.fieldsLine}>
              <Message name="mail" size={30} />
              <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', }}>Profile</Text>

              <TouchableOpacity
                onPress={() => NavigationService.navigate('AccountSetting')}>
                <User name="user" size={30} />
              </TouchableOpacity>

            </View>
          </View>

          <ImageBackground
            style={[Helpers.fullSize]}
            source={Images.background}>
            <OrientationLoadingOverlay
              visible={this.state.loading}
              color={Colors.black}
              indicatorSize="large"
              messageFontSize={12}
              message=""
            />

            <View style={{ marginLeft: 10 }}>
              <Text style={Style.trisaStyle}>TRISA SNOW</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={Style.trisaemail}>@trisasnow_256</Text>
              <View style={{ flexDirection: 'row', marginEnd: 20 }}>
                <TouchableOpacity
                  style={{ flexDirection: 'row' }}
                  onPress={() => NavigationService.navigate('EditProfile')}>
                  <Text style={{ backgroundColor: '#fff', paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, color: 'blue' }}>Edit Profile</Text>
                  <Verified name="verified" color="green" size={18} style={{ backgroundColor: '#fff', paddingTop: 5, paddingRight: 7 }}></Verified>
                </TouchableOpacity>

                <Dot name="dots-three-vertical" size={25} color='#fff' />
              </View>
            </View>
            <View style={Style.textView}>
              <Text style={Style.postText}>POSTS</Text>
              <Text style={Style.postText}>FOLLOWERS</Text>
            </View>

            <View style={Style.textView1}>
              <Text style={Style.postText}>512</Text>
              <Text style={Style.postText}>273k</Text>
            </View>

            <View style={Style.textView1}>
              <Text style={Style.postText}>LOCATIONS</Text>
              <Text style={Style.postText}>FOLLOWING</Text>
            </View>

            <View style={Style.textView1}>
              <Text style={Style.postText1}>LONDON</Text>
              <Text style={Style.postText}>512</Text>
            </View>

            <View style={{ marginTop: 20 }}>

              <Text style={{ alignSelf: 'flex-end', paddingHorizontal: 30, fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>RATING</Text>
              <View style={{ alignSelf: 'flex-end', paddingHorizontal: 30, flexDirection: 'row', marginLeft: 10 }}>

                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular', marginLeft: 5 }}>5000</Text>
                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>(</Text>
                <Star name="star" size={20} color='#FFC00B' />
                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>3.8</Text>
                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>)</Text>
              </View>
            </View>

            <View style={Style.lastView}>
              <Text style={Style.lastViewText}>MODEL,ACTRESS,INFLUENCERS YOU CAN HAVE ANYTHING IN LIFE IF YOU DRESS FOR IT. </Text>
            </View>


            <View style={{ width: '100%', position: 'absolute', bottom: Platform.OS === 'ios' ? 0 : 30 }}>
              <BottomIcons />
            </View>

          </ImageBackground>
        </View>

        <SafeAreaView style={{ marginTop: 50 }}>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingVertical: 3, }}
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={this.state.data}
            columnWrapperStyle={{ marginHorizontal: 2, marginVertical: 2, }}
            renderItem={({ item }) => {
              var displayRating = false;

              toggleRating = () => {
                this.displayRating = !this.displayRating
              }
              return (
                <View style={{ padding: 5, flex: 1 }}>
                  <Image

                    style={{ height: 200, width: '100%', borderRadius: 20, }}
                    source={item.picture} />
                  <Star onPress={() => this.toggleRating()} name="star" size={20} color='#FFC00B' />
                  {displayRating == true ?
                    <StarRating

                      containerStyle={{ width: 50, marginLeft: 20 }}
                      disabled={false}
                      maxStars={5}
                      visible={displayRating}
                      fullStarColor='#FFC00B'
                      emptyStarColor='#fff'
                      starSize={30}
                      rating={this.state.starCount}
                      selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                    : <View>

                    </View>

                  }
                </View>

              );
            }

            }

          />


        </SafeAreaView>



      </ScrollView>

    )
  }


}