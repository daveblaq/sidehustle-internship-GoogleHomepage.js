import {combineReducers} from 'redux';
import authReducer from './authReducer';
import gamesReducer from './gamesReducer';
import accountReducer from './accountReducer';

export default combineReducers({
    auth: authReducer,
    games: gamesReducer,
    account: accountReducer
});