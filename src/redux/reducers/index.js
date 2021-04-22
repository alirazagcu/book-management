import { combineReducers } from "redux";
import { signUpReducers, signInReducers } from "./reducers";

const reducer = combineReducers({
    signUpReducers,
    signInReducers
});

export default reducer;
