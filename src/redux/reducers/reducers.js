import * as Actions from "../actions";

  const INITIALSTATE = {
      signUpToken : {}
  };
  
  export const signUpReducers = (state = INITIALSTATE, action) => {
    switch (action.type) {
    case Actions.SIGNUP:{
        return{
            ...state,
            data: action.payload
        }
    }
      default:
        return state;
    }
  };
  