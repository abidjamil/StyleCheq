import React from 'react'
import { Icon, FlatList, View, Image, Text, TouchableOpacity } from 'react-native'
import { Avatar, Accessory, Input } from 'react-native-elements';
import Style from './ChatHistoryStyle'
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
import moment from "moment";
import { Searchbar } from 'react-native-paper';

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
        }
        that = this;
    }
    GetPreviousChat() {
        const request = {
            pageNumber: ++this.state.pageNumber,
            rowsPerPage: 10,
        }

        NetworkActions.GetChatHistory(request, this.props.auth.data?.token).then
            (function (response) {
                that.setState({
                    data: response.data,
                    copyData: response.data
                })

            })
            .catch(function (error) {
                alert(error)
            })
    }

    UNSAFE_componentWillMount() {
        this.GetPreviousChat()
    }

    handleSearch(text) {
        this.setState({ searchQuery: text })
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource and update FilteredDataSource
            const newData = this.state.data.filter(
                function (item) {
                    // Applying filter for the inserted text in search bar
                    const itemData = item.username
                        ? item.username.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
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


    render() {
        return (
            <View style={{ height: '100%', top: Platform.OS === 'ios' ? 50 : 10, paddingBottom: Platform.OS === 'ios' ? 80 : 10, backgroundColor: 'white' }}>
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

                    </View>


                </View>
                <Text style={Style.heading}>
                    Search
                </Text>

                <Searchbar
                    inputStyle={{ fontSize: 14, fontFamily: 'Poppins-Regular' }}
                    style={{ margin: 20, marginBottom: 0, borderRadius: 20, color: 'white' }}
                    placeholder="Search by username"
                    onChangeText={(text) => this.handleSearch(text)}
                    value={this.state.searchQuery}
                />


                <Text style={{ ...Style.heading, marginTop: 20 }}>
                    Chats
                </Text>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: 10, height: '65%' }}
                    data={this.state.data}
                    extraData={this.state.refresh}
                    keyExtractor={(item) => item.userId}
                    //ListFooterComponent={this.renderFooter.bind(this)}
                    // onEndReachedThreshold={0.1}
                    // onEndReached={this.handleLoadMore.bind(this)}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => NavigationService.navigate('ChatScreen', item)}>
                            <View style={{ flex: 1, backgroundColor: 'white', marginStart: '5%', marginEnd: '5%' }}>
                                <View style={{ flexDirection: 'row', margin: 10, height: 50 }}>
                                    <View style={{ flex: 1 }}>
                                        <Avatar
                                            size="medium"
                                            rounded
                                            title={this.state.data.name}
                                            source={{ uri: item.profilePicture || "https://i.pinimg.com/originals/64/57/c1/6457c16c1691edc5041e437cda422d98.jpg" }}

                                        />
                                    </View>
                                    <View style={{ flex: 3 }}>
                                        <View style={{ width: '120%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={Style.userName}>
                                                {item.username}
                                            </Text>
                                            <Text style={Style.messageTime}>
                                                {moment(item.createdAt).format("hh:mm A")}

                                            </Text>
                                        </View>
                                        <Text style={{ ...Style.messageText, fontFamily: item.isRead ? 'Poppins-Regular' : 'Poppins-Bold' }}>
                                            {item.body ? item.body : 'Photo'} {item.isRead ? <View></View> : <View style={{ paddingStart: 15, borderRadius: 20, width: 10, height: 10, backgroundColor: 'red' }} />}
                                        </Text>
                                    </View>

                                    <View style={{ flex: 1 }}>
                                        <TouchableOpacity
                                            onPress={() => this.followPeople(item)}>
                                            <Text style={item.followStatus == 'Following' ? Style.rowStatusFollowing : Style.rowStatusFollow}>
                                                {item.followStatus}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>


                            </View>
                        </TouchableOpacity>
                    )
                    }

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
