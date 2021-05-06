import React from 'react'
import {
  Platform,
  Dimensions,
  Text,
  Image,
  View,
  FlatList,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { connect } from 'react-redux'
import { NetworkActions } from '../../NetworkActions'
import Style from './NewsFeedStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay'
import NavigationService from 'App/Services/NavigationService'
import { Avatar, Accessory, Icon, Input } from 'react-native-elements'
import { Searchbar, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BottomSheet } from 'react-native-btr'
import BottomIcons from '../../Components/BottomIcons'
import ParsedText from 'react-native-parsed-text'
import moment from 'moment'
import Star from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import { Rating, AirbnbRating } from 'react-native-elements'
import BackgroundVideo from './BackgroundVideo'
var that

class NewsFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      error: '',
      commentsVisible: false,
      refresh: true,
      isLoading: false,
      isCommentLoading: false,
      data: props.timelineData,
      commentsPageNumber: 1,
      postsPageNumber: 1,
      commentsData: [],
      ratingModal: false,
      loadingPosts: false,
      collectionModal: false
    }

    that = this
  }

  UNSAFE_componentWillMount() {
    this.GetTimelineData()
    this.getCollections()
  }
  handleLetsExploreAction() { }

  GetTimelineData() {
    const Request = {
      pageNumber: this.state.postsPageNumber,
      rowsPerPage: 10,
    }
    NetworkActions.GetTimeline(Request, that.props.auth.data.token)
      .then(function (response) {
        console.log()
        that.setState({ isLoading: false, loadingPosts: false })
        if (that.state.postsPageNumber === 1) {
          that.setState({ data: [] })
        }
        that.setState({
          data: [...that.state.data, ...response.data],
        })
        that.props.timeline()
      })
      .catch(function (error) {
        alert(error)
        that.setState({ isLoading: false })
      })
  }
  toggleComments(item) {
    if (this.state.commentsVisible) {
      this.setState({ commentsPageNumber: 1, commentsData: [] })
    } else {
      this.setState({ currentPostId: item.postId, postByUserId: item.userId })
      this.getComments(item.postId)
    }
    this.setState({ commentsVisible: !this.state.commentsVisible })
  }

  getComments = (postId) => {
    this.setState({ isCommentLoading: true })
    const Request = {
      pageNumber: this.state.commentsPageNumber,
      rowsPerPage: 10,
      postId: postId,
    }
    console.log(Request)
    NetworkActions.GetComments(Request, that.props.auth.data.token)
      .then(function (response) {
        that.setState({ isCommentLoading: false })
        console.log(response.data)
        if (response != null) {
          if (response.status == 200) {
            that.setState({
              commentsData: [...that.state.commentsData, ...response.data],
            })
          }
        }
      })
      .catch(function (error) {
        console.log('error' + JSON.stringify(error))
        that.setState({ isCommentLoading: false })
      })
  }

  handleSearch(text) {
    this.setState({ searchQuery: text })
  }

  getIcon = (tag) => {
    switch (tag) {
      case 'PhysiqueTag':
        return Images.bodyIcon
      case 'TopTag':
        return Images.clothesIcon
      case 'MakeupTag':
        return Images.makeupIcon
      case 'HairsTag':
        return Images.hairIcon
      case 'TattoTag':
        return Images.tattoIcon
      case 'JewelryTag':
        return Images.jeweleryIcon
      case 'TrouserTag':
        return Images.pentIcon
      case 'BagsTag':
        return Images.bagIcon
      case 'HatTag':
        return Images.hatIcon
      case 'ShoesTag':
        return Images.shoeIcon
    }
  }
  followPeople(item) {
    this.setState({
      refresh: !this.state.refresh,
    })
    console.log(item)
    item.followStatus = 'Following'
  }
  getCollections() {
    NetworkActions.GetCollections(that.props.auth.data.token).then
      (function (response) {
        that.setState({ isLoading: false })
        if (response != null) {
          console.log("Collection", response)
          if (response.status == 200) {
            that.setState({
              collectionsData: response.data
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
  handleComment = (text) => {
    that.setState({ currentComment: text })
  }
  onLikePost(item) {
    console.log(item)
    that.setState({ collectionModal: true, selectedPostIdForCollection: item.postId })


    // const Request = {
    //   postId: item.postId,
    //   postByUserId: item.userId,
    //   status: item.isLiked > 0 ? 0 : 1,
    // }
    // console.log(Request)
    // NetworkActions.LikePost(Request, that.props.auth.data.token)
    //   .then(function (response) {
    //     that.setState({ isLoading: false })
    //     console.log(response)
    //     if (response != null) {
    //       if (response.status == 200) {
    //         if (item.isLiked > 0) {
    //           item.isLiked = 0
    //         } else {
    //           item.isLiked = 1
    //         }
    //         that.setState({
    //           refresh: !that.state.refresh,
    //         })
    //       }
    //     }
    //   })
    //   .catch(function (error) {
    //     alert('error' + JSON.stringify(error))
    //     that.setState({ isLoading: false })
    //   })
  }
  addComment = () => {
    that.textInput.clear()
    if (this.state.currentComment != null) {
      this.setState({
        refresh: !this.state.refresh,
      })

      const Request = {
        postByUserId: this.state.postByUserId,
        postId: this.state.currentPostId,
        comment: this.state.currentComment,
      }

      NetworkActions.AddComment(Request, that.props.auth.data.token)
        .then(function (response) {
          that.setState({ isLoading: false })
          console.log(response)
          if (response != null) {
            if (response.status == 200) {
              var comment = response.data
              comment.lastName = comment.lastname
              comment.firstName = comment.firstname
              that.setState({
                commentsData: [comment, ...that.state.commentsData],
              })
            }
          }
        })
        .catch(function (error) {
          alert('error' + JSON.stringify(error))
          that.setState({ isLoading: false })
        })
    }
  }

  renderText(matchingString, matches) {
    // matches => ["[@michel:5455345]", "@michel", "5455345"]
    let pattern = /\[(@[^:]+):([^\]]+)\]/i
    let match = matchingString.match(pattern)
    return `${match[1]}`
  }

  handleNamePress(name) {
    NavigationService.navigate('ProfileImage', name)
  }

  handleCommentsLoadMore() {
    this.setState({ commentsPageNumber: ++this.state.commentsPageNumber })
    this.getComments(this.state.currentPostId)
  }
  handlePostsLoadMore() {
    this.setState({ loadingPosts: true, postsPageNumber: ++this.state.postsPageNumber })
    this.GetTimelineData()
  }

  handlePullToRefresh() {
    this.setState({ postsPageNumber: 1 })
    this.GetTimelineData()
  }
  _renderFooter = () => {
    return this.state.loadingPosts ? (
      <View style={{ marginBottom: 30 }}>
        <ActivityIndicator color="#000000" size="large" />
      </View>
    ) : null;
  };
  _renderEmptyCollection = () => {
    return this.state.loadingPosts ? (
      <View style={{ flex: 1 }}>
        <ActivityIndicator color="#00FF00" size="large" />
      </View>
    ) : null;
  };
  addToCollection(item) {
    const request = {
      postId: this.state.selectedPostIdForCollection,
      collectionsId: item
    }
    that.setState({
      isLoading: true,
    })
    console.log(request)
    NetworkActions.AddPostToCollection(request, that.props.auth.data.token).then
      (function (response) {
        console.log(response)
        that.setState({
          isLoading: false,
          collectionModal: false
        })
      })
      .catch(function (error) {
        that.setState({
          isLoading: false
        })
        alert(JSON.stringify(error))
      })
  }
  renderIcon = (parentData, { item }) => {
    return (
      <View style={{ paddingTop: 5, paddingBottom: 5, alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ ratingModal: true, selectedIcon: { icon: item, post: parentData } })
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Star name="star" size={10} color="#FFC00B" />
            <Text style={{ ...Style.ratingText, marginTop: 1, marginStart: 1, fontSize: 11 }}>
              {' '}
              {item.avgRating}{' '}
            </Text>
          </View>
          <Image
            resizeMode="contain"
            style={{ height: 35, width: 35, resizeMode: 'contain' }}
            source={this.getIcon(item.tagName)}
          />
          <Text style={{ ...Style.ratingText, marginTop: 1, marginStart: 1, fontSize: 11 }}>
            {item.totalRating}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const windowHeight = Dimensions.get('window').height
    const windowHeightFull = Dimensions.get('window').height
    return (
      <SafeAreaView
        style={{
          height: windowHeight,
          flexDirection: 'column',
          width: '100%',
          top: 0,
        }}
      >
        {/* Loader */}
        <OrientationLoadingOverlay
          visible={that.state.isLoading}
          color={Colors.primaryColorLogin}
          indicatorSize="large"
          messageFontSize={12}
          message=""
        />
        <Modal
          onSwipeComplete={() => this.setState({ ratingModal: false })}
          swipeDirection="left"
          animationIn="zoomIn"
          animationOut="zoomOut"
          onBackdropPress={() => this.setState({ ratingModal: false })}
          onBackButtonPress={() => this.setState({ ratingModal: false })}
          isVisible={this.state.ratingModal}
        >
          <View
            style={{ width: '100%', height: 200, alignContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: 'black',
                opacity: 0.7,
                borderRadius: 10,
                flex: 1,
                width: '100%',
                alignContent: 'center',
                alignItems: 'center',
                paddingTop: 20,
              }}
            >
              <Image
                resizeMode="cover"
                style={{ height: 80, width: 80, resizeMode: 'contain', overflow: 'hidden' }}
                source={this.getIcon(this.state.selectedIcon?.icon?.tagName)}
              />
              <AirbnbRating
                showRating={false}
                count={5}
                defaultRating={0}
                size={30}
                onFinishRating={(value) => {
                  that.setState({
                    isLoading: true,
                  })
                  const request = {
                    postId: this.state.selectedIcon?.post?.postId,
                    tagName: this.state.selectedIcon?.icon?.tagName,
                    postByUserId: this.state.selectedIcon?.post?.userId,
                    rating: value,
                  }
                  console.log(request)
                  NetworkActions.RateIcon(request, that.props.auth.data.token)
                    .then(function (response) {
                      console.log(JSON.stringify(response))
                      that.setState({ ratingModal: false })
                      that.setState({
                        isLoading: false,
                      })
                    })
                    .catch(function (error) {
                      that.setState({
                        isLoading: false,
                      })
                    })
                }}
              />
            </View>
          </View>
        </Modal>

        <Modal
          onSwipeComplete={() => this.setState({ postRatingModal: false })}
          swipeDirection="left"
          animationIn="zoomIn"
          animationOut="zoomOut"
          onBackdropPress={() => this.setState({ postRatingModal: false })}
          onBackButtonPress={() => this.setState({ postRatingModal: false })}
          isVisible={this.state.postRatingModal}>
          <View
            style={{
              width: '100%',
              height: 200,
              opacity: 0.7,
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                backgroundColor: 'black',
                borderRadius: 10,
                flex: 1,
                width: '100%',
                alignContent: 'center',
                alignItems: 'center',
                paddingTop: 20,
              }}
            >
              <Image
                resizeMode="center"
                style={{ height: 100, width: 100, resizeMode: 'center' }}
                source={{ uri: this.state.selectedPostForRating?.postPicture }}
              />

              <AirbnbRating
                showRating={false}
                count={5}
                defaultRating={0}
                size={30}
                onFinishRating={(value) => {
                  that.setState({
                    isLoading: true,
                  })
                  const request = {
                    postId: this.state.selectedPostForRating.postId,
                    postByUserId: this.state.selectedPostForRating.userId,
                    rating: value,
                  }
                  NetworkActions.RatePost(request, that.props.auth.data.token)
                    .then(function (response) {
                      console.log(JSON.stringify(response))
                      that.setState({ postRatingModal: false })
                      that.setState({
                        isLoading: false,
                      })
                    })
                    .catch(function (error) {
                      that.setState({
                        isLoading: false,
                      })
                    })
                }}
              />
            </View>
          </View>
        </Modal>

        <Modal
          onSwipeComplete={() => this.setState({ collectionModal: false })}
          swipeDirection="left"
          animationIn="zoomIn"
          animationOut="zoomOut"
          propagateSwipe={true}
          onBackdropPress={() => this.setState({ collectionModal: false })}
          onBackButtonPress={() => this.setState({ collectionModal: false })}
          isVisible={this.state.collectionModal}
        >
          <View style={{ width: '100%', backgroundColor: 'white', height: 400, alignContent: 'center', alignItems: 'center', paddingBottom: 20 }}>
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, padding: 20 }}> Collections </Text>
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, padding: 20 }}> Select the collection to add the post. </Text>
            <FlatList
              disableVirtualization={true}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 20, width: '100%', height: '100%' }}
              data={this.state.collectionsData}
              extraData={this.state.refresh}
              keyExtractor={(item) => item.collectionId}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => this.addToCollection(item.collectionId)}
                  style={{ width: '90%', height: 50, borderWidth: 1, alignSelf: 'center', borderRadius: 10, alignContent: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                  <Text style={{ color: 'black', fontFamily: 'Poppins-Bold', fontSize: 16 }}>{item.name}</Text>
                </TouchableOpacity>

              )} />
          </View>
        </Modal>

        {/* Comments Section */}
        <BottomSheet
          visible={this.state.commentsVisible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={() => this.toggleComments()}
          //Toggling the visibility state
          onBackdropPress={() => this.toggleComments()}
        //Toggling the visibility state
        >
          {/*Bottom Sheet inner View*/}
          <View style={Style.bottomNavigationView}>
            <View
              style={{
                marginStart: 10,
                marginEnd: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  maxHeight: 600,
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  backgroundColor: 'white',
                  width: '100%',
                }}
              >
                <Text style={Style.commentsHeader}>{this.state.commentsData?.length} comments</Text>

                <FlatList
                  ref={(list) => {
                    this.commentsList = list
                  }}
                  disableVirtualization={true}
                  showsVerticalScrollIndicator={false}
                  style={{ marginTop: 0 }}
                  data={this.state.commentsData}
                  extraData={this.state.refresh}
                  keyExtractor={(item) => item.commentId}
                  //ListFooterComponent={this.renderFooter.bind(this)}
                  onEndReachedThreshold={0}
                  onEndReached={this.handleCommentsLoadMore.bind(this)}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: 'white',
                        marginStart: '5%',
                        marginEnd: '5%',
                      }}
                    >
                      <View style={{ flexDirection: 'row', margin: 5, height: 50 }}>
                        <View style={{ marginLeft: 5, flex: 1 }}>
                          <Avatar size="medium" rounded source={{ uri: item.profilePicture }} />
                        </View>
                        <View style={{ flex: 5 }}>
                          <Text style={Style.commentUsername}>
                            {item.firstName || 'Missing' + ' ' + item.lastName || 'Name'}
                          </Text>

                          <Text style={Style.commentRowTime}>
                            {item.comment} {moment(item.commentCreatedAt).fromNow()}
                          </Text>
                        </View>
                      </View>
                    </View>
                  )}
                />
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                >

                  <TextInput
                    ref={(input) => {
                      this.textInput = input
                    }}
                    style={Style.inputField}
                    onChangeText={this.handleComment}
                    placeholder="Add comment"
                  />

                  <TouchableOpacity onPress={() => this.addComment()}>
                    <Image
                      resizeMode="contain"
                      style={{ height: 20, width: 20, flex: 1, marginEnd: 20 }}
                      source={Images.send}
                    />
                  </TouchableOpacity>
                </KeyboardAvoidingView>
              </View>
            </View>
          </View>
        </BottomSheet>

        <View style={{ paddingBottom: Platform.OS === 'ios' ? 80 : '27%' }}>
          {/* Posts Section */}

          <View
            style={{
              ...Style.fieldsLine,
              alignItems: 'center',
              paddingStart: 20,
              paddingRight: 20,
            }}
          >
            <TouchableOpacity onPress={() => NavigationService.navigate('UploadPost')}>
              <Image
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
                source={Images.cameraIcon}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Light' }}>Timeline</Text>

            <TouchableOpacity onPress={() => NavigationService.navigate('ProfileImageSelf')}>
              <Image
                resizeMode="contain"
                style={{ width: 25, height: 30 }}
                source={Images.profileIcon}
              />
            </TouchableOpacity>
          </View>

          {this.state.data?.length > 0 ?
            <FlatList
              disableVirtualization={true}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ marginTop: 0 }}
              data={this.state.data}
              disableVirtualization={true}
              extraData={this.state.refresh}
              pagingEnabled={true}
              snapToInterval={windowHeight - 80} // Adjust to your content width
              decelerationRate={'fast'}
              snapToAlignment={'start'}
              keyExtractor={(item) => item.postId}
              ListFooterComponent={this._renderFooter}
              onEndReachedThreshold={0.1}
              initialNumToRender={2}
              windowSize={2}
              removeClippedSubviews={true}
              maxToRenderPerBatch={2}
              onRefresh={() => this.handlePullToRefresh()}
              refreshing={this.state.isLoading}
              onEndReached={this.handlePostsLoadMore.bind(this)}
              renderItem={({ item, index }) => {

                return (
                  <View
                    style={{
                      width: '100%',
                      height: windowHeight - 80,
                      justifyContent: 'center',
                      alignItems: 'stretch',
                    }}
                  >
                    <View>
                      {item?.postPicture.substring(item?.postPicture.lastIndexOf('.') + 1) == "mp4" ? (
                        <BackgroundVideo
                          resizeMode="cover"
                          uri={item.postPicture}
                          index={index}
                          style={{
                            width: '100%',
                            justifyContent: 'space-around',
                            overflow: 'hidden',
                            height: '100%',
                          }}
                          source={{
                            uri: item.postPicture,
                          }}
                        >
                          <View style={{ flex: 1, marginStart: -20, marginTop: -15, alignSelf: 'flex-start', flexDirection: 'row', padding: 10 }}>
                            <TouchableOpacity
                              onPress={() =>
                                NavigationService.navigate(
                                  item.isMinePost == 0 ? 'ProfileImage' : 'ProfileImageSelf',
                                  item
                                )
                              }
                            >
                              <Avatar
                                size="medium"
                                rounded
                                source={{
                                  uri:
                                    item.profilePicture ||
                                    'https://i.pinimg.com/originals/64/57/c1/6457c16c1691edc5041e437cda422d98.jpg',
                                }}
                              />
                            </TouchableOpacity>

                            <View>
                              <Text style={Style.rowUsername}>{item.username}</Text>
                              <Text style={Style.rowTime}>
                                {moment(item.postCreatedAt).fromNow()}
                              </Text>
                            </View>
                          </View>
                          <View style={Style.leftSide}>
                            <FlatList
                              ref={(list) => {
                                this.commentsList = list
                              }}
                              disableVirtualization={true}
                              showsVerticalScrollIndicator={false}
                              style={{ marginTop: 0 }}
                              data={item.tags}
                              extraData={this.state.refresh}
                              keyExtractor={(item) => item.tagName}
                              renderItem={this.renderIcon.bind(this, item)}
                            />
                          </View>

                          <View style={Style.rightSide}>
                            <View
                              style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <TouchableOpacity
                                style={{ alignItems: 'center', justifyContent: 'center' }}
                                onPress={() =>
                                  this.setState({
                                    postRatingModal: true,
                                    selectedPostForRating: item,
                                  })
                                }
                              >
                                <Text style={Style.ratingText}>{item.avgRating}</Text>
                                <Image
                                  resizeMode="contain"
                                  style={{ height: 35, width: 35 }}
                                  source={Images.big_star}
                                />
                                <Text style={Style.ratingText}>Rate {item.totalRating}</Text>
                              </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                              <TouchableOpacity
                                style={{ justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => this.toggleComments(item)}
                              >
                                <Image
                                  resizeMode="contain"
                                  style={{ height: 30, width: 30 }}
                                  source={Images.commentIcon}
                                />
                                <Text style={Style.ratingText}>
                                  {item.totalComments?.length > 100 ? '100 +' : item.totalComments}
                                </Text>
                              </TouchableOpacity>
                            </View>

                            {/* <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                        <Image
                          resizeMode="contain"
                          style={{ height: 30, width: 30 }}
                          source={Images.shareIcon} />
                        <Text style={Style.ratingText}>Share</Text>
                      </View> */}

                            <View
                              style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <TouchableOpacity
                                style={{ justifyContent: 'center', alignItems: 'center' }}
                                onPress={() =>
                                  NavigationService.navigate(
                                    item.isMinePost == 0 ? 'ChatScreen' : 'ChatHistory',
                                    item
                                  )
                                }
                              >
                                <Image
                                  resizeMode="contain"
                                  style={{ height: 30, width: 30 }}
                                  source={Images.messageIcon}
                                />
                                <Text style={{ ...Style.ratingText, marginStart: 0 }}>Message</Text>
                              </TouchableOpacity>
                            </View>
                          </View>

                          <View style={Style.topRightSide}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              {/* <Image
                          resizeMode="contain"
                          style={{ height: 20, width: 10 }}
                          source={Images.three_dots} /> */}
                              <TouchableOpacity onPress={() => this.onLikePost(item)}>
                                <Image
                                  resizeMode="contain"
                                  style={{ height: 30, width: 30 }}
                                  source={item.isLiked > 0 ? Images.handIconBlue : Images.handIcon}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>

                          <ParsedText
                            style={Style.description}
                            parse={[
                              {
                                pattern: RegExp(item.username),
                                style: Style.name,
                                onPress: this.handleNamePress,
                              },
                              {
                                pattern: /@(\w+)+([.\s]?[a-zA-Z0-9]\w+)/,
                                style: Style.username,
                                onPress: this.handleNamePress,
                              },
                              { pattern: /#(\w+)/, style: Style.hashtag },
                            ]}
                            childrenProps={{ allowFontScaling: true }}
                          >
                            {item.username + ' : ' + item.description}
                          </ParsedText>
                        </BackgroundVideo>
                      ) : (
                          <ImageBackground
                            resizeMode="cover"
                            uri={item.postPicture}
                            index={index}
                            style={{
                              width: '100%',
                              justifyContent: 'space-around',
                              overflow: 'hidden',
                              height: '100%',
                            }}
                            source={{
                              uri: item.postPicture,
                            }}
                          >
                            <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
                              <TouchableOpacity
                                onPress={() =>
                                  NavigationService.navigate(
                                    item.isMinePost == 0 ? 'ProfileImage' : 'ProfileImageSelf',
                                    item
                                  )
                                }
                              >
                                <Avatar
                                  size="medium"
                                  rounded
                                  source={{
                                    uri:
                                      item.profilePicture ||
                                      'https://i.pinimg.com/originals/64/57/c1/6457c16c1691edc5041e437cda422d98.jpg',
                                  }}
                                />
                              </TouchableOpacity>

                              <View>
                                <Text style={Style.rowUsername}>{item.username}</Text>

                                <Text style={Style.rowTime}>
                                  {moment(item.postCreatedAt).fromNow()}
                                </Text>
                              </View>
                            </View>
                            <View style={Style.leftSide}>
                              <FlatList

                                disableVirtualization={true}
                                showsVerticalScrollIndicator={false}
                                style={{ marginTop: 0 }}
                                data={item.tags}
                                extraData={this.state.refresh}
                                keyExtractor={(item) => item.tagName}
                                renderItem={this.renderIcon.bind(this, item)}
                              />
                            </View>

                            <View style={Style.rightSide}>
                              <View
                                style={{
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <TouchableOpacity
                                  style={{ alignItems: 'center', justifyContent: 'center' }}
                                  onPress={() =>
                                    this.setState({
                                      postRatingModal: true,
                                      selectedPostForRating: item,
                                    })
                                  }
                                >
                                  <Text style={Style.ratingText}>{item.avgRating}</Text>
                                  <Image
                                    resizeMode="contain"
                                    style={{ height: 35, width: 35 }}
                                    source={Images.big_star}
                                  />
                                  <Text style={Style.ratingText}>Rate {item.totalRating}</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <TouchableOpacity
                                  style={{ justifyContent: 'center', alignItems: 'center' }}
                                  onPress={() => this.toggleComments(item)}
                                >
                                  <Image
                                    resizeMode="contain"
                                    style={{ height: 30, width: 30 }}
                                    source={Images.commentIcon}
                                  />
                                  <Text style={Style.ratingText}>
                                    {item.totalComments?.length > 100 ? '100 +' : item.totalComments}
                                  </Text>
                                </TouchableOpacity>
                              </View>

                              {/* <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                        <Image
                          resizeMode="contain"
                          style={{ height: 30, width: 30 }}
                          source={Images.shareIcon} />
                        <Text style={Style.ratingText}>Share</Text>
                      </View> */}

                              <View
                                style={{
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                <TouchableOpacity
                                  style={{ justifyContent: 'center', alignItems: 'center' }}
                                  onPress={() =>
                                    NavigationService.navigate(
                                      item.isMinePost == 0 ? 'ChatScreen' : 'ChatHistory',
                                      item
                                    )
                                  }
                                >
                                  <Image
                                    resizeMode="contain"
                                    style={{ height: 30, width: 30 }}
                                    source={Images.messageIcon}
                                  />
                                  <Text style={{ ...Style.ratingText, marginStart: 0 }}>Message</Text>
                                </TouchableOpacity>
                              </View>
                            </View>

                            <View style={Style.topRightSide}>
                              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {/* <Image
                          resizeMode="contain"
                          style={{ height: 20, width: 10 }}
                          source={Images.three_dots} /> */}
                                <TouchableOpacity onPress={() => this.onLikePost(item)}>
                                  <Image
                                    resizeMode="contain"
                                    style={{ height: 30, width: 30 }}
                                    source={item.isLiked > 0 ? Images.handIconBlue : Images.handIcon}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>

                            <ParsedText
                              style={Style.description}
                              parse={[
                                {
                                  pattern: RegExp(item.username),
                                  style: Style.name,
                                  onPress: this.handleNamePress,
                                },
                                {
                                  pattern: /@(\w+)+([.\s]?[a-zA-Z0-9]\w+)/,
                                  style: Style.username,
                                  onPress: this.handleNamePress,
                                },
                                { pattern: /#(\w+)/, style: Style.hashtag },
                              ]}
                              childrenProps={{ allowFontScaling: true }}
                            >
                              {item.username + ' : ' + item.description}
                            </ParsedText>
                          </ImageBackground>
                        )}
                    </View>
                  </View>
                )
              }}
            />
            : <View style={{ height: '91%', backgroundColor: 'black', alignContent: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontFamily: 'Poppins-Bold', textAlign: 'center' }}>
                No Posts Found
            </Text>
            </View>
          }
          <BottomIcons />
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.signUpReducer.signUp,
  auth: state.authTypeReducer.authType,
  timelineData: state.timelineReducer.timeline,
})

const mapDispatchToProps = (dispatch) => ({
  timeline: () => dispatch({ type: 'Timeline', payload: that.state.data }),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)
