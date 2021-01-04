import React from 'react'
import { Platform, Text, View, Button, Image, ScrollView, FlatList, ImageBackground } from 'react-native'
import Style from './ProfileImageStyle'

import { ApplicationStyles, Helpers, Images, Metrics, Colors } from '../../Components/BottomIcons/node_modules/App/Theme'
import Message from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/Entypo';
import Dot from 'react-native-vector-icons/Entypo';
import Verified from 'react-native-vector-icons/MaterialIcons';
import Star from 'react-native-vector-icons/AntDesign';
import Search from 'react-native-vector-icons/AntDesign';
import Plus from 'react-native-vector-icons/EvilIcons';
import Bell from 'react-native-vector-icons/FontAwesome';
import Hand from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from 'react-native-vector-icons/Entypo';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import StarRating from 'react-native-star-rating';
import BottomIcons from '../../Components/BottomIcons'
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
      <View style={{ height: '100%', top: 15 }}>
        <ScrollView>
          <View style={Style.firstBox, { paddingHorizontal: 20 }}>
            <View style={Style.fieldsLine}>

              <Message name="mail" size={30} />
              <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', }}>Profile</Text>
              <User name="user" size={30} />
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
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ backgroundColor: '#fff', paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, color: 'blue' }}>Edit Profile</Text>
                <Verified name="verified" color="green" size={18} style={{ backgroundColor: '#fff', paddingTop: 5, paddingRight: 7 }}></Verified>
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

            <View style={{ paddingLeft: 200, marginTop: 20 }}>

              <Text style={{ fontSize: 20, marginLeft: 55, color: '#fff', fontFamily: 'Poppins-Regular' }}>RATING</Text>
              <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular', marginLeft: 5 }}>5000</Text>
                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>(</Text>
                <Star name="star" size={20} color='#FFC00B' />
                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>3.8</Text>
                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Poppins-Regular' }}>)</Text>
              </View>
            </View>


            <View style={Style.lastView}>
              <Text style={Style.lastViewText}>MODEL,ACTRESS,INFLUENCERS YOU {'\n'}   CAN HAVE ANYTHING IN LIFE {'\n'}  LIFE IF YOU DRESS FOR IT </Text>
            </View>

          <BottomIcons/>


            <View>

              <FlatList
                contentContainerStyle={{ paddingVertical: 3, }}
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={this.state.data}

                columnWrapperStyle={{ marginHorizontal: 2, marginVertical: 2, }}
                renderItem={({ item }) =>
               { 
                var displayRating = false;

              toggleRating = () =>{
                    this.displayRating = !this.displayRating
                }
                return(
                <View style={{ padding: 5, flex: 1 }}>
                <Image

                  style={{ height: 200, width: '100%', borderRadius: 20, }}
                  source={item.picture} />
 <Star  onPress={()=>this.toggleRating()} name="star" size={20} color='#FFC00B' />
               {displayRating==true ? 
                <StarRating

                  containerStyle={{ width: 50, marginLeft: 20 }}
                  disabled={false}
                  maxStars={5}
                  visible ={displayRating}
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
             
               );}
                 
                }

              />
              <View style={{ backgroundColor: 'blue', }}>



              </View>

            </View>

          </ImageBackground>

        </ScrollView>
      </View>
    )
  }


}
