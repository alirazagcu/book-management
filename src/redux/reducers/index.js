import { combineReducers } from "redux";
import { signUpReducers, signInReducers, addBookReducers,
     getAllBooksByUserReducers, updateBookStatusReducers,
      getBookedBooksReducers, updateBookingStatusReducers } from "./reducers";

const reducer = combineReducers({
    signUpReducers,
    signInReducers,
    addBookReducers, 
    getAllBooksByUserReducers,
    updateBookStatusReducers, 
    getBookedBooksReducers,
    updateBookingStatusReducers
});

export default reducer;
