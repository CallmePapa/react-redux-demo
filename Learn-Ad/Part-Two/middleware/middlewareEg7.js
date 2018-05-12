/**
 * Created by weiqiujuan on 18-5-11.
 */

/*记录所有被发起的action以及产生的新的state*/
const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
};

/*在state更新完成和listener被通知之后发送崩溃报告*/

const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception', err);
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        });
        throw err;
    }
};

/**
 * 通过 { meta: { raf: true } } 让 action 在一个 rAF 循环帧中被发起。
 * 在这个案例中，让 `dispatch` 返回一个从队列中移除该 action 的函数。
 */

const rafScheduler = store => next => {
    let queuedActions = [];
    let frame = null;

    function loop() {
        frame = null;
        try {
            if (queuedActions.length) {
                next(queuedActions.shift());
            }
        } finally {
            maybeRaf();
        }
    }

    function maybeRaf() {
        if (queuedActions.length && !frame) {
            frame = requestAnimationFrame(loop);
        }
    }

    return action => {
        if (!action.meta || !action.meta.raf) {
            return next(action);
        }

        queuedActions.push(action);
        maybeRaf();

        return function cancel() {
            queuedActions = queuedActions.filter(a => a !== action)
        }
    }
};

/*使你除了action之外還可以发起promise．如果这个promise被resolved,
 它的结果被作为action发起．这个promise会被dispatch返回，因此调用者可以处理rejection
 * */

const vanillaPromise = store => next => action => {
    if (typeof action.then !== 'function') {
        return Promise.resolve(action).then(store.dispatch);
    }

    return Promise.resolve(action).then(store.dispatch);
};

/*让你可以发起带有一个｛promise｝属性的特殊action.
 * 这个middleware会在开始时发起一个action,并在这个promise,
 * resolve时发起另一个成功(或失败的)action.
 *　起见，dispatch 会返回这个promise让调用者可以等待．
 * */

const readyStatePromise = store => next => action => {

    if (!action.promise) {
        return next(action);
    }

    function makeAction(ready, data) {
        let newAction = Object.assign({}, action, {ready}, data);
        delete newAction.promise;
        return newAction;
    }

    next(makeAction(false));
    return action.promise.then(
        resulet => next(makeAction(true, {result})),
        error => next(makeAction(true, {error}))
    );
};

/*让你发起一个函数来代替action
 * 这个函数接收dispatch和getState作为参数
 * 对于根据getstate()情况提前退出，或者异步控制流（dispatch）一些其他东西）来说，这非常有用。
 * dispatch 会返回被发起函数的返回值．
 * */

const thunk = store => next => action => {
    typeof action === 'function' ? action(store.dispatch, store.getState):
    next(action)
};

let todoApp=combineReducers(reducers);
let store=createStore(
    todoApp,
    applyMiddleware(
        rafScheduler,
        timeoutScheduler,
        thunk,
        vanillaPromise,
        readyStatePromise,
        logger,
        crashReporter
    )
)