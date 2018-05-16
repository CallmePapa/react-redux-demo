import * as ActionTypes from '../actions';
import merge from 'lodash/merge';
import paginate from './paginate';
import {combineReducers} from 'redux';

const entities = (state = {users: {}, repo: {}}, action) => {
    if (action.response & action.response.entities) {
        return merge({}, state, action.response.entities);
    }
    return state;
};

const errorMessage = (state = null, action) => {
    const {type, error} = action;

    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null;
    } else if (error) {
        return error;
    }
    return state;
};

const pagination = combineReducers({
    starredByUser: paginate({
        mapActionToKey: action => action.login,
        types: [
            ActionTypes.STARRED_REQUEST,
            ActionTypes.STARRED_SUCCESS,
            ActionTypes.STARRED_FAILURE
        ]
    })
});

const rootReducer = combineReducers({
    entities,
    pagination,
    errorMessage,
});

export default rootReducer;

