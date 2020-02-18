//import axios from 'axios';
import { SIGNUP_API_REQUEST, SIGNUP_API_ERROR, SIGNUP_API_SUCCESS } from "../constants"

//Actions Creators
function signupRequest() {
    return {
        type: SIGNUP_API_REQUEST
    }
}

function signupError(error) {
    return {
        type: SIGNUP_API_ERROR,
        error: error
    }
}

function signupSuccess(postResponse) {
    return {
        type: SIGNUP_API_SUCCESS,
        postResponse: postResponse
    }
}

const api = {
    "app": "portal",
    "apiKey": "W2U5w19kxOqDjbFGhKDF",
    "apiSecret": "bee5ab22-a5e4-4efc-88eb-f4dc5c003080"
}

//Using axios
/*export const signUpCustomer = (ext, postData) => {
    return function (dispatch) {
        dispatch(signupRequest);
        const req = "https://easipay-test.azurewebsites.net/easiPay/" + ext;
        const apiWithPostData = { ...api, ...postData }
        return axios.post(req, apiWithPostData)
            .then(response => {
                dispatch(signupSuccess(response.data))
            })
            .catch(error => {
                dispatch(signupError(error));
                console.log(error)
            })
    }
}*/

//Using regular fetch
export const signUpCustomer = (ext, postData) => {
    return function (dispatch) {
        dispatch(signupRequest());
        const req = "https://easipay-test.azurewebsites.net/easiPay/" + ext;
        const apiWithPostData = { ...api, ...postData }
        return fetch(req, { method: "POST", body: JSON.stringify(apiWithPostData) })
            .then(response => response.json())
            .then(response => {
                dispatch(signupSuccess(response.data))
                console.log(response);
                return response
            })
            .catch(error => {
                dispatch(signupError(error));
                console.log(error)
            })
    }
}

