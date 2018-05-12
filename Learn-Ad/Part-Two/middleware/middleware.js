/**
 * Created by weiqiujuan on 18-5-11.
 */
const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err);
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        });
        throw err;
    }
};
//middleware接收了一个next()的dispatch函数，
// 并返回一个dispatch函数，返回的函数会作为下一个middleware 的 next()，
// 我们将store作为顶层的参数，使得他可以在所有middleware中被使用