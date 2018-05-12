/**
 * Created by weiqiujuan on 18-5-11.
 */
import {combineRedures} from 'redux';
import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from 'Reddit API/2/Action/actions';

function selectedsubreddit(state = 'recactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state
    }
}

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

function postBySubreddit(state = [], action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            });
        default:
            return state;
    }
}

const rootReducer = combineRedures({
    postsBySubreddit,
    selectedSubreddit
});

export default rootReducer;

//1.return Object.assign(({},state,{[action.subreddit]:posts(state[action.subreddit],action)}))
//2.let nextState = {};
//nextState[action.subreddit] = posts(state[action.subreddit], action);
//return Object.assign({}, state, nextState);
//第一个代码判断和第二个代码片段完全等价