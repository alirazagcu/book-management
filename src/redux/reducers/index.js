import { combineReducers } from "redux";
import { signUpReducers, signInReducers, addBookReducers, searchByFieldReducers, createBookReducers, getNotificationReducers } from "./reducers";

const reducer = combineReducers({
    signUpReducers,
    signInReducers,
    addBookReducers,
    searchByFieldReducers,
    createBookReducers,
    getNotificationReducers
});

export default reducer;
