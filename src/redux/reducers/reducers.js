import * as Actions from "../actions";

  const INITIALSTATE = {
      signUpToken : {}
  };
  
  export const signUpReducers = (  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  }, action) => {
    switch (action.type) {
    case Actions.SIGNUP:
        return{
            ...state,
            errMsg: null,
            isLoading: false,
            data: action.payload,
            success: true,
        };
    case Actions.SIGNOUT:
      return {
        ...state,
        errMsg: null,
        data: {},
        isLoading: false,
        success: true,
      };
      default:
        return state;
    }
  };
  
  export const signInReducers = (  state = {
    isLoading: false,
    errMsg: null,
    data: [],
    success: "",
  }, action) => {
    switch (action.type) {
    case Actions.SIGNIN:
        return{
            ...state,
            errMsg: null,
            isLoading: false,
            data: action.payload,
            success: true,
        };
        case Actions.RESET_SIGN_IN:
          return {
            ...state,
            errMsg: null,
            data: {},
            isLoading: false,
            success: true,
          };
      default:
        return state;
    }
  };