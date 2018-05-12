/**
 * Created by weiqiujuan on 18-5-11.
 */
//Reddit头条应用案例
import {selectSubreddit, receivePosts, requestPosts, invalidatesubreddit} from "Reddit API/2/Action/actions";

const state = {
    selectedsubreddit: 'frontend',
    postsBySubreddit: {
        fronted: {
            isFetching: true,
            didInvalidate: false,
            items: []
        },
        reactjs: {
            isFetching: false,
            didInvalidate: false,
            lastUpdated: 1439478405547,
            items: [{
                id: 42,
                title: "confusion about flux and Relay"
            },
                {
                    id:500,
                    title:"Creating a simple Application Using React Js and Flux Architecture"
                }
            ]
        }
    }
};

//分开存储subreddit信息，为了缓存所有的subreddit．
// 当用户来回切换subreddit时，可以立即更新
//同时在不需要的时候可以不请求数据．
//每条帖子的列表都需要使用isFetching 来显示进度条，
// didInvalidate来标记数据是否过期，
// lastUpdate用来存放最后数据更新的时间
//items存放列表信息本身
//还有fetchedPageCount和nextPageUrl分页相关的state
