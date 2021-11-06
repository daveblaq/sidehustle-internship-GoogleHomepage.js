import axios from 'axios';
import {alert} from '../../components/reusables/Alert';
import {SUBSCRIBE_SUCCESS, REMOVE_SUBSCRIPTION, GET_GAMES, GET_SUBSCRIBED_GAMES} from './types';

export const SubscribeGame = (gameInfo) => dispatch => {

    const user = JSON.parse(localStorage.getItem('currentUserData'));

    const SubscribeData = {
        user_id: user.id,
        game_id: gameInfo.id,
        price: gameInfo.price,
        user_email: user.email
    }

    axios
        .post(process.env.REACT_APP_GAME_BASE_API + '/subscribe', SubscribeData)
        .then((res) => {
            if (res.status !== 'error') {
                dispatch({type: SUBSCRIBE_SUCCESS, payload: gameInfo})
                alert('Success', 'Subscription successful', 'success')
            } else {
                alert('Cannot Subscribe to this Game', '', 'error')
            }
        })
        .catch(err => {
            alert('Cannot Subscribe to this Game', '', 'error')
        })
};

export const removeSubscription = (gameInfo) => dispatch => {
    let data = {
        subscription_id: JSON.stringify(gameInfo.id)
    }
    axios
        .post(process.env.REACT_APP_GAME_BASE_API + '/unsubscribe', data)
        .then(res => {
            if (res.status !== 'error') {
                console.log(res);
                dispatch({
                    type: REMOVE_SUBSCRIPTION,
                    payload: res.subscription && res.subscription.id
                })
            }
        })
}

export const getSubscribedGames = () => dispatch => {
    const user = JSON.parse(localStorage.getItem('currentUserData'));

    let getSubGame = {
        user_id: user.id
    }

    axios
        .post('https://api.abitplay.io/api/v1/subscribed', getSubGame)
        .then(res => {
            dispatch({type: GET_SUBSCRIBED_GAMES, payload: res.data.subscription})
        })
}

export const getGames = () => dispatch => {
    axios
        .get(process.env.REACT_GAME_URL)
        .then(res => {
            dispatch({type: GET_GAMES, payload: res.data})
        })
        .catch(err => {
            alert('Cannot Load Games', err.response.data.message, 'error')
        })
}
