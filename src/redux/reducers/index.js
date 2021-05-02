import { combineReducers } from "redux";
import { signUpReducers, signInReducers, addBookReducers, searchByFieldReducers, createBookReducers } from "./reducers";

const reducer = combineReducers({
    signUpReducers,
    signInReducers,
    addBookReducers,
    searchByFieldReducers,
    createBookReducers
});

export default reducer;
