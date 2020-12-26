import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import authTypeReducer from '../Stores/AuthReducer/AuthReducer'
import signUpReducer from '../Stores/AuthReducer/SignupReducer'

export default () => {
  const rootReducer = combineReducers({
    authTypeReducer: authTypeReducer,
    signUpReducer: signUpReducer
  })

  return configureStore(rootReducer, rootSaga)
}
