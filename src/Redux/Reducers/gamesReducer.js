import {GET_GAMES, GET_SUBSCRIBED_GAMES, REMOVE_SUBSCRIPTION, SUBSCRIBE_SUCCESS} from '../Actions/types';

const initialState = {
    ourGames: [],
    subscribedGames: [],
    tournaments: [
        {
            rewards: '$50',
            name: 'Candy crush'
        }, {
            rewards: '$50',
            name: 'Candy crush'
        }, {
            rewards: '$50',
            name: 'Candy crush'
        }, {
            rewards: '$50',
            name: 'Candy crush'
        }, {
            rewards: '$50',
            name: 'Candy crush'
        }
    ]
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE_SUCCESS:
            return {
                ...state,
                subscribedGames: [
                    ...state.subscribedGames,
                    action.payload
                ]
            }

        case REMOVE_SUBSCRIPTION:
            return {
                ...state,
                subscribedGames: state
                    .subscribedGames
                    .filter(gameInfo => gameInfo.id !== action.payload)
            }

            case GET_GAMES:
                return{
                    ...state,
                    ourGames: action.payload
                }

                case GET_SUBSCRIBED_GAMES:
                    return{
                        ...state,
                        subscribedGames: action.payload
                    }

        default:
            return {
                ...state
            }
    }
}

export default gamesReducer;