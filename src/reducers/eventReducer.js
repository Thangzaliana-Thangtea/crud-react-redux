import { ADD_EVENT, FETCH_EVENT, DELETE_EVENT, SEARCH_EVENT } from "../actions/action-constant";


var initialState = {
    events: []
}
export function eventReducer(state = [], action) {
    switch (action.type) {
        case ADD_EVENT:
            console.log("Add event");
            state.push(action.payload)
            return state;
        case FETCH_EVENT:
            console.log("fetch event")
            return state;
        case DELETE_EVENT:
            console.log("delete event")
            return state.filter(item => item.id !== action.payload.id)
        case SEARCH_EVENT:
            console.log("search event");
            const q=action.payload;
            return state.filter(item=>item.title.match(q))
        default:
            return state;
    }
}