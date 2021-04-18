// import {
//     SIGNUP
// } from "./action-types";
import axios from 'axios';

export const SIGNUP = "SIGNUP";

const baseUrl = "http://192.168.1.3:3000/api/v1/"
const signUp = (data) => ({
        type: SIGNUP,
        payload: data
})

export const signUpService = (data) =>{
    console.log("data", data);
    return (dispatch) => {
        axios.post(`${baseUrl}user/registerUser`, data).then(res => {
            if(res.status === 200){
                console.log("res data", res.data.user);
                    dispatch({
                        type: SIGNUP,
                        payload: res.data.user
                    })
            }
            else {
                dispatch({
                    type: SIGNUP,
                    payload: {}
                })
            }
        }).catch(e =>{
            console.log(e);
                dispatch(signUp({}))
        })
    }
}
  