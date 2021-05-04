import { AddPostToCollection, GetAccountSettings, ReadAllMessage, BlockUser, GetPrivacyList, GETFCM, GetCollectionPosts, NewCollection, GetCollections, UpdatePrivacy, GetPeopleToFollowSearch, GetTrendingWithHash, GetTrending, UpdateName, UpdateBio, FollowUser, GetUserPosts, GetNotifications, LikePost, RatePost, RateIcon, AddComment, GetComments, NewPost, GetUsers, GetChatHistory, GetPreviousChat, ChatAttachment, GetProfileSelf, GetProfile, GetTimeline, AuthAction, SignupStep1, SignupStep2, SignupStep3, ForgotStep1, ForgotStep2, ForgotStep3, GetPeopleToFollow } from './NetworkActions';

const NetworkActions = {
    AuthAction: AuthAction,
    SignupStep1: SignupStep1,
    SignupStep2: SignupStep2,
    SignupStep3: SignupStep3,
    ForgotStep1: ForgotStep1,
    ForgotStep2: ForgotStep2,
    ForgotStep3: ForgotStep3,
    GetPeopleToFollow: GetPeopleToFollow,
    GetTimeline: GetTimeline,
    GetProfileSelf: GetProfileSelf,
    GetProfile: GetProfile,
    ChatAttachment: ChatAttachment,
    GetPreviousChat: GetPreviousChat,
    GetChatHistory: GetChatHistory,
    NewPost: NewPost,
    GetUsers: GetUsers,
    AddComment: AddComment,
    GetComments: GetComments,
    RateIcon: RateIcon,
    RatePost: RatePost,
    LikePost: LikePost,
    GetNotifications: GetNotifications,
    GetUserPosts: GetUserPosts,
    FollowUser: FollowUser,
    UpdateName: UpdateName,
    UpdateBio: UpdateBio,
    GetTrending: GetTrending,
    GetTrendingWithHash: GetTrendingWithHash,
    GetPeopleToFollowSearch: GetPeopleToFollowSearch,
    UpdatePrivacy: UpdatePrivacy,
    GetCollections: GetCollections,
    NewCollection: NewCollection,
    GetCollectionPosts: GetCollectionPosts,
    GETFCM: GETFCM,
    GetPrivacyList: GetPrivacyList,
    BlockUser: BlockUser,
    ReadAllMessage: ReadAllMessage,
    GetAccountSettings: GetAccountSettings,
    AddPostToCollection: AddPostToCollection

}
export {
    NetworkActions
}