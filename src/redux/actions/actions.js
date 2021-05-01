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

export const GET_BOOKS = "GET_BOOKS";
export const GET_BOOKS_FAILDED = "GET_BOOKS_FAILDED"
export const GET_BOOKS_LOADING = "GET_BOOKS_LOADING"
export const RESET_GET_BOOKS = "RESET_GET_BOOKS"


export const ADD_BOOK = "ADD_BOOK";
export const ADD_BOOK_FAILED = "ADD_BOOK_FAILED"
export const ADD_BOOK_LOADING = "ADD_BOOK_LOADING"
export const RESET_ADD_BOOK = "RESET_ADD_BOOK"


const baseUrl = "https://book-management-syatem.herokuapp.com/api/v1/"
const localBaseUrl = "http://localhost:3000/api/v1/"
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

export const getBooksLoading = (ms) => ({
    type: GET_BOOKS_LOADING,
    payload: ms
})
export const getBooksFailed = (ms) => ({
    type: GET_BOOKS_FAILDED,
    payload: ms
})
export const resetBooks = (ms) => ({
    type: RESET_GET_BOOKS,
    payload: ms
})

export const addBookLoading = (ms) => ({
    type: ADD_BOOK_LOADING,
    payload: ms
})
export const addBookFailed = (ms) => ({
    type: ADD_BOOK_FAILED,
    payload: ms
})
export const resetaddBook = (ms) => ({
    type: RESET_ADD_BOOK,
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
    }
}

export const getAllBooks = (data) =>{
    const request = axios.post(`${baseUrl}/books/signInUser`,data);

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
    }
}

export const addBook = (data) => {
    let newData = new FormData();
    console.log(data.image);
    newData.append("image", data.image);
    newData.append("book_title", data.book_name);
    newData.append("author_name", data.author_name);
    newData.append("category", data.category)
    newData.append("description", data.w3review)
    const request = axios.post(`${baseUrl}book/addBook`,
    newData,
    );
    return (dispatch) => {
        dispatch(addBookLoading(true));

        request.then((response) => {
            // console.log(response)
            if (response.status == "200") {
                console.log(response)
                dispatch({
                    type: ADD_BOOK,
                    payload: response.data
                })
            }
            else {
                throw  new Error(response.data.msg)
            }
        })
        .catch((error) => {
            console.log(error)
            // console.log(error);
            if (error.response) {
                if (error.response.status == "404" && !error.response.data) {
                    dispatch(addBookFailed(`${error.response.status}: api not found`))
                }
                else {
                    dispatch(addBookFailed(error.response.data.msg))
                }
            }
            else if (error.request) {
                dispatch(addBookFailed("Network Error"))
            }
            else {
                dispatch(addBookFailed(error.message))
            }
        })
    }   
}