/**
 * Created by weiqiujuan on 18-5-11.
 */
//用户选择要显示的subreddit;
export const SELECT_SUBREDDIT = 'SELECT_SUBRDDIT';
export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    };
}
//按刷新按钮来更新;
export const INVALDATE_SUBREDDIT = "INVALDATE_SUBREDDIT"

export function invalidatesubreddit(subreddit) {
    return {
        type: INVALDATE_SUBREDDIT,
        subreddit
    };
}

//需要获取指定的subreddit的帖子的时候，需要dispatch　REQUEST_POSTS
export const REQUEST_POSTS = "REQUEST_POSTS";

export function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

//当请求收到响应的时候
export const RECEIVE_POSTS = "RECEIVE_PSOTS";

export function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        post: json.data.children.map(child => child.data),
        receivedAt:Date.now()
    };
}


