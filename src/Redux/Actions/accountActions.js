import axios from 'axios';

export const getBalance = (userId, currency) => dispatch => {
    axios.get(process.env.REACT_APP_GAME_BASE_API + `/balance/simple/${userId}`).then(res => {
        localStorage.setItem('balance', res.data.balance);
    })
}

export const getProfileDetails = (userId) => dispatch => {
    axios.get(process.env.REACT_APP_GAME_BASE_API + `/profile/${userId}`).then(res => {
        localStorage.setItem('profile', JSON.stringify(res && res.data.profile));
    })
}
