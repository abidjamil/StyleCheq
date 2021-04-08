const INITIAL_STATE = {
    FCM: null
};
const applyFCM = (state, action) => ({
    ...state,
    FCM: action.payload
});
function FCMReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FCM': {
            return applyFCM(state, action);
        }
        default:
            return state;
    }
}
export default FCMReducer;