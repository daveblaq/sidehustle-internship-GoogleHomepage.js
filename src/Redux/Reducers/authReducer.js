import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../Actions/types';

const user = JSON.parse(localStorage.getItem('currentUserData'));

const initialState = {
    isLoggedIn:  user ? true :false ,
    loggedInUserInfo: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                loggedInUserInfo: action.payload
            }

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                loggedInUserInfo: {}
            }

        default:
            return {
                ...state
            }
    }
}

export default authReducer;