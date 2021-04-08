const INITIAL_STATE = {
    notification: null
};
const applyNotification = (state, action) => ({
    ...state,
    notification: action.payload
});
function notificationReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'Notification': {
            return applyNotification(state, action);
        }
        default:
            return state;
    }
}
export default notificationReducer;