/**
 * Created by weiqiujuan on 18-5-11.
 */
import fetch from 'cross-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}


export const RECEIVE_POSTS = "RECEIVE_POSTS";
function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

export const INVALDATE_SUBRIDDIT = "INVALDATE_SUBRIDDIT";
export function invaldateSubreddit(subreddit) {
    return {
        type: INVALDATE_SUBRIDDIT,
        subreddit
    }
}

//写一个thunk action 创建函数

export function fetchPosts(subreddit) {
    //Thunk middleware 如何处理函数
    //把dispatch方法通过参数的形式传给函数
    //这样就能dispatch action
    return function (dispatch) {
        //首次dispatch:更新应用的state来通知
        //API发起请求
        dispatch(requestPosts(subreddit));

        //thunk middleware 调用的函数可以有返回值，
        //它会被当作dispatch方法的返回值传递
        //我们返回一个等待处理的promise
        return fetch("http://www.subreddit.com/r/${subreddit}.json")
            .then(
                response => response.json(),
                //不要使用catch，因为会捕获
                error => console.log("An error occurred", error)
            ).then(json =>
                // 可以多次 dispatch！
                // 这里，使用 API 请求结果来更新应用的 state。

                dispatch(receivePosts(subreddit, json))
            )
    }

    function shouldFetchPosts(state, subreddit) {
        const posts = state.postsBySubreddit[subreddit];

        if (!posts) {
            return true;
        } else if (posts.isFetching) {
            return false;
        } else {
            return posts.didInvalidate;
        }
    }

    function fetchPostsIfNeeded(subreddit) {
        //函数也接受getState()方法，它让你选择接下来dispatch什么．
        //当缓存的值是可用时，减少网络请求很有用

        return (dispatch, getState) => {
            if (shouldFetchPosts(getState(), subreddit)) {
                return dispatch(fetchPosts(subreddit))
            } else {
                return Promise.resolve();
            }
        }
    }
}
