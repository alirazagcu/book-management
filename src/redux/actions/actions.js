// import {
//     SIGNUP
// } from "./action-types";
import axios from 'axios';

export const SIGNUP = "SIGNUP";
export const SIGNOUT = "SIGNOUT";
export const SIGNIN = "SIGNIN";
export const RESET_SIGN_IN = "RESET_SIGN_IN";

const baseUrl = "https://book-management-syatem.herokuapp.com/api/v1/"
const signUp = (data) => ({
        type: SIGNUP,
        payload: data
})

export const signOut = (ms) =>({
    type: SIGNOUT,
    payload: ms
})

export const resetSignIn = (ms) =>({
    type: RESET_SIGN_IN,
    payload: ms
})

export const signUpService = (data) =>{
    return (dispatch) => {
        axios.post(`${baseUrl}/user/registerUser`, data).then(res => {
            if(res.status === 200){
                    dispatch({
                        type: SIGNUP,
                        payload: res.data
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

export const signInService = (data) =>{
    return (dispatch) => {
        axios.post(`${baseUrl}/user/signInUser`, data).then(res => {
            if(res.status === 200){
                    dispatch({
                        type: SIGNIN,
                        payload: res.data
                    })
            }
            else {
                dispatch({
                    type: SIGNIN,
                    payload: {}
                })
            }
        }).catch(e =>{
            console.log(e);
            dispatch({
                type: SIGNIN,
                payload: {}
            })
        })
    }
}
  