const INITIAL_STATE = {
    timeline: null
};
const applyTimeLine = (state, action) => ({
    ...state,
    timeline: action.payload
});
function timelineReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'Timeline': {
            return applyTimeLine(state, action);
        }
        default:
            return state;
    }
}
export default timelineReducer;