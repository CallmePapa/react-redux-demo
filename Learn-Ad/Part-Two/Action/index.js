/**
 * Created by weiqiujuan on 18-5-11.
 */
import thunkMiddleware from 'redux-thunk';
import {creatLogger} from 'redux-logger';
import {createStore, applyMidleware} from"redux";
import {selectSubreddit, fetchPosts} from './createActionFun'
import rootReducer from './reducers';

const loggerMiddleware = creteLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,//允许我们dispatch()函数
        loggerMiddleware//一个很便捷的middleware，用来打印action日志
    )
);
store.dispatch(selectSubreddit('reactjs'));
store.dispatch(fetchPosts('reactjs'))
    .then(() => console.log(store.getState()));

//thunk的一个优点就是他的结果可以再次被dispatch

store.dispatch(fetchPostsIfNeeded('reactjs'))
    .then(() => console.log(store.getState()));