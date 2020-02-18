import { SIGNUP_API_REQUEST, SIGNUP_API_ERROR, SIGNUP_API_SUCCESS } from "../constants"

const initialState = {
    postResponse: [],
    pending: null,
    error: null
}

export function SignUpReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_API_REQUEST:
            return {
                ...state,
                pending: true
            }
        case SIGNUP_API_SUCCESS:
            return {
                ...state,
                pending: false,
                postResponse: action.payload
            }
        case SIGNUP_API_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        default:
            return state;
    }
}

//selector functions used to get defined parts of the state
export const getSignUp = state => state.postResponse;
export const getSignupRequest = state => state.pending;
export const getSignupError = state => state.error;