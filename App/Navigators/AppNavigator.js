import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from 'App/Containers/Login/Login'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import Signup from '../Containers/Signup/Signup'
import SignupUsername from '../Containers/SignupUsername/SignupUsername'
import TermsOfService from '../Containers/TermsOfService/TermsOfService'
import PrivacyPolicy from '../Containers/PrivacyPolicy/PrivacyPolicy'
import PictureSelection from '../Containers/PictureSelection/PictureSelection'
import Welcome from '../Containers/Welcome/Welcome'
import ForgotPassword from '../Containers/ForgotPasswordEmail/ForgotPassword'
import VerifyCode from '../Containers/VerifyCodeForForgot/VerifyCode'
import SetPassword from 'App/Containers/SetPassword/SetPassword'
import PeopleToFollow from 'App/Containers/PeopleToFollow/PeopleToFollow'
import NewsFeed from 'App/Containers/NewsFeed/NewsFeed'
import AccountSetting from '../Containers/AccountSetting/AccountSetting'
import SelectTags from '../Containers/SelectTags/SelectTags'
import UploadPost from '../Containers/UploadPost/UploadPost'
import ExploreTrending from '../Containers/ExploreTrending/ExploreTrending'
import EditBio from '../Containers/EditBio/EditBio'
import UserName from '../Containers/UserName/UserName'
import FontStyle from '../Containers/FontPicker/FontPicker'
import EditProfile from '../Containers/EditProfile/EditProfile'
import TextColorPicker from '../Containers/TextColorPicker/TextColorPicker'
import AccountProfile from '../Containers/AccountProfile/AccountProfile'
import ProfileRating from '../Containers/ProfileRating/ProfileRating'
import Notificaton from '../Containers/Notification/Notification'
import ProfileImage from '../Containers/ProfileImage/ProfileImage'
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */


const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    LoginScreen: LoginScreen,
    SignupScreen: Signup,
    SignupUsernameScreen: SignupUsername,
    TermsOfServiceScreen: TermsOfService,
    PrivacyPolicyScreen: PrivacyPolicy,
    PictureSelectionScreen: PictureSelection,
    WelcomeScreen: Welcome,
    ForgotScreen: ForgotPassword,
    VerifyCode: VerifyCode,
    SetPasswordScreen: SetPassword,
    PeopleToFollow: PeopleToFollow,
    NewsFeedScreen: NewsFeed,
    AccountSetting:AccountSetting,
    SelectTags:SelectTags,
    UploadPost:UploadPost,
    ExploreTrending:ExploreTrending,
    EditBio:EditBio,
    UserName:UserName,
    FontStyle:FontStyle,
    EditProfile:EditProfile,
    TextColorPicker:TextColorPicker,
    AccountProfile:AccountProfile,
    ProfileRating:ProfileRating,
    Notificaton:Notificaton,
    ProfileImage:ProfileImage
  },
  {
    animationEnabled: false,
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
