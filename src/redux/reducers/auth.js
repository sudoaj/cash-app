import { DEFAULT_ACTION } from "../actions/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case DEFAULT_ACTION:
            return state

        default:
            return state
    }
}