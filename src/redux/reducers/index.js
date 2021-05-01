import { combineReducers } from "redux";
import { signUpReducers, signInReducers, addBookReducers } from "./reducers";

const reducer = combineReducers({
    signUpReducers,
    signInReducers,
    addBookReducers
});

export default reducer;
