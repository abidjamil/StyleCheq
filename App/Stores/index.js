import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import authTypeReducer from '../Stores/AuthReducer/AuthReducer'
import signUpReducer from '../Stores/AuthReducer/SignupReducer'
import timelineReducer from '../Stores/AuthReducer/TimelineReducer'

export default () => {
  const rootReducer = combineReducers({
    authTypeReducer: authTypeReducer,
    signUpReducer: signUpReducer,
    timelineReducer: timelineReducer
  })

  return configureStore(rootReducer, rootSaga)
}
