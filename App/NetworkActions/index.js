import { GetPreviousChat, ChatAttachment, GetProfileSelf, GetProfile, GetTimeline, AuthAction, SignupStep1, SignupStep2, SignupStep3, ForgotStep1, ForgotStep2, ForgotStep3, GetPeopleToFollow } from './NetworkActions';

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
    GetPreviousChat: GetPreviousChat

}
export {
    NetworkActions
}