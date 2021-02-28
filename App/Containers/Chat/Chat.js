import React from 'react'
import { Icon, View, Image, Text, TouchableOpacity } from 'react-native'
import { GiftedChat, Bubble, InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat'
import Style from './ChatStyle'
import { connect } from 'react-redux'
import { ApplicationStyles, Helpers, Images, Metrics, Colors } from 'App/Theme'
import { renderInputToolbar, renderActions, renderComposer, renderSend } from '../../Components/inputToolbar';
// ES6 import or TypeScript
import { io } from "socket.io-client";
import Icons from 'react-native-vector-icons/Ionicons';
import BACK from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker'
import Message from 'react-native-vector-icons/Entypo';
import NavigationService from 'App/Services/NavigationService'
import { NetworkActions } from '../../NetworkActions'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import API from '../../Config/networkSetup';

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
var that;
class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber: 0,
            isLoadingEarlier: true,
            loading: false,
            isTyping: false,
            messages: [],
            isFirstTime: true,
            userData: props.navigation.state.params
        }
        that = this;
    }


    setIsTyping = () => {
        this.setState({
            isTyping: !this.state.isTyping,
        })
    }
    renderBubble = props => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: '#E9E9E9',
                    },
                    right: {
                        backgroundColor: Colors.primaryColorLogin,
                    },
                }}
            />
        );
    }
    renderActions = props => {
        return (
            <Actions
                {...props}
                containerStyle={{
                    width: 44,
                    height: 44,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 4,
                    marginRight: 4,
                    marginBottom: 0,
                }}
                icon={() => (
                    <TouchableOpacity
                        onPress={() => this.chooseImage()}
                        style={{ flexDirection: 'row' }}>
                        <Image
                            resizeMode="contain"
                            style={{ width: 27, height: 27 }}
                            source={Images.cameraIcon} />
                    </TouchableOpacity>
                )}
            />
        );
    }

    renderComposer = props => {
        return (
            <Composer
                {...props}
                textInputStyle={{
                    color: '#222B45',
                    fontFamily: 'Poppins-Regular',
                    borderRadius: 5,
                    paddingTop: 8.5,
                    marginLeft: 0,
                }}
            />
        );
    }
    renderSend = props => {
        return (
            <Send
                {...props}
                disabled={!props.text}
                containerStyle={{
                    width: 44,
                    height: 44,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 4,
                }}
            >
                <Text>Send</Text>
            </Send>)
    }
    renderInputToolbar = props => {
        return (
            <InputToolbar
                {...props}
                containerStyle={{

                    paddingTop: 6,
                }}
                primaryStyle={{ alignItems: 'center' }}
            />
        );
    }

    GetPreviousChat() {
        const request = {
            pageNumber: ++this.state.pageNumber,
            rowsPerPage: 10,
            receiverId: this.state.userData.userId
        }

        NetworkActions.GetPreviousChat(request, this.props.auth.data?.token).then
            (function (response) {
                that.setState({
                    isLoadingEarlier: false
                })
                if (response.data.length > 0) {
                    that.setState({
                        messages: [...response.data.reverse(), ...that.state.messages]
                    });
                    if (that.state.isFirstTime) {
                        that.setState({
                            isFirstTime: false
                        })
                        that.giftedChatRef.scrollToBottom(true)
                    }
                    else {
                        that.giftedChatRef.scrollToTop(true);
                    }
                }

            })
            .catch(function (error) {

            })
    }

    UNSAFE_componentWillMount() {
        this.GetPreviousChat()
        // const socket = io.connect('http://ec2-3-224-83-45.compute-1.amazonaws.com:4000?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1QzMxNDgwLTNBNDAtMTFFQi04MzMxLTAzNTNGQ0UwNzc0MyIsInVzZXJuYW1lIjoiYWJpZDU1IiwidHlwZSI6IlVTRVIiLCJjcmVhdGVkT24iOiIyMDIxLTAyLTAyVDA5OjA0OjAwWiIsImlhdCI6MTYxMjI1NjY0MCwiZXhwIjoxNjEzNTUyNjQwfQ.7AxmICQulTatNss_BkiSlM6AzVaLkbKWyg9ZBkw71y0&name=abid');

        this.socket = io('http://ec2-3-224-83-45.compute-1.amazonaws.com:4000', {
            query: {
                token: this.props.auth.data?.token,
                sendToUserId: this.state.userData.userId
            }
        });

        this.socket.on('connect', function (e) {
            console.log("on Connect");
        })

        this.socket.on('connect_error', (err) => {
            alert(err)
        });

        // this.socket = io("http://ec2-3-224-83-45.compute-1.amazonaws.com:4000?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk1QzMxNDgwLTNBNDAtMTFFQi04MzMxLTAzNTNGQ0UwNzc0MyIsInVzZXJuYW1lIjoiYWJpZDU1IiwidHlwZSI6IlVTRVIiLCJjcmVhdGVkT24iOiIyMDIxLTAyLTAyVDA5OjA0OjAwWiIsImlhdCI6MTYxMjI1NjY0MCwiZXhwIjoxNjEzNTUyNjQwfQ.7AxmICQulTatNss_BkiSlM6AzVaLkbKWyg9ZBkw71y0&name=abid");
        this.socket.on("new view private message", msg => {
            console.log(msg)
            this.setState({
                messages: [...this.state.messages, ...msg]
            });

        });
    }
    messageIdGenerator() {
        // generates uuid.
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            let r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
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
                var formData = new FormData();
                formData.append("id", "!");
                formData.append("attachment", {
                    uri: Platform.OS === 'ios' ? this.state.userImage.uri : 'file://' + this.state.userImage.path,
                    type: this.state.userImage.type,
                    name: "MyPic"
                });
                console.log(API)
                this.setState({ loading: true })
                fetch('http://ec2-3-224-83-45.compute-1.amazonaws.com:4000/api/v1/user/attachment', {
                    method: 'post',
                    headers: {
                        'Authorization': "Bearer " + this.props.auth.data?.token,
                    },
                    body: formData
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        that.setState({ loading: false })
                        const message = {};
                        message._id = this.messageIdGenerator();
                        message.createdAt = Date.now();
                        message.user = {
                            _id: this.props.auth?.data?.user?.id,
                            avatar: this.props.auth?.data?.user?.profilePicture
                        };
                        message.image = responseData.data;
                        message.text = ""
                        const messages = [];
                        messages[0] = message
                        this.onSend(messages)
                    })
                    .catch((err) => {
                        that.setState({ loading: false })
                        alert(err)
                    })


                // NetworkActions.ChatAttachment(formData, this.props.auth.data?.token).then
                //     (function (response) {
                //         that.setState({ loading: false })
                //         const message = {};
                //         message._id = this.messageIdGenerator();
                //         message.createdAt = Date.now();
                //         message.user = {
                //             _id: this.props.auth?.data?.user?.id,
                //             avatar: this.props.auth?.data?.user?.profilePicture
                //         };
                //         message.image = response.data;
                //         message.messageType = "image";
                //         that.socket.emit("NEW_MESSAGE", message);
                //     })
                //     .catch(function (error) {
                //         that.setState({ loading: false })
                //         console.log(JSON.stringify(error))
                //     })

            }
        });

    }
    onSend(messages = []) {
        console.log(messages)
        this.socket.emit("new private message", messages);
    }
    onLoadEarlier() {
        that.setState({
            isLoadingEarlier: true,
        })
        that.GetPreviousChat()
    }
    renderMessageText = (props) => {
        const {
            currentMessage,
        } = props;
        return (
            <Text style={Style.messageText}> {currentMessage.text}</Text >
        );
    }
    render() {
        return (
            <View style={{ height: '100%', top: Platform.OS === 'ios' ? 50 : 10, paddingBottom: Platform.OS === 'ios' ? 80 : 10 }}>
                <OrientationLoadingOverlay
                    visible={this.state.loading}
                    color={Colors.black}
                    indicatorSize="large"
                    messageFontSize={12}
                    message=""
                />
                <View style={Style.firstBox, { paddingHorizontal: 1 }}>
                    <View style={Style.fieldsLine}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => NavigationService.goBack()}
                                style={{ flexDirection: 'row' }}>
                                <BACK name="left" size={23}></BACK>
                                <Text style={Style.privacyBtn}>back</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={Style.userName} > {this.state.userData.username}</Text>
                        </View>

                    </View>
                </View>

                <GiftedChat
                    ref={ref => this.giftedChatRef = ref}
                    loadEarlier={true}
                    messages={this.state.messages}
                    showUserAvatar={true}
                    inverted={false}
                    isAnimated={true}
                    renderAvatarOnTop={true}
                    isLoadingEarlier={this.state.isLoadingEarlier}
                    onLoadEarlier={this.onLoadEarlier}
                    renderActions={this.renderActions}
                    renderInputToolbar={this.renderInputToolbar}
                    isTyping={this.state.isTyping}
                    renderBubble={this.renderBubble}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: this.props.auth?.data?.user?.id,
                        avatar: this.props.auth?.data?.user?.profilePicture
                    }}


                />
            </View>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)
