// import {
//     SIGNUP
// } from "./action-types";
import axios from 'axios';

export const SIGNUP = "SIGNUP";
export const RESET_SIGN_UP= "RESET_SIGN_UP";
export const SIGNUP_FAILED = "SIGNUP_FAILED";
export const SIGNUP_LOADING = "SIGNUP_LOADING";

export const SIGNOUT = "SIGNOUT";

export const SIGNIN = "SIGNIN";
export const RESET_SIGN_IN = "RESET_SIGN_IN";
export const SIGNIN_FAILED = "SIGNIN_FAILED";
export const SINGIN_LOADING = "SINGIN_LOADING";

const baseUrl = "https://book-management-syatem.herokuapp.com/api/v1/"
const signUp = (data) => ({
        type: SIGNUP,
        payload: data
})
export const resetSignUp = (ms) => ({
    type: RESET_SIGN_UP,
    payload: ms
})

export const signUpFailed = (ms) => ({
    type: SIGNUP_FAILED,
    payload: ms
})

export const signUpLoading = (ms) => ({
    type: SIGNUP_LOADING,
    payload: ms
})



export const signOut = (ms) =>({
    type: SIGNOUT,
    payload: ms
})

export const resetSignIn = (ms) =>({
    type: RESET_SIGN_IN,
    payload: ms
})

export const signInFailed = (ms) => ({
    type: SIGNIN_FAILED,
    payload: ms
})

export const signInLoading = (ms) => ({
    type: SINGIN_LOADING,
    payload: ms
})

export const signUpService = (data) =>{
    const request = axios.post(`${baseUrl}/user/registerUser`,data);

    return (dispatch) => {
        dispatch(signUpLoading(true));

        request.then((response) => {
            console.log(response)
            if (response.status == "200") {
                dispatch({
                    type: SIGNUP,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            console.log(error);
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(signUpFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(signUpFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(signUpFailed("Network Error"))
            }
            else {
                dispatch(signUpFailed(error.message))
            }
        })
        // axios.post(`${baseUrl}/user/registerUser`, data).then(res => {
        //     if(res.status === 200){
        //             dispatch({
        //                 type: SIGNUP,
        //                 payload: res.data
        //             })
        //     }
        //     else {
        //         dispatch({
        //             type: SIGNUP,
        //             payload: {}
        //         })
        //     }
        // }).catch(e =>{
        //     console.log(e);
        //         dispatch(signUp({}))
        // })
    }
}


export const signInService = (data) =>{
    const request = axios.post(`${baseUrl}/user/signInUser`,data);

    return (dispatch) => {
        dispatch(signInLoading(true));

        request.then((response) => {
            // console.log(response)
            if (response.status == "200") {
                dispatch({
                    type: SIGNIN,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            // console.log(error);
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(signInFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(signInFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(signInFailed("Network Error"))
            }
            else {
                dispatch(signInFailed(error.message))
            }
        })
        // axios.post(`${baseUrl}/user/registerUser`, data).then(res => {
        //     if(res.status === 200){
        //             dispatch({
        //                 type: SIGNUP,
        //                 payload: res.data
        //             })
        //     }
        //     else {
        //         dispatch({
        //             type: SIGNUP,
        //             payload: {}
        //         })
        //     }
        // }).catch(e =>{
        //     console.log(e);
        //         dispatch(signUp({}))
        // })
    }
}

// export const signInService = (data) =>{
//     return (dispatch) => {
//         axios.post(`${baseUrl}/user/signInUser`, data).then(res => {
//             if(res.status === 200){
//                     dispatch({
//                         type: SIGNIN,
//                         payload: res.data
//                     })
//             }
//             else {
//                 dispatch({
//                     type: SIGNIN,
//                     payload: {}
//                 })
//             }
//         }).catch(e =>{
//             console.log(e);
//             dispatch({
//                 type: SIGNIN,
//                 payload: {}
//             })
//         })
//     }
// }
  