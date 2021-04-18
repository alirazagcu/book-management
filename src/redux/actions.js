import {
    SIGNUP
} from "./action-types";
import axios from 'axios';

const baseUrl = "http://192.168.1.3:3000/api/v1/"
export function signUp(data) {
    console.log("datin action ", data)
    return {
        type: SIGNUP,
        payload: data
    };
}

export const signUpService = (data) =>{
    console.log("data", data);
    return (dispatch) =>{
    axios.post(`${baseUrl}userregisterUser`, data).then(res => {
        console.log("res data", res);
        if(res.status === 200){
            console.log("res data", res.data.user);
            
                dispatch(signUp(res.data.user))
        
        }
    }).catch(e =>{
        console.log(e);
            dispatch(signUp({}))
    })
    }
}
  