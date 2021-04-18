import {
    SIGNUP
} from "./action-types";
import { combineReducers } from "redux";
  
  const INITIALSTATE = {
      signUpToken : {}
  };
  
  export const appReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
    case SIGNUP:{
      console.log("reduxer ", action.payload)
        return{
            ...state,
            signUpData: action.payload
        }
    }
      default:
        return state;
    }
  };
  