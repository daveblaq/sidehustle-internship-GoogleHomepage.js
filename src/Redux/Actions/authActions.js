import {LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS} from './types';
import axios from 'axios';
import {alert} from '../../components/reusables/Alert';

export const loginUser = (LoginDetails) => dispatch => {
    axios
        .post(process.env.REACT_APP_AUTH_API + '/login', LoginDetails)
        .then((res) => {
            res.status && res.status === 'success' && dispatch({type: LOGIN_SUCCESS, payload: res.data});
            alert('Login Successful', 'Redirecting...', 'success')
            localStorage.setItem('currentUserData', JSON.stringify(res.data));
            window
                .location
                .assign('/app/account');
        })
        .catch((err) => {
            dispatch({type: LOGIN_FAILED, payload: err.message})
            alert('Login Failed', err.message, 'error')
        })
}

export const logOut = (dispatch) => {
    dispatch({type: LOGOUT_SUCCESS})
    localStorage.clear();
    alert('Logout Successful', 'Goodbye', 'success')
}

export const verifyEmail = (email) => dispatch => {
    axios
        .post(process.env.REACT_APP_EMAIL_VERIFY, email)
        .then(res => {
            res && res.data && console.log(res.data)
            alert('Passcode Sent', res.data.message, 'success')
        })
        .catch(() => {
            alert('Passcode Not Sent', '', 'error');
        })
}

export const registerUser = (registerDetails) => dispatch => {
    axios
        .post(process.env.REACT_APP_REGISTER_API, registerDetails)
        .then(res => {
            console.log(res.data);
               window
                .location
                .assign('/app/account');
        })
        .catch(() => {
            alert('Registration Failed', '', 'error');
        })
}