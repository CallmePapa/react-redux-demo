/**
 * Created by weiqiujuan on 18-5-11.
 */
//在applyMiddleware() 中，
//我们取得最终完整的被包装过的 dispatch() 函数，
//并返回一个 store 的副本：
function applyMiddleware(store, middlewares) {
    middlewares = middlewares.slice();
    middlewares.reverse();
//确保如果在middleware中调用的是store.dispatch(action),
// 而不是next(action),这个操作会再次遍历包含当前middleware在内的整个middleware链．
    let dispatch = store.dispatch;
    middlewares.forEach(middleware =>
        dispatch = middleware(store)(dispatch)
    );
    //为了保证你只能应用middleware一次，他在作用在createStore()上而不是store本身
    //因此它的签名不是（store,middlewares）=>store,而是（...middlewares）=>(createStore) => createStore。
    return Object.assign({},store,{dispatch});
}