const INITIAL_STATE = {
    signUp: null
};
const applysignUp = (state, action) => ({
    ...state,
    signUp: action.payload
});
function signUpReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SignUp': {
            return applysignUp(state, action);
        }
        default:
            return state;
    }
}
export default signUpReducer;